import App from './components/app.vue'
import router from './router.js'
import store from './store'
import { createApp } from "vue";

createApp(App).use(router).use(store).mount('#app')
