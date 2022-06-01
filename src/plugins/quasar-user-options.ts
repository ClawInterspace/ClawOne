import lang from 'quasar/lang/zh-TW.js'
import '@/assets/styles/quasar.sass'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {Cookies, Loading, Notify, QSpinnerPuff} from 'quasar'

export default {
  config: {
    brand: {
      /* Customization color setup for CRM */
      info: '#0099FF',
    },
    loading: { /* look at QuasarConfOptions from the API card */
      spinner: QSpinnerPuff,
      spinnerColor: 'primary',
    }
  },
  plugins: {
    Cookies,
    Loading,
    Notify,
  },
  lang: lang
}
