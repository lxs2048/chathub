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
      'Shortcut to open this app': 'Shortcut to open this app',
      'Change shortcut': 'Change shortcut',
      Saved: 'Saved',
      Mode: 'Mode',
      NoHave: 'No',
      Send: 'Send',
      Stop: 'Stop',
    },
  },
  zh: {
    translation: {
      Save: '保存',
      Chat: '聊天',
      Image: '图片',
      Settings: '设置',
      Welcome: '欢迎👏🏻',
      'Shortcut to open this app': '打开ChatHub的快捷键',
      'Change shortcut': '修改快捷键',
      Saved: '已保存',
      Mode: '模式',
      NoHave: '暂无',
      Send: '发送',
      Stop: 'Stop',
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
