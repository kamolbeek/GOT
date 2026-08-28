import { useCallback, useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { HOUSE_META } from '../i18n/translations'
import { MAP_REGIONS } from '../i18n/places'
import mapImage from '../assets/westeros-map.jpg'
import './World.css'

const HOUSE_BY_ID = Object.fromEntries(HOUSE_META.map(h => [h.id, h]))

// Crests with their backgrounds knocked out, so each sits on the map in its
// own heraldic outline rather than inside a disc.
const SIGILS = import.meta.glob('../assets/sigils/*.png', {
  eager: true, query: '?url', import: 'default',
})
const sigilFor = (house) => SIGILS[`../assets/sigils/${house}.png`] ?? null

const MIN_K = 1
const MAX_K = 6

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v)

const World = () => {
  const { t } = useLang()
  const s = t.world.section
  const copy = t.world.regions

  const [view, setView] = useState({ k: 1, x: 0, y: 0 })
  const [active, setActive] = useState(null)
  const [dragging, setDragging] = useState(false)
  // The map only takes the wheel once it has been clicked. Until then the
  // page scrolls straight past it instead of being caught.
  const [engaged, setEngaged] = useState(false)
  const frameRef = useRef(null)
  const drag = useRef(null)

  // Panning is limited to what the zoom actually reveals, so the map cannot be
  // dragged off its own frame.
  const clampPan = useCallback((k, x, y) => {
    const el = frameRef.current
    const w = el?.clientWidth ?? 0
    const h = el?.clientHeight ?? 0
    const mx = (k - 1) * w / 2
    const my = (k - 1) * h / 2
    return { x: clamp(x, -mx, mx), y: clamp(y, -my, my) }
  }, [])

  const zoomBy = useCallback((factor, ox, oy) => {
    setView(v => {
      const k = clamp(v.k * factor, MIN_K, MAX_K)
      const r = k / v.k
      // keep the point under the cursor fixed while the scale changes
      const nx = ox - (ox - v.x) * r
      const ny = oy - (oy - v.y) * r
      return { k, ...clampPan(k, nx, ny) }
    })
  }, [clampPan])

  // Wheel needs a non-passive listener for preventDefault to take effect.
  // Unengaged it does nothing at all, so the wheel keeps scrolling the page.
  useEffect(() => {
    const el = frameRef.current
    if (!el || !engaged) return
    const onWheel = (e) => {
      e.preventDefault()
      const r = el.getBoundingClientRect()
      const ox = e.clientX - r.left - r.width / 2
      const oy = e.clientY - r.top - r.height / 2
      zoomBy(e.deltaY < 0 ? 1.18 : 1 / 1.18, ox, oy)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [zoomBy, engaged])

  // Control is handed back by Esc, by a press anywhere else on the page, or
  // by scrolling the map out of sight - so it can never be left holding on.
  useEffect(() => {
    if (!engaged) return
    const el = frameRef.current
    const onKey = (e) => { if (e.key === 'Escape') setEngaged(false) }
    const onOutside = (e) => { if (!el?.contains(e.target)) setEngaged(false) }
    const io = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setEngaged(false) },
      { threshold: 0.15 },
    )
    if (el) io.observe(el)
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onOutside, true)
    return () => {
      io.disconnect()
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onOutside, true)
    }
  }, [engaged])

  const onPointerDown = (e) => {
    // The frame captures the pointer to keep a drag alive outside its bounds,
    // which also swallows clicks on the controls sitting over it — so a press
    // that starts on one is left alone.
    if (e.target.closest('.world-zoom, .world-info, .world-pin')) return
    setEngaged(true)
    drag.current = { px: e.clientX, py: e.clientY, ...view }
    setDragging(true)
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d) return
    setView(v => ({
      k: v.k,
      ...clampPan(v.k, d.x + (e.clientX - d.px), d.y + (e.clientY - d.py)),
    }))
  }

  const endDrag = () => { drag.current = null; setDragging(false) }

  const step = (f) => zoomBy(f, 0, 0)
  const reset = () => { setView({ k: 1, x: 0, y: 0 }); setActive(null); setEngaged(false) }

  const { k, x, y } = view
  const sel = active ? MAP_REGIONS.find(r => r.id === active) : null
  const selCopy = sel ? copy[sel.id] : null
  const selHouse = sel?.house ? HOUSE_BY_ID[sel.house] : null

  return (
    <section className="world" id="world">
      <header className="world-header">
        <p className="world-eyebrow">{s.eyebrow}</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">✦</span>
          <span className="ornament-line" />
        </div>
        <h2 className="world-title">{s.titleTop}<br /><em>{s.titleEm}</em></h2>
        <p className="world-subtitle">{s.subtitle}</p>
      </header>

      <div
        ref={frameRef}
        className={`world-frame ${engaged ? 'engaged' : ''} ${dragging ? 'dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onDoubleClick={() => step(1.7)}
      >
        {/* Everything that pans and zooms sits in one layer, so the crests stay
            pinned to their place on the map. */}
        <div
          className="world-canvas"
          style={{ transform: `translate(${x}px, ${y}px) scale(${k})` }}
        >
          <img className="world-img" src={mapImage} alt={s.mapLabel} draggable="false" />

          {MAP_REGIONS.map(r => {
            const house = r.house ? HOUSE_BY_ID[r.house] : null
            const href = r.house ? sigilFor(r.house) : null
            const on = r.id === active
            return (
              <button
                key={r.id}
                type="button"
                className={`world-pin ${on ? 'on' : ''}`}
                style={{
                  left: `${r.at.x}%`,
                  top: `${r.at.y}%`,
                  // held at a constant size on screen as the map scales
                  transform: `translate(-50%, -50%) scale(${1 / k})`,
                }}
                onClick={(e) => { e.stopPropagation(); setActive(r.id) }}
                aria-label={copy[r.id].name}
              >
                {href
                  ? (
                    <span
                      className="world-pin-shield"
                      style={{ '--field': house.field, '--rim': house.rim }}
                    >
                      <img className="world-pin-crest" src={href} alt="" draggable="false" />
                    </span>
                  )
                  : <span className="world-pin-mark">✦</span>}
                <span className="world-pin-name">{copy[r.id].name}</span>
              </button>
            )
          })}
        </div>

        <div className="world-zoom">
          <button type="button" onClick={() => step(1.4)} aria-label="+">+</button>
          <button type="button" onClick={() => step(1 / 1.4)} aria-label="−">−</button>
          <button type="button" className="world-zoom-reset" onClick={reset}>⟲</button>
        </div>
        <p className="world-scale">×{k.toFixed(1)}</p>
        {!active && (
          <p className="world-hint">{engaged ? s.unlockHint : s.lockHint}</p>
        )}

        {sel && (
          <div className="world-info" style={{ '--accent': selHouse ? selHouse.accent : '#8a6a3c' }}>
            <button type="button" className="world-info-close"
                    onClick={() => setActive(null)} aria-label="×">✕</button>
            <h3 className="world-info-name">{selCopy.name}</h3>
            <p className="world-info-summary">{selCopy.summary}</p>
            <dl className="world-info-facts">
              <div><dt>{s.seatLabel}</dt><dd>{selCopy.seat}</dd></div>
              <div>
                <dt>{s.rulerLabel}</dt>
                <dd>{selHouse
                  ? `${t.houses[selHouse.id].name} ${t.houseWordPosition === 'after' ? t.houseWord : ''}`.trim()
                  : s.noHouse}</dd>
              </div>
            </dl>
            <p className="world-info-body">{selCopy.body}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default World
