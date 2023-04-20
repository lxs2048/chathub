import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      Save: 'Save',
      Chat: 'Chat',
      Image: 'Image',
      Settings: 'Settings',
      Welcome: 'Welcome',
    },
  },
  zh: {
    translation: {
      Save: '保存',
      Chat: '聊天',
      Image: '图片',
      Settings: '设置',
      Welcome: '欢迎👏🏻',
    },
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
