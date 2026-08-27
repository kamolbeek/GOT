import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations, LANGS, DEFAULT_LANG } from './translations'

const STORAGE_KEY = 'got-lang'
const LanguageContext = createContext(null)

// localStorage throws in sandboxed iframes and private-mode Safari,
// so every access is guarded — a failed read just means "use the default".
const readSaved = () => {
  try { return window.localStorage.getItem(STORAGE_KEY) } catch { return null }
}

const detectLang = () => {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const saved = readSaved()
  if (saved && translations[saved]) return saved
  const browser = (navigator.language || '').slice(0, 2).toLowerCase()
  return translations[browser] ? browser : DEFAULT_LANG
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectLang)

  // Persist + expose to CSS/SEO via <html lang="…">
  useEffect(() => {
    try { window.localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignore */ }
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, langs: LANGS, t: translations[lang] }),
    [lang]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
