const langCodeByNavigatorLang = {
  ru: 'ru-ru',
  en: 'en-us'
}

const langList = [
  { label: 'English', value: 'en-us' },
  { label: 'Русский', value: 'ru-ru' }
]

const navLang = window.navigator.language.substr(0, 2).toLowerCase()
const userFirstLang = langCodeByNavigatorLang[navLang] || 'en-us'
const index = langList.findIndex(item => item.value === userFirstLang)
langList.unshift(langList.splice(index, 1)[0])

export const preparedLocales = langList
export const locale = userFirstLang