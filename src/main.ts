import { createApp } from 'vue'

import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'

import './assets/main.css'

createApp(App).use(plugin, defaultConfig).mount('#app')
