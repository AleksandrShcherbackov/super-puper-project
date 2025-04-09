import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TosView from '@/views/TosView.vue'
import OrderView from '@/views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang?',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/en/tos',
      name: 'EnTos',
      component: TosView
    },
    {
      path: '/ru/tos',
      name: 'RuTos',
      component: TosView
    },
    {
      path: '/:lang?/order',
      name: 'Order',
      component: OrderView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    const userLanguage = navigator?.language || navigator?.userLanguage
    const langPrefix = userLanguage.startsWith('ru') ? '/ru' : '/en'
    next(langPrefix)
  } else {
    next()
  }
})

export default router
