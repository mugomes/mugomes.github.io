import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/prism.css'

import './assets/script.js'
import './assets/prism.js'

createApp(App)
    .use(router)
    .mount('#app');
