import { useLang } from '../i18n/LanguageContext'
import './Credit.css'

// A quiet sign-off in the bottom corner, in the site's own type. The name is
// the mail link; the rest is not, so the click target is the name itself.
const Credit = () => {
  const { t } = useLang()
  const c = t.credit

  return (
    <footer className="credit">
      <p className="credit-line">
        <span className="credit-by">{c.by}</span>
        <a className="credit-name" href={`mailto:${c.email}`}>{c.name}</a>
      </p>
    </footer>
  )
}

export default Credit
