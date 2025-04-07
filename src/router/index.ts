import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = ['Home', 'About', 'Contact', 'Register', 'Login']
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})

router.beforeEach(() => {
  
})

export default router
