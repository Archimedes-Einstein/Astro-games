/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Drawer from 'primevue/drawer'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SearchBar from './components/SearchBar.vue'
import App from './App.vue'
import Carousel from 'primevue/carousel'
import router from './router'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(router)
app.component('SearchBar', SearchBar)
app.component('Carousel', Carousel)
app.component('Drawer', Drawer)
app.mount('#app')
