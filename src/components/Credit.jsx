import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Credit.css'

// The beat after the title card, in the manner of the credits that follow it
// in the show: a quiet line on the dark, then the name.
const Credit = () => {
  const { t } = useLang()
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.credit-line').forEach((n, i) =>
            setTimeout(() => n.classList.add('visible'), i * 260))
          obs.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const c = t.credit

  return (
    <section ref={ref} className="credit">
      <div className="credit-inner">
        <p className="credit-label credit-line">{c.label}</p>
        <h2 className="credit-name credit-line">{c.name}</h2>
        <div className="credit-rule credit-line">
          <span className="credit-rule-line" />
          <span className="credit-rule-diamond" />
          <span className="credit-rule-line" />
        </div>
        <p className="credit-note credit-line">{c.note}</p>
      </div>
    </section>
  )
}

export default Credit
