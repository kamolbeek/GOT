import { useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { HOUSE_META } from '../i18n/translations'
import { REGION_META } from '../i18n/world'
import './World.css'

const HOUSE_BY_ID = Object.fromEntries(HOUSE_META.map(h => [h.id, h]))

// Westeros, drawn rather than photographed: a stylised silhouette in SVG, so
// it stays sharp at any size and costs the page nothing to load.
const COAST =
  'M196 18 C168 26 150 44 142 70 C134 96 138 118 128 140 C116 166 96 180 88 206 ' +
  'C80 232 92 254 86 280 C78 312 52 328 48 358 C44 388 66 404 64 432 ' +
  'C62 462 40 480 44 510 C48 540 76 552 82 582 C88 612 70 634 78 662 ' +
  'C86 690 116 700 130 726 C144 752 140 780 158 800 C176 820 208 822 232 812 ' +
  'C258 800 272 776 296 762 C322 746 352 748 372 730 C392 712 392 684 386 658 ' +
  'C380 632 360 616 358 590 C356 562 376 546 374 518 C372 488 348 472 348 444 ' +
  'C348 414 372 398 368 368 C364 338 336 326 330 298 C324 270 340 250 334 224 ' +
  'C328 196 302 184 292 158 C282 132 288 108 278 82 C268 54 244 30 216 20 Z'

const World = () => {
  const { t } = useLang()
  const s = t.world.section
  const copy = t.world.regions
  const [active, setActive] = useState('north')

  const regions = useMemo(() => REGION_META, [])
  const sel = regions.find(r => r.id === active) || regions[0]
  const selCopy = copy[sel.id]
  const house = sel.house ? HOUSE_BY_ID[sel.house] : null

  return (
    <section className="world" id="world">
      <div className="world-texture" />

      <header className="world-header">
        <p className="world-eyebrow fade-up visible">{s.eyebrow}</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">✦</span>
          <span className="ornament-line" />
        </div>
        <h2 className="world-title fade-up visible">
          {s.titleTop}<br /><em>{s.titleEm}</em>
        </h2>
        <p className="world-subtitle fade-up visible">{s.subtitle}</p>
      </header>

      <div className="world-body">
        {/* ── Map ── */}
        <div className="world-map-wrap">
          <svg className="world-map" viewBox="0 0 440 860" role="img" aria-label={s.mapLabel}>
            <defs>
              <linearGradient id="landFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#2a2416" />
                <stop offset="55%"  stopColor="#1d1a12" />
                <stop offset="100%" stopColor="#241d12" />
              </linearGradient>
              <filter id="landGlow" x="-25%" y="-15%" width="150%" height="130%">
                <feGaussianBlur stdDeviation="9" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path className="world-sea" d={COAST} filter="url(#landGlow)" />
            <path className="world-land" d={COAST} fill="url(#landFill)" />

            {/* The Wall — the one hard line across the continent */}
            <line className="world-wall" x1="86" y1="126" x2="300" y2="126" />
            <text className="world-wall-label" x="193" y="116" textAnchor="middle">
              ✦
            </text>

            {regions.map(r => {
              const cx = (r.at.x / 100) * 440
              const cy = (r.at.y / 100) * 860
              const on = r.id === active
              return (
                <g
                  key={r.id}
                  className={`world-pin ${on ? 'on' : ''}`}
                  style={{ '--accent': r.accent }}
                  onClick={() => setActive(r.id)}
                  onMouseEnter={() => setActive(r.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={copy[r.id].name}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(r.id) } }}
                >
                  <circle className="world-pin-halo" cx={cx} cy={cy} r="22" />
                  <circle className="world-pin-dot"  cx={cx} cy={cy} r="5" />
                  <text className="world-pin-label" x={cx} y={cy - 16} textAnchor="middle">
                    {copy[r.id].name}
                  </text>
                </g>
              )
            })}
          </svg>
          <p className="world-hint">{s.hint}</p>
        </div>

        {/* ── Detail ── */}
        <div className="world-detail" style={{ '--accent': sel.accent }}>
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />

          <h3 className="world-region-name">{selCopy.name}</h3>
          <p className="world-region-summary">{selCopy.summary}</p>

          <div className="world-divider">
            <span className="world-divider-line" />
            <span className="world-divider-diamond" />
            <span className="world-divider-line" />
          </div>

          <dl className="world-facts">
            <div>
              <dt>{s.seatLabel}</dt>
              <dd>{selCopy.seat}</dd>
            </div>
            <div>
              <dt>{s.rulerLabel}</dt>
              <dd>
                {house
                  ? `${t.houses[house.id].name} ${t.houseWordPosition === 'after' ? t.houseWord : ''}`.trim()
                  : s.noHouse}
              </dd>
            </div>
          </dl>

          <p className="world-region-body">{selCopy.body}</p>
        </div>
      </div>
    </section>
  )
}

export default World
