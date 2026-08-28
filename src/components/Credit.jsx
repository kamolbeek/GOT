import { useLang } from '../i18n/LanguageContext'
import './Credit.css'

// A quiet sign-off in the bottom corner, in the site's own type. Only the
// name with a mailbox behind it is a link, so the click target stays exactly
// what it says it is.
const Credit = () => {
  const { t } = useLang()
  const c = t.credit

  return (
    <footer className="credit">
      <p className="credit-line">
        <span className="credit-by">{c.by}</span>
        <span className="credit-authors">
          <a className="credit-name" href={`mailto:${c.email}`}>{c.name}</a>
          <span className="credit-amp" aria-hidden="true">&amp;</span>
          <span className="credit-second">{c.second}</span>
        </span>
      </p>
    </footer>
  )
}

export default Credit
