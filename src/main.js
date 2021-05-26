import Vue from 'vue'
import VueRouter from 'vue-router'

import vClickOutside from 'v-click-outside'
import VueClipboard from 'vue-clipboard2'
import VueGtag from 'vue-gtag'

import App from '@/App'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/900.css'
import 'tailwindcss/tailwind.css'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/components/pages/Index') },
  { path: '/validate', name: 'Validate', component: () => import('@/components/pages/Validate') },
  { path: '*', name: 'NotFound', component: () => import('@/components/pages/NotFound') },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

Vue.use(vClickOutside)
Vue.use(VueClipboard)
Vue.use(VueGtag, { config: { id: 'UA-177960351-4' } }, router)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
