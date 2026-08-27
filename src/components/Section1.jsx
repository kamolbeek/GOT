import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { HOUSE_META } from '../i18n/translations'
import './Section1.css'

const HouseCard = ({ meta, copy, houseWord, wordAfter, index }) => {
  // Uzbek puts the word after the name (STARK XONADONI); EN/RU before it.
  const line1    = wordAfter ? copy.name : houseWord
  const line2    = wordAfter ? houseWord : copy.name
  const fullName = `${line1} ${line2}`

  const cardRef  = useRef(null)
  const sigilRef = useRef(null)
  const [hovered, setHovered]   = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 110)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  const handleMouseMove = (e) => {
    if (!cardRef.current || !sigilRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14
    sigilRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.06)`
  }

  const handleMouseLeave = () => {
    if (sigilRef.current) sigilRef.current.style.transform = ''
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className={`house-card house-card--${meta.id}`}
      style={{ '--accent': meta.accent, '--border': meta.borderColor, background: meta.bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />

      <div className="card-glow" />

      <div ref={sigilRef} className="house-sigil-wrap">
        {!imgError ? (
          <img
            className="house-sigil-img"
            src={meta.image}
            alt={fullName}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="house-sigil-fallback">{copy.sigil[0]}</div>
        )}
        <div className="sigil-ring" />
      </div>

      <div className={`house-content ${hovered ? 'content-hidden' : ''}`}>
        <p className="house-region">{copy.region}</p>
        <div className="house-divider">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>
        <h2 className="house-name">{line1}<br />{line2}</h2>
        <p className="house-seat">{copy.seat}</p>
        <p className="house-sigil-label">{copy.sigil}</p>
      </div>

      <div className={`house-hover-content ${hovered ? 'hover-visible' : ''}`}>
        <p className="hover-words">{copy.words}</p>
        <div className="house-divider hover-divider">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>
        <h2 className="hover-name">{fullName}</h2>
        <p className="hover-desc">{copy.description}</p>
      </div>

      <div className="card-accent-bar" />
    </div>
  )
}

const Section1 = () => {
  const { t } = useLang()
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)

  useEffect(() => {
    const els = [headingRef.current, subRef.current].filter(Boolean)
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 150))
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section1">
      <div className="section1-bg-texture" />
      <div className="section1-bg-vignette" />

      <header className="section1-header">
        <p ref={subRef} className="section1-eyebrow fade-up">{t.section1.eyebrow}</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">✦</span>
          <span className="ornament-line" />
        </div>
        <h1 ref={headingRef} className="section1-title fade-up">
          {t.section1.titleTop}<br />
          <em>{t.section1.titleEm}</em>
        </h1>
        <p className="section1-subtitle fade-up">{t.section1.subtitle}</p>
      </header>

      <div className="houses-grid">
        {HOUSE_META.map((meta, i) => (
          <HouseCard
            key={meta.id}
            meta={meta}
            copy={t.houses[meta.id]}
            houseWord={t.houseWord}
            wordAfter={t.houseWordPosition === 'after'}
            index={i}
          />
        ))}
      </div>

      <div className="section1-footer-ornament">
        <span className="footer-line" />
        <span className="footer-sigil">⚔</span>
        <span className="footer-line" />
      </div>
    </section>
  )
}

export default Section1
