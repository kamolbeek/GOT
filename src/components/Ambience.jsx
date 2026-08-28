import { useCallback, useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Ambience.css'

const VOLUME = 0.34
const FADE_MS = 1600
const PREF_KEY = 'got-theme-muted'

const SOURCES = [
  { src: '/audio/theme.m4a', type: 'audio/mp4' },
  { src: '/audio/theme.mp3', type: 'audio/mpeg' },
]

// Background music is meant to sit under the site, so it fades rather than
// snapping on and off.
const useFade = (audioRef) => {
  const frame = useRef(0)

  return useCallback((to, ms, done) => {
    const el = audioRef.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    // A hidden tab stops serving frames, which would strand the fade at
    // silence — there, jump straight to the target.
    if (document.hidden || ms <= 0) {
      el.volume = to
      done?.()
      return
    }
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

  // 'idle' | 'loading' | 'playing' | 'unavailable'.  The state is read off the
  // audio element itself, never off the play() promise — a promise resolves
  // the moment playback is *allowed*, which on a slow line is long before a
  // single note is audible, and the button would sit there claiming to play.
  const [status, setStatus] = useState('idle')
  const wanted = useRef(false)
  const dead = useRef(0)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return

    const onPlaying = () => {
      // A play that was called off while it was still buffering must not
      // sneak into sound when the buffer finally fills.
      if (!wanted.current) { el.pause(); return }
      setStatus('playing')
      fade(VOLUME, FADE_MS)
    }
    const onStall = () => { if (wanted.current) setStatus('loading') }
    const onPause = () => { if (!wanted.current) setStatus('idle') }
    // Enough arrived while it was waiting — take the second run at it.
    const onCanPlay = () => { if (wanted.current && el.paused) el.play().catch(() => {}) }
    const onError = () => { wanted.current = false; setStatus('unavailable') }

    el.addEventListener('playing', onPlaying)
    el.addEventListener('waiting', onStall)
    el.addEventListener('stalled', onStall)
    el.addEventListener('pause', onPause)
    el.addEventListener('canplay', onCanPlay)
    el.addEventListener('error', onError)
    // Start filling the buffer now, so a click has something to play at once —
    // unless the browser already has it in hand, since load() would restart it.
    if (el.networkState !== el.NETWORK_LOADING && el.readyState === 0) el.load()

    return () => {
      el.removeEventListener('playing', onPlaying)
      el.removeEventListener('waiting', onStall)
      el.removeEventListener('stalled', onStall)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('canplay', onCanPlay)
      el.removeEventListener('error', onError)
    }
  }, [fade])

  // A <source> that fails is only reported on itself; the element goes quiet
  // about it until every candidate is spent.
  const onSourceError = () => {
    dead.current += 1
    if (dead.current >= SOURCES.length) {
      wanted.current = false
      setStatus('unavailable')
    }
  }

  const start = useCallback(() => {
    const el = audioRef.current
    if (!el || wanted.current || dead.current >= SOURCES.length) return
    wanted.current = true
    setStatus('loading')
    el.volume = 0
    el.play().catch((err) => {
      if (el.error) { wanted.current = false; setStatus('unavailable'); return }
      // Refused for want of a gesture: back to a plain, honest off.
      if (err?.name === 'NotAllowedError') { wanted.current = false; setStatus('idle'); return }
      // Anything else means it simply has no data yet — canplay retries.
    })
  }, [])

  const stop = useCallback(() => {
    const el = audioRef.current
    if (!el) return
    wanted.current = false
    setStatus('idle')
    fade(0, 350, () => el.pause())
  }, [fade])

  const toggle = () => {
    if (status === 'unavailable') return
    if (status === 'idle') {
      try { localStorage.removeItem(PREF_KEY) } catch { /* private mode */ }
      start()
    } else {
      try { localStorage.setItem(PREF_KEY, '1') } catch { /* private mode */ }
      stop()
    }
  }

  // The theme waits for the first scroll and then keeps going on its own.
  // Browsers only grant playback off a real gesture, and a scroll is not
  // always one, so a first tap or keypress is armed as the fallback.
  useEffect(() => {
    let muted = false
    try { muted = localStorage.getItem(PREF_KEY) === '1' } catch { /* private mode */ }
    if (muted) return

    let armed = true
    const gestures = ['pointerdown', 'keydown', 'touchstart']

    const fire = (e) => {
      // The button drives itself; letting this fire too would start and stop
      // it on the same press.
      if (!armed || e?.target?.closest?.('.ambience')) return
      armed = false
      cleanup()
      start()
    }
    const onScroll = () => { if (window.scrollY >= 40) fire() }
    const cleanup = () => {
      window.removeEventListener('scroll', onScroll)
      gestures.forEach(g => window.removeEventListener(g, fire))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    gestures.forEach(g => window.addEventListener(g, fire, { passive: true }))
    return cleanup
  }, [start])

  const label = status === 'unavailable' ? t.audio.unavailable
    : status === 'loading' ? t.audio.loading
    : status === 'playing' ? t.audio.pause
    : t.audio.play

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        {SOURCES.map(s => (
          <source key={s.src} src={s.src} type={s.type} onError={onSourceError} />
        ))}
      </audio>

      <button
        type="button"
        className={`ambience ambience--${status}`}
        onClick={toggle}
        disabled={status === 'unavailable'}
        title={label}
        aria-label={label}
        aria-pressed={status === 'playing' || status === 'loading'}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path className="amb-horn" d="M4 9.5h3.6L12 5.4v13.2L7.6 14.5H4z" />
          {status === 'playing' && (
            <>
              <path className="amb-wave amb-wave--1" d="M15.2 9.4a3.6 3.6 0 0 1 0 5.2" />
              <path className="amb-wave amb-wave--2" d="M17.6 7.2a7 7 0 0 1 0 9.6" />
              <path className="amb-wave amb-wave--3" d="M20 5a10.4 10.4 0 0 1 0 14" />
            </>
          )}
          {status === 'loading' && (
            <circle className="amb-spin" cx="17.6" cy="12" r="3.6" />
          )}
          {(status === 'idle' || status === 'unavailable') && (
            <path className="amb-cross" d="M15.6 9.6l4.8 4.8M20.4 9.6l-4.8 4.8" />
          )}
        </svg>
      </button>
    </>
  )
}

export default Ambience
