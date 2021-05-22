import Vue from 'vue'

import vClickOutside from 'v-click-outside'
import VueClipboard from 'vue-clipboard2'
import VueGtag from 'vue-gtag'

import App from '@/App'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/900.css'
import 'tailwindcss/tailwind.css'

Vue.use(vClickOutside)
Vue.use(VueClipboard)
Vue.use(VueGtag, {
  config: { id: 'UA-177960351-4' },
})

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
