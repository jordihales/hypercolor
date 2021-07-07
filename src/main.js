import Vue from 'vue'
import VueRouter from 'vue-router'

import vClickOutside from 'v-click-outside'
import VueClipboard from 'vue-clipboard2'
import VueGtag from 'vue-gtag'

import App from '@/App'

import '@/main.css'

import Index from '@/components/pages/Index'
import Generator from '@/components/pages/Generator'
import Validate from '@/components/pages/Validate'
import NotFound from '@/components/pages/NotFound'

const routes = [
  { path: '/', name: 'Home', component: Index },
  { path: '/generator', name: 'Generator', component: Generator },
  { path: '/validate', name: 'Validate', component: Validate },
  { path: '/creator', redirect: '/generator' },
  { path: '*', name: 'NotFound', component: NotFound },
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
