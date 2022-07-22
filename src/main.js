import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AppLink from './components/AppLink.vue'
import router from "./router/router.js";

createApp(App)
    .component('AppLink', AppLink)
    .use(router)
    .mount('#app')
