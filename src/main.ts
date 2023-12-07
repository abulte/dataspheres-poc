import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import routerPromise from './router'

routerPromise.then((router) => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
})
