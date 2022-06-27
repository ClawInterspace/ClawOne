import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './plugins/quasar-user-options'

let app
(async () => {

  app = createApp(App)
  app.use(Quasar, quasarUserOptions)
     .use(store)
     .use(router)
  app.mount('#app')

})()
