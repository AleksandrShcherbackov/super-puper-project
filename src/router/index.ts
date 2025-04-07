import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = ['Home', 'About', 'Contact', 'Register', 'Login']
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }
  ]
})

router.beforeEach(() => {})

export default router
