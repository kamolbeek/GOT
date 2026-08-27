import { useCallback, useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { HOUSE_META } from '../i18n/translations'
import { MAP_REGIONS, MAP_PLACES, MAP_WATERS, MAP_RANGES, MAP_FORESTS } from '../i18n/places'
import './World.css'

const HOUSE_BY_ID = Object.fromEntries(HOUSE_META.map(h => [h.id, h]))

// Westeros alone is far taller than it is wide, which left the map a narrow
// column in a wide section. The frame now carries the Narrow Sea and the coast
// of Essos beside it, as a drawn map of this world would.
const VB = { w: 1560, h: 1400 }
// Westeros is enlarged and centred so it fills the frame and the zoom controls,
// which work from the centre outwards, land on the continent rather than on
// open sea. Essos is a strip along the far edge.
const WEST = 'translate(150 -70) scale(1.25)'
const MIN_K = 1
const MAX_K = 7

// Westeros, inked rather than photographed. The coast is deliberately ragged —
// a smooth outline reads as a diagram, not as a drawn map.
const COAST =
  'M470 44 L512 52 L534 74 L560 70 L586 88 L596 118 L622 130 L616 158 L640 178 ' +
  'L628 206 L652 226 L640 252 L664 276 L648 300 L672 322 L654 348 L676 372 ' +
  'L654 398 L610 412 L596 436 L618 452 L600 476 L556 470 L540 492 L512 486 ' +
  'L500 508 L516 530 L498 552 L520 576 L506 600 L530 620 L514 646 L536 668 ' +
  'L520 694 L546 714 L534 742 L560 762 L546 790 L572 810 L558 838 L586 856 ' +
  'L570 884 L598 902 L584 930 L612 946 L600 974 L628 990 L618 1018 L648 1032 ' +
  'L662 1060 L700 1072 L724 1096 L706 1122 L666 1130 L620 1118 L576 1128 ' +
  'L530 1116 L486 1124 L444 1108 L412 1080 L396 1044 L370 1020 L358 986 ' +
  'L330 966 L318 932 L292 910 L282 876 L256 856 L248 822 L224 800 L216 766 ' +
  'L192 744 L186 710 L164 686 L160 650 L142 624 L150 590 L134 562 L146 528 ' +
  'L134 496 L152 466 L146 432 L168 406 L166 372 L190 348 L192 314 L218 292 ' +
  'L224 258 L252 238 L262 204 L292 186 L306 154 L338 138 L356 108 L390 94 ' +
  'L412 68 L446 58 Z'

const IRON_ISLES = [
  'M250 500 L272 494 L288 508 L282 530 L258 538 L240 524 Z',
  'M292 540 L308 536 L316 550 L306 562 L290 558 Z',
  'M236 552 L252 550 L258 562 L246 572 L232 566 Z',
]

const DRAGONSTONE = 'M712 634 L732 630 L742 646 L732 662 L712 658 L706 646 Z'

// The far shore. Only its western edge is drawn — the map is of Westeros.
const ESSOS =
  'M1560 60 L1452 96 L1420 140 L1360 168 L1338 214 L1286 244 L1272 292 ' +
  'L1222 326 L1214 374 L1266 406 L1250 452 L1200 486 L1214 530 L1176 566 ' +
  'L1194 610 L1160 650 L1182 694 L1150 736 L1176 782 L1148 826 L1180 870 ' +
  'L1156 916 L1190 958 L1168 1006 L1206 1046 L1188 1094 L1232 1132 ' +
  'L1300 1156 L1400 1168 L1500 1156 L1560 1178 Z'

const ESSOS_PLACES = [
  { name: 'Braavos',  x: 1248, y: 372,  minZoom: 1.7 },
  { name: 'Pentos',   x: 1206, y: 668,  minZoom: 1.7 },
  { name: 'Myr',      x: 1214, y: 800,  minZoom: 2.6 },
  { name: 'Tyrosh',   x: 1188, y: 862,  minZoom: 2.6 },
  { name: 'Lys',      x: 1212, y: 948,  minZoom: 2.6 },
  { name: 'Volantis', x: 1268, y: 1108, minZoom: 2.6 },
  { name: 'Norvos',   x: 1372, y: 528,  minZoom: 3.8 },
  { name: 'Qohor',    x: 1448, y: 660,  minZoom: 3.8 },
]

const World = () => {
  const { t } = useLang()
  const s = t.world.section
  const copy = t.world.regions

  const [view, setView] = useState({ k: 1, x: 0, y: 0 })
  const [active, setActive] = useState(null)
  const svgRef = useRef(null)
  const drag = useRef(null)

  const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v)

  // Keeps the map from being dragged off its own frame
  const clampPan = useCallback((k, x, y) => {
    const mx = (k - 1) * VB.w
    const my = (k - 1) * VB.h
    return { x: clamp(x, -mx, 0), y: clamp(y, -my, 0) }
  }, [])

  const zoomAt = useCallback((factor, cx, cy) => {
    setView(v => {
      const k = clamp(v.k * factor, MIN_K, MAX_K)
      const r = k / v.k
      const { x, y } = clampPan(k, cx - (cx - v.x) * r, cy - (cy - v.y) * r)
      return { k, x, y }
    })
  }, [clampPan])

  // Wheel must be a non-passive listener or preventDefault is ignored
  useEffect(() => {
    const el = svgRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      const r = el.getBoundingClientRect()
      const cx = ((e.clientX - r.left) / r.width) * VB.w
      const cy = ((e.clientY - r.top) / r.height) * VB.h
      zoomAt(e.deltaY < 0 ? 1.16 : 1 / 1.16, cx, cy)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [zoomAt])

  const onPointerDown = (e) => {
    drag.current = { px: e.clientX, py: e.clientY, ...view }
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d) return
    const r = svgRef.current.getBoundingClientRect()
    const dx = ((e.clientX - d.px) / r.width) * VB.w
    const dy = ((e.clientY - d.py) / r.height) * VB.h
    setView(v => ({ k: v.k, ...clampPan(v.k, d.x + dx, d.y + dy) }))
  }

  const endDrag = () => { drag.current = null }

  const reset = () => { setView({ k: 1, x: 0, y: 0 }); setActive(null) }

  // The centre of the frame, expressed in map coordinates
  const step = (f) => zoomAt(f, (VB.w / 2 - view.x) / view.k, (VB.h / 2 - view.y) / view.k)

  const { k, x, y } = view
  // Labels are drawn inside the scaled group, so they must be scaled back or
  // they grow with the map instead of staying readable.
  const inv = 1 / k
  const sel = active ? MAP_REGIONS.find(r => r.id === active) : null
  const selCopy = sel ? copy[sel.id] : null
  const selHouse = sel?.house ? HOUSE_BY_ID[sel.house] : null

  const seatName = (p) => (p.seatOf ? copy[p.seatOf].seat : p.name)

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

      <div className="world-frame">
        <svg
          ref={svgRef}
          className={`world-map ${drag.current ? 'dragging' : ''}`}
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          role="application"
          aria-label={s.mapLabel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onDoubleClick={() => step(1.6)}
        >
          <defs>
            <filter id="parch" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="n" />
              <feColorMatrix in="n" type="saturate" values="0" result="d" />
              <feComponentTransfer in="d" result="soft">
                <feFuncA type="linear" slope="0.11" />
              </feComponentTransfer>
              <feComposite in="soft" in2="SourceGraphic" operator="over" />
            </filter>
            <radialGradient id="stain" cx="50%" cy="45%" r="72%">
              <stop offset="0%"   stopColor="#efe3c4" />
              <stop offset="62%"  stopColor="#e2d2ab" />
              <stop offset="100%" stopColor="#c9b487" />
            </radialGradient>
          </defs>

          <g transform={`translate(${x} ${y}) scale(${k})`}>
            {/* sea */}
            <rect x="0" y="0" width={VB.w} height={VB.h} fill="url(#stain)" />
            <rect x="0" y="0" width={VB.w} height={VB.h} filter="url(#parch)" opacity="0.5" fill="none" />

            {/* the far shore */}
            <path className="w-land w-land--far" d={ESSOS} />
            {ESSOS_PLACES.filter(p => k >= p.minZoom).map(p => (
              <g key={p.name} className="w-place w-place--city">
                <circle cx={p.x} cy={p.y} r={4 * inv} />
                <text x={p.x + 8 * inv} y={p.y + 3.5 * inv}
                      style={{ fontSize: 12 * inv }}>{p.name}</text>
              </g>
            ))}
            <text className="w-water" x={1105} y={730} textAnchor="middle"
                  transform="rotate(-80 1105 730)" style={{ fontSize: 17 * inv }}>THE NARROW SEA</text>

            {/* land */}
            <g transform={WEST}>
            <path className="w-land" d={COAST} />
            {IRON_ISLES.map((d, i) => <path key={i} className="w-land" d={d} />)}
            <path className="w-land" d={DRAGONSTONE} />

            {/* the Wall */}
            <g className="w-wall">
              <line x1="300" y1="176" x2="640" y2="176" />
              <line x1="300" y1="182" x2="640" y2="182" />
            </g>
            <text className="w-wall-text" x="470" y="166" textAnchor="middle"
                  style={{ fontSize: 15 * inv }}>THE WALL</text>

            {/* relief */}
            {MAP_RANGES.filter(r => k >= r.minZoom).map(r => (
              <g key={r.label} className="w-relief">
                {Array.from({ length: r.n }).map((_, i) => {
                  const px = r.x + (i % 4) * 22 - 30
                  const py = r.y + Math.floor(i / 4) * 18
                  return <path key={i} d={`M${px} ${py} l9 -15 l9 15 Z`} />
                })}
                <text className="w-relief-text" x={r.x} y={r.y + 34} textAnchor="middle"
                      style={{ fontSize: 11 * inv }}>{r.label}</text>
              </g>
            ))}
            {MAP_FORESTS.filter(f => k >= f.minZoom).map(f => (
              <g key={f.label} className="w-relief">
                {Array.from({ length: f.n }).map((_, i) => {
                  const px = f.x + (i % 3) * 20 - 20
                  const py = f.y + Math.floor(i / 3) * 16
                  return <circle key={i} cx={px} cy={py} r="6" />
                })}
                <text className="w-relief-text" x={f.x} y={f.y + 30} textAnchor="middle"
                      style={{ fontSize: 11 * inv }}>{f.label}</text>
              </g>
            ))}

            {/* seas */}
            {MAP_WATERS.filter(w => k >= w.minZoom).map(w => (
              <text key={w.name} className="w-water" x={w.x} y={w.y} textAnchor="middle"
                    transform={`rotate(${w.rot} ${w.x} ${w.y})`}
                    style={{ fontSize: 15 * inv }}>{w.name}</text>
            ))}

            {/* towns and castles */}
            {MAP_PLACES.filter(p => k >= p.minZoom).map(p => (
              <g key={p.name} className={`w-place w-place--${p.kind}`}>
                {p.kind === 'city'
                  ? <circle cx={p.x} cy={p.y} r={4 * inv} />
                  : p.kind === 'castle'
                    ? <rect x={p.x - 3.4 * inv} y={p.y - 3.4 * inv}
                            width={6.8 * inv} height={6.8 * inv} />
                    : <circle cx={p.x} cy={p.y} r={2.4 * inv} />}
                <text x={p.x + 8 * inv} y={p.y + 3.5 * inv}
                      style={{ fontSize: (p.kind === 'town' ? 10 : 12) * inv }}>
                  {seatName(p)}
                </text>
              </g>
            ))}

            {/* region sigils */}
            {MAP_REGIONS.map(r => {
              const house = r.house ? HOUSE_BY_ID[r.house] : null
              const on = r.id === active
              const R = 26
              return (
                <g key={r.id}
                   className={`w-sigil ${on ? 'on' : ''}`}
                   onClick={(e) => { e.stopPropagation(); setActive(r.id) }}
                   role="button" tabIndex={0}
                   aria-label={copy[r.id].name}
                   onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(r.id) } }}>
                  <g transform={`translate(${r.x} ${r.y}) scale(${inv})`}>
                    <circle className="w-sigil-disc" cx="0" cy="0" r={R} />
                    {house
                      ? <image href={house.image} x={-R + 4} y={-R + 4}
                               width={(R - 4) * 2} height={(R - 4) * 2}
                               clipPath="circle(50%)" preserveAspectRatio="xMidYMid slice" />
                      : <text className="w-sigil-mark" x="0" y="7" textAnchor="middle"
                              style={{ fontSize: 20 }}>✦</text>}
                    <circle className="w-sigil-ring" cx="0" cy="0" r={R} />
                    <text className="w-sigil-name" x="0" y={R + 16} textAnchor="middle"
                          style={{ fontSize: 13 }}>{copy[r.id].name}</text>
                  </g>
                </g>
              )
            })}
            </g>
          </g>
        </svg>

        {/* ── Controls ── */}
        <div className="world-zoom">
          <button type="button" onClick={() => step(1.35)} aria-label="+">+</button>
          <button type="button" onClick={() => step(1 / 1.35)} aria-label="−">−</button>
          <button type="button" className="world-zoom-reset" onClick={reset}>⟲</button>
        </div>
        <p className="world-scale">×{k.toFixed(1)}</p>
        {!active && <p className="world-hint">{s.hint}</p>}

        {/* ── Info panel ── */}
        {sel && (
          <div className="world-info" style={{ '--accent': selHouse ? selHouse.accent : '#8a6a3c' }}>
            <button type="button" className="world-info-close" onClick={() => setActive(null)} aria-label="×">✕</button>
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
