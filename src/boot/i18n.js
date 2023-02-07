import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/i18n'
import { locale } from '@/modules/language'

Vue.use(VueI18n)

const localeSelected = localStorage.getItem('locale')
const currentLocale = localeSelected || locale

export default new VueI18n({
    locale: currentLocale,
    fallbackLocale: currentLocale,
    messages
})
