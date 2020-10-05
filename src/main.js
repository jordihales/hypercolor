import Vue from 'vue'
import App from './App.vue'

import './assets/styles/main.scss'

import 'typeface-inter'
import 'alpinejs'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
