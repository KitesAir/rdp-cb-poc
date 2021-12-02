import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/finish',
    name: 'finish',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/init',
    name: 'init',
    component: () => import(/* webpackChunkName: "about" */ '../views/Init.vue')
  },
  {
    path: '/other-payment',
    name: 'other-payment',
    component: () => import(/* webpackChunkName: "about" */ '../views/OtherPayment.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
