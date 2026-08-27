import { useLang } from '../i18n/LanguageContext'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { lang, setLang, langs } = useLang()

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {langs.map((l, i) => (
        <button
          key={l.code}
          type="button"
          title={l.name}
          aria-pressed={lang === l.code}
          className={`lang-btn ${lang === l.code ? 'active' : ''}`}
          onClick={() => setLang(l.code)}
        >
          {l.label}
          {i < langs.length - 1 && <span className="lang-sep" aria-hidden="true" />}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
