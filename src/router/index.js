import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/coins', name: 'Coin' },
  { path: '/diagrams', name: 'Diagram' },
  { path: '*', redirect: { name: '/' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(/* webpackChunkName: "[request]" */ `@/views/${r.name}/Index.vue`)
  }
})

const router = new VueRouter({
  routes
})

export default router
