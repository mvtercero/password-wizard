import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { ES } from './locale'

const resources = {
  es: {
    translation: ES,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n