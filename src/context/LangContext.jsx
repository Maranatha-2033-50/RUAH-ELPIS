import { createContext, useContext, useState } from 'react'
import ko from '../i18n/ko.json'
import en from '../i18n/en.json'

const DICT = { ko, en }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ko')
  const t = DICT[lang]
  const toggle = () => setLang(l => (l === 'ko' ? 'en' : 'ko'))

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
