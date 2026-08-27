import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { HOUSE_META } from '../i18n/translations'
import { CHARACTER_META, CHARACTER_HOUSE_ORDER } from '../i18n/characters'
import './Characters.css'

// House id -> its visual identity, so a card can pick up its house colours
const HOUSE_BY_ID = Object.fromEntries(HOUSE_META.map(h => [h.id, h]))

// "Jon Snow" -> "JS".  Works for Cyrillic too, so RU gets "ДС".
const initialsOf = (name) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('')

// ─── Portrait ───────────────────────────────────────────────────────────────
// The house sigil sits *behind* the frame as a backdrop, so it still reads
// once a real photo fills the circle. Without a photo the circle falls back to
// a monogram, which keeps an unfinished roster looking deliberate.
const Portrait = ({ src, name, house, large = false }) => {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  return (
    <div className={`ch-portrait-wrap ${large ? 'ch-portrait-wrap--large' : ''}`}>
      <img className="ch-portrait-backdrop" src={house.image} alt="" aria-hidden="true" />

      <div className={`ch-portrait ${large ? 'ch-portrait--large' : ''}`}>
        {showImage ? (
          <img
            className="ch-portrait-img"
            src={src}
            alt={name}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="ch-portrait-initials" aria-hidden="true">{initialsOf(name)}</span>
        )}
        <span className="ch-portrait-frame" aria-hidden="true" />
      </div>
    </div>
  )
}

// ─── One card in the family row ─────────────────────────────────────────────
const CharacterCard = ({ meta, copy, house, index, onOpen }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), (index % 7) * 90)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  return (
    <button
      ref={ref}
      type="button"
      className="ch-card"
      style={{ '--accent': house.accent, '--border': house.borderColor }}
      onClick={() => onOpen(meta.id)}
    >
      <Portrait src={meta.image} name={copy.name} house={house} />
      <span className="ch-card-name">{copy.name}</span>
      <span className="ch-card-title">{copy.title}</span>
      <span className="ch-card-glow" aria-hidden="true" />
    </button>
  )
}

// ─── Detail overlay ─────────────────────────────────────────────────────────
const CharacterDetail = ({ meta, copy, house, houseName, section, onClose }) => {
  const closeRef = useRef(null)

  // Esc to dismiss, and keep the page behind from scrolling underneath
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="ch-detail-backdrop" onClick={onClose}>
      <div
        className="ch-detail"
        role="dialog"
        aria-modal="true"
        aria-label={copy.name}
        style={{ '--accent': house.accent, '--border': house.borderColor, background: house.bg }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="ch-detail-close"
          aria-label={section.close}
          onClick={onClose}
        >
          ✕
        </button>

        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="ch-detail-left">
          <Portrait src={meta.image} name={copy.name} house={house} large />
        </div>

        <div className="ch-detail-right">
          <p className="ch-detail-house">{houseName}</p>
          <div className="ch-divider">
            <span className="ch-divider-line" />
            <span className="ch-divider-diamond" />
            <span className="ch-divider-line" />
          </div>
          <h3 className="ch-detail-name">{copy.name}</h3>
          <p className="ch-detail-title">{copy.title}</p>
          <p className="ch-detail-words">{copy.words}</p>
          <p className="ch-detail-bio">{copy.bio}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Optional logo ──────────────────────────────────────────────────────────
// Drop a file at public/images/got-logo.png and it appears above the heading.
// Until then it renders nothing at all, rather than a broken-image icon.
const SectionLogo = () => {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <img
      className="characters-logo fade-up"
      src="/images/got-logo.png"
      alt=""
      aria-hidden="true"
      onError={() => setFailed(true)}
    />
  )
}

// ─── Section ────────────────────────────────────────────────────────────────
const Characters = () => {
  const { t } = useLang()
  const [openId, setOpenId] = useState(null)
  const headerRef = useRef(null)

  const section = t.characters.section
  const people = t.characters.people

  // Group the flat roster by house, in the order the houses are listed
  const groups = useMemo(
    () => CHARACTER_HOUSE_ORDER
      .map(houseId => ({
        houseId,
        house: HOUSE_BY_ID[houseId],
        members: CHARACTER_META.filter(c => c.house === houseId),
      }))
      .filter(g => g.house && g.members.length),
    [],
  )

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-up').forEach((n, i) =>
            setTimeout(() => n.classList.add('visible'), i * 140))
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handleClose = useCallback(() => setOpenId(null), [])

  const openMeta = openId ? CHARACTER_META.find(c => c.id === openId) : null

  // Uzbek puts the word after the name (STARK XONADONI); EN/RU before it.
  const houseNameFor = (houseId) => {
    const n = t.houses[houseId].name
    return t.houseWordPosition === 'after' ? `${n} ${t.houseWord}` : `${t.houseWord} ${n}`
  }

  return (
    <section className="characters" id="characters">
      <div className="characters-bg-texture" />

      <header ref={headerRef} className="characters-header">
        <SectionLogo />
        <p className="characters-eyebrow fade-up">{section.eyebrow}</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">✦</span>
          <span className="ornament-line" />
        </div>
        <h2 className="characters-title fade-up">
          {section.titleTop}<br />
          <em>{section.titleEm}</em>
        </h2>
        <p className="characters-subtitle fade-up">{section.subtitle}</p>
        <p className="characters-hint fade-up">{section.tapHint}</p>
      </header>

      {groups.map((g, gi) => (
        <div key={g.houseId} className="ch-group">
          <div className="ch-group-head" style={{ '--accent': g.house.accent }}>
            <span className="ch-group-line" />
            <h3 className="ch-group-name">{houseNameFor(g.houseId)}</h3>
            <span className="ch-group-line" />
          </div>

          <div className="ch-row">
            {g.members.map((meta, i) => (
              <CharacterCard
                key={meta.id}
                meta={meta}
                copy={people[meta.id]}
                house={g.house}
                index={gi + i}
                onOpen={setOpenId}
              />
            ))}
          </div>
        </div>
      ))}

      {openMeta && (
        <CharacterDetail
          meta={openMeta}
          copy={people[openMeta.id]}
          house={HOUSE_BY_ID[openMeta.house]}
          houseName={houseNameFor(openMeta.house)}
          section={section}
          onClose={handleClose}
        />
      )}
    </section>
  )
}

export default Characters
