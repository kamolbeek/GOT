import { useCallback, useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Ambience.css'

const VOLUME = 0.34
const FADE_MS = 1600
const PREF_KEY = 'got-theme-muted'

// Background music is meant to sit under the site, so it fades rather than
// snapping on and off.
const useFade = (audioRef) => {
  const frame = useRef(0)

  return useCallback((to, ms, done) => {
    const el = audioRef.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    const from = el.volume
    const t0 = performance.now()
    const step = (now) => {
      const p = Math.min(1, (now - t0) / ms)
      el.volume = from + (to - from) * p
      if (p < 1) frame.current = requestAnimationFrame(step)
      else done?.()
    }
    frame.current = requestAnimationFrame(step)
  }, [audioRef])
}

const Ambience = () => {
  const { t } = useLang()
  const audioRef = useRef(null)
  const fade = useFade(audioRef)

  const [playing, setPlaying] = useState(false)
  // Once someone silences it, nothing may start it again on their behalf.
  const silenced = useRef(false)

  const start = useCallback(() => {
    const el = audioRef.current
    if (!el || !el.paused) return Promise.resolve()
    el.volume = 0
    return el.play().then(() => {
      setPlaying(true)
      fade(VOLUME, FADE_MS)
    })
  }, [fade])

  const stop = useCallback(() => {
    const el = audioRef.current
    if (!el || el.paused) return
    setPlaying(false)
    fade(0, 400, () => el.pause())
  }, [fade])

  const toggle = () => {
    if (playing) {
      silenced.current = true
      try { localStorage.setItem(PREF_KEY, '1') } catch { /* private mode */ }
      stop()
    } else {
      silenced.current = false
      try { localStorage.removeItem(PREF_KEY) } catch { /* private mode */ }
      start().catch(() => {})
    }
  }

  // The theme waits for the first scroll and then keeps going on its own.
  // Browsers only grant playback off a real gesture, and a scroll is not
  // always one, so a first tap or keypress is armed as the fallback.
  useEffect(() => {
    try { silenced.current = localStorage.getItem(PREF_KEY) === '1' } catch { /* private mode */ }
    if (silenced.current) return

    let armed = true
    const gestures = ['pointerdown', 'keydown', 'touchstart']

    const onGesture = () => {
      if (!armed || silenced.current) return
      armed = false
      cleanup()
      start().catch(() => {})
    }

    const onScroll = () => {
      if (!armed || silenced.current || window.scrollY < 40) return
      armed = false
      window.removeEventListener('scroll', onScroll)
      start()
        .then(() => gestures.forEach(g => window.removeEventListener(g, onGesture)))
        .catch(() => { armed = true })   // blocked: wait for a gesture instead
    }

    const cleanup = () => {
      window.removeEventListener('scroll', onScroll)
      gestures.forEach(g => window.removeEventListener(g, onGesture))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    gestures.forEach(g => window.addEventListener(g, onGesture, { passive: true }))
    return cleanup
  }, [start])

  const label = playing ? t.audio.pause : t.audio.play

  return (
    <>
      <audio ref={audioRef} loop preload="auto" onEnded={() => setPlaying(false)}>
        <source src="/audio/theme.m4a" type="audio/mp4" />
        <source src="/audio/theme.mp3" type="audio/mpeg" />
      </audio>

      <button
        type="button"
        className={`ambience ${playing ? 'on' : ''}`}
        onClick={toggle}
        title={label}
        aria-label={label}
        aria-pressed={playing}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path className="amb-horn" d="M4 9.5h3.6L12 5.4v13.2L7.6 14.5H4z" />
          {playing ? (
            <>
              <path className="amb-wave amb-wave--1" d="M15.2 9.4a3.6 3.6 0 0 1 0 5.2" />
              <path className="amb-wave amb-wave--2" d="M17.6 7.2a7 7 0 0 1 0 9.6" />
              <path className="amb-wave amb-wave--3" d="M20 5a10.4 10.4 0 0 1 0 14" />
            </>
          ) : (
            <path className="amb-cross" d="M15.6 9.6l4.8 4.8M20.4 9.6l-4.8 4.8" />
          )}
        </svg>
      </button>
    </>
  )
}

export default Ambience
