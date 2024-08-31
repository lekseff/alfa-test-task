import '@/app/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vuetify } from '@/app/plugins/vuetify'

import App from '@/app/App.vue'
import router from '@/app/plugins/router'

export const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
