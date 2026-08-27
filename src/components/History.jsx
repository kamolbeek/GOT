import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './History.css'

// Reveals its children once, in order, when the block scrolls into view.
const useReveal = () => {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.rise').forEach((n, i) =>
            setTimeout(() => n.classList.add('visible'), i * 110))
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const Block = ({ block }) => {
  const ref = useReveal()
  return (
    <article ref={ref} className="hist-block">
      <p className="hist-kicker rise">{block.kicker}</p>
      <h3 className="hist-block-title rise">{block.title}</h3>
      {block.paragraphs.map((text, i) => (
        <p key={i} className="hist-p rise">{text}</p>
      ))}
    </article>
  )
}

const History = () => {
  const { t } = useLang()
  const h = t.history
  const s = h.section
  const statsRef = useReveal()
  const seasonsRef = useReveal()
  const asideRef = useReveal()

  return (
    <section className="history" id="history">
      <div className="hist-texture" />

      <header className="history-header">
        <p className="hist-eyebrow">{s.eyebrow}</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">✦</span>
          <span className="ornament-line" />
        </div>
        <h2 className="history-title">{s.titleTop}<br /><em>{s.titleEm}</em></h2>
        <p className="history-subtitle">{s.subtitle}</p>
      </header>

      {/* ── Headline numbers ── */}
      <div ref={statsRef} className="hist-stats">
        {h.stats.map(st => (
          <div key={st.label} className="hist-stat rise">
            <span className="hist-stat-value">{st.value}</span>
            <span className="hist-stat-label">{st.label}</span>
          </div>
        ))}
      </div>

      {/* ── Prose ── */}
      <div className="hist-blocks">
        {h.blocks.map(b => <Block key={b.id} block={b} />)}
      </div>

      {/* ── Season by season ── */}
      <div ref={seasonsRef} className="hist-seasons">
        <h3 className="hist-sub rise">{h.seasonsTitle}</h3>
        <ol className="hist-timeline">
          {h.seasons.map(se => (
            <li key={se.n} className="hist-season rise">
              <span className="hist-season-n">{String(se.n).padStart(2, '0')}</span>
              <div className="hist-season-body">
                <p className="hist-season-head">
                  <span className="hist-season-title">{se.title}</span>
                  <span className="hist-season-year">{se.year}</span>
                </p>
                <p className="hist-season-note">{se.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Reference columns ── */}
      <div ref={asideRef} className="hist-aside">
        <div className="hist-card rise">
          <h3 className="hist-sub">{h.booksTitle}</h3>
          <ul className="hist-list">
            {h.books.map(bk => (
              <li key={bk.title}>
                <span className="hist-list-year">{bk.year}</span>
                <span className="hist-list-main">{bk.title}</span>
                {bk.note && <span className="hist-list-note">{bk.note}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="hist-card rise">
          <h3 className="hist-sub">{h.peopleTitle}</h3>
          <ul className="hist-list hist-list--people">
            {h.people.map(pp => (
              <li key={pp.role}>
                <span className="hist-list-year">{pp.role}</span>
                <span className="hist-list-main">{pp.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hist-card rise">
          <h3 className="hist-sub">{h.ratingsTitle}</h3>
          <ul className="hist-ratings">
            {h.ratings.map(r => (
              <li key={r.source}>
                <span className="hist-rating-score">{r.score}</span>
                <span className="hist-rating-source">{r.source}</span>
                <span className="hist-list-note">{r.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Related ── */}
      <div className="hist-related">
        <h3 className="hist-sub">{h.relatedTitle}</h3>
        <div className="hist-related-grid">
          {h.related.map(r => (
            <div key={r.name} className="hist-related-card">
              <span className="corner corner-tl" />
              <span className="corner corner-br" />
              <p className="hist-related-years">{r.years}</p>
              <h4 className="hist-related-name">{r.name}</h4>
              <p className="hist-related-note">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default History
