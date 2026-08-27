import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../i18n/LanguageContext'
import { CHAPTER_META } from '../i18n/translations'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

// How many viewport heights the pinned hero occupies
const SCROLL_VH = 6
// Frame rate of the source video — we never seek finer than one frame
const VIDEO_FPS = 25
// 0 = frozen, 1 = instant. Lower = smoother but laggier behind the scroll.
const EASE = 0.14

const Hero = () => {
  const { t } = useLang()

  const containerRef    = useRef(null)
  const stickyRef       = useRef(null)
  const videoRef        = useRef(null)
  const overlayRef      = useRef(null)
  const titleRef        = useRef(null)
  const subtitleRef     = useRef(null)
  const bodyRef         = useRef(null)
  const sigilRef        = useRef(null)
  const progressRef     = useRef(null)
  const vignetteRef     = useRef(null)
  const chapterLabelRef = useRef(null)
  const runeBarRef      = useRef(null)

  // Live scroll progress (0…1) — written by ScrollTrigger, read by the rAF loop.
  // A ref, not state: this must never trigger a React re-render.
  const progress    = useRef(0)
  const prevChapter = useRef(-1)

  const [activeChapter, setActiveChapter] = useState(0)
  const [videoReady, setVideoReady]       = useState(false)
  const [vh, setVh]                       = useState(() => window.innerHeight)

  // ─── Text swap between chapters ───────────────────────────────────────────
  const paintChapter = useCallback((idx, animate = true) => {
    const meta = CHAPTER_META[idx]
    const copy = t.chapters[meta.id]
    if (!copy) return

    const write = () => {
      if (titleRef.current)    titleRef.current.textContent    = copy.title
      if (subtitleRef.current) subtitleRef.current.textContent = copy.subtitle
      if (bodyRef.current)     bodyRef.current.textContent     = copy.body
      if (sigilRef.current)    sigilRef.current.textContent    = meta.sigil
      if (chapterLabelRef.current) {
        chapterLabelRef.current.textContent =
          `${String(idx + 1).padStart(2, '0')} / ${String(CHAPTER_META.length).padStart(2, '0')}`
      }
    }

    const nodes = [sigilRef.current, subtitleRef.current, titleRef.current, bodyRef.current]

    if (!animate) {
      write()
      gsap.set(nodes, { y: 0, opacity: 1 })
      return
    }

    gsap.timeline()
      .to(nodes, { y: -22, opacity: 0, duration: 0.28, ease: 'power2.in', stagger: 0.03 })
      .call(write)
      .fromTo(
        nodes,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 }
      )
  }, [t])

  // ─── Re-paint on language change (no animation, instant swap) ─────────────
  useEffect(() => {
    paintChapter(prevChapter.current < 0 ? 0 : prevChapter.current, false)
  }, [paintChapter])

  // ─── Wait until the video can actually be seeked ──────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const markReady = () => setVideoReady(true)

    // readyState >= 2 (HAVE_CURRENT_DATA) means seeking will return frames
    if (video.readyState >= 2) {
      markReady()
    } else {
      video.addEventListener('loadeddata', markReady, { once: true })
      video.addEventListener('canplay', markReady, { once: true })
    }
    return () => {
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('canplay', markReady)
    }
  }, [])

  // ─── Keep the scroll runway in sync with the viewport ─────────────────────
  useEffect(() => {
    let timer
    const onResize = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setVh(window.innerHeight)
        ScrollTrigger.refresh()
      }, 150)
    }
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // ─── ScrollTrigger + rAF scrub loop ───────────────────────────────────────
  useEffect(() => {
    if (!videoReady) return

    const video     = videoRef.current
    const container = containerRef.current
    const duration  = video.duration || 1
    const frame     = 1 / VIDEO_FPS

    video.pause()

    // gsap.context scopes every trigger created inside it, so cleanup only
    // kills our own — never Section1's observers or other components'.
    const ctx = gsap.context(() => {
      // ONE trigger drives everything. The old code ran two overlapping
      // triggers over the same range, doubling the per-frame work.
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${window.innerHeight * SCROLL_VH}`,
        pin: stickyRef.current,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // No `scrub` here: we do our own easing in the rAF loop below, so the
        // seek rate is decoupled from how fast the wheel fires.
        onUpdate: (self) => { progress.current = self.progress },
      })

      // Fade the overlay in, never animate its gradient. GSAP interpolates a
      // `background` tween by matching numbers positionally, and the computed
      // shorthand carries extras (background-color, position, size), so the
      // colour stops get paired against the wrong numbers and come out in
      // descending order — which the browser clamps into a hard horizontal
      // seam across the hero. opacity is compositor-only anyway, which is what
      // enhance.css already declares will-change for.
      gsap.to(overlayRef.current, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${window.innerHeight * SCROLL_VH}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      if (runeBarRef.current) {
        gsap.fromTo(
          runeBarRef.current.querySelectorAll('.rune-tick'),
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1, opacity: 1, stagger: 0.05, duration: 0.6,
            ease: 'elastic.out(1,0.5)',
            scrollTrigger: { trigger: container, start: 'top 80%' },
          }
        )
      }

      gsap.fromTo(
        [sigilRef.current, subtitleRef.current, titleRef.current, bodyRef.current],
        { y: 46, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.09, delay: 0.2 }
      )
    }, container)

    // ── The scrub loop ──
    // Seeking a video is asynchronous. The original code assigned
    // `currentTime` on every scroll event, so seeks piled up faster than the
    // decoder could serve them and the picture froze. Here we hold exactly one
    // seek in flight and only issue the next once `seeked` has fired.
    let raf = 0
    let shown = 0          // eased playhead
    let inFlight = false
    let lastChapter = -1

    const onSeeked = () => { inFlight = false }
    video.addEventListener('seeked', onSeeked)

    const tick = () => {
      const p = progress.current
      const target = p * duration

      shown += (target - shown) * EASE
      if (Math.abs(target - shown) < frame * 0.4) shown = target

      if (!inFlight && Math.abs(video.currentTime - shown) > frame) {
        inFlight = true
        video.currentTime = shown
      }

      // Cheap compositor-only writes (transform/opacity — never width/left)
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${p})`
      }
      if (vignetteRef.current) {
        vignetteRef.current.style.opacity = String(0.4 + Math.sin(p * Math.PI) * 0.14)
      }

      let idx = CHAPTER_META.findIndex(c => p >= c.progress[0] && p < c.progress[1])
      if (idx === -1) idx = CHAPTER_META.length - 1
      if (idx !== lastChapter) {
        lastChapter = idx
        prevChapter.current = idx
        setActiveChapter(idx)
        paintChapter(idx, true)
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Layout is only final once fonts and images have settled
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(refreshTimer)
      video.removeEventListener('seeked', onSeeked)
      ctx.revert()
    }
  }, [videoReady, paintChapter])

  // ─── Render ───────────────────────────────────────────────────────────────
  const navItems = [
    { label: t.nav.world,      href: '#0' },
    { label: t.nav.characters, href: '#characters' },
    { label: t.nav.houses,     href: '#houses' },
    { label: t.nav.history,    href: '#0' },
  ]

  return (
    <>
      <div className={`got-loading ${videoReady ? 'hidden' : ''}`}>
        <div className="got-loading-logo">{t.brand}</div>
        <div className="got-loading-sub">{t.loadingSub}</div>
        <div className="got-loading-bar-wrap">
          <div className="got-loading-bar-fill" />
        </div>
      </div>

      <div
        ref={containerRef}
        className="got-container"
        style={{ height: `${vh * (SCROLL_VH + 1)}px` }}
      >
        <div ref={stickyRef} className="got-sticky">

          <video
            ref={videoRef}
            className="got-video"
            src="/video/one.mp4"
            playsInline
            muted
            preload="auto"
            disablePictureInPicture
          />

          <div ref={vignetteRef} className="got-vignette" />
          <div ref={overlayRef}  className="got-overlay" />
          <div className="got-grain" />

          {['tl', 'tr', 'bl', 'br'].map(pos => (
            <div key={pos} className={`got-corner got-corner-${pos}`}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2 L2 20 M2 2 L20 2" stroke="#c9a84c" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M2 2 L8 8" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.4" />
                <rect x="1" y="1" width="4" height="4" fill="none" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.6" />
              </svg>
            </div>
          ))}

          <nav className="got-nav">
            <div className="got-nav-logo">{t.brand}</div>
            <ul className="got-nav-links">
              {navItems.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <div ref={runeBarRef} className="got-rune-bar">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="rune-tick" />
            ))}
          </div>

          <div className="got-content">
            <span ref={sigilRef} className="got-sigil" />
            <div className="got-divider">
              <div className="got-divider-line" />
              <div className="got-divider-diamond" />
              <div className="got-divider-line right" />
            </div>
            <span ref={subtitleRef} className="got-subtitle" />
            <h1 ref={titleRef} className="got-title" />
            <p ref={bodyRef} className="got-body" />
            <div className="got-cta-row">
              <button className="got-cta-btn">{t.cta.primary}</button>
              <button className="got-cta-ghost">{t.cta.ghost}</button>
            </div>
          </div>

          <div className="got-right-panel">
            <div ref={chapterLabelRef} className="got-chapter-label">01 / 06</div>
            <div className="got-vert-line" />
            <div className="got-dots">
              {CHAPTER_META.map((c, i) => (
                <div key={c.id} className={`got-dot ${i === activeChapter ? 'active' : ''}`} />
              ))}
            </div>
          </div>

          <div className="got-scroll-hint">
            <span>{t.scrollHint}</span>
            <div className="arrow" />
          </div>

          <div className="got-progress-bar-wrap">
            <div ref={progressRef} className="got-progress-bar-fill" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero
