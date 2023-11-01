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

const suiTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        'primary-blue': '#4CA2FF',
        'primary-black': '#111111',
        'dark-blue': '#011829',
        'light-blue': '#C0E6FF',
        'baby-blue': '#EAF7FF',
    },
}

const vuetify= createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'suiTheme',
        themes: {
            suiTheme,
        },
    },
    components,
    directives
})

createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .mount('#app')
