import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(Buefy)
    .mount('#app')
