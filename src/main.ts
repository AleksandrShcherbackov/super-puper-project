import './assets/main.css'
import './index.css' //Tailwind

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { messages } from './locales'

const app = createApp(App)


const i18n = createI18n({
    locale: 'en',
    messages,
})

//app.use(createPinia())
//app.use(router)
//app.use(i18n)

app.mount('#app')
