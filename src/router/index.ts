import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = ['Home', 'About', 'Contact', 'Register', 'Login']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
  ]
})

router.beforeEach(() => {
  
})

export default router
