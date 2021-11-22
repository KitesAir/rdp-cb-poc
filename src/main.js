import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(store)
app.use(router).mount('#app')
app.use(VueAxios, axios)