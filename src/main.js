import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./router";
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdiAccount } from '@mdi/js'

const vuetify= createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives,
})

createApp(App)
    .use(createPinia())
    .use(mdiAccount)
    .use(router)
    .use(vuetify)
    .mount('#app')
