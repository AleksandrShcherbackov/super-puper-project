import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang?',
      name: 'Home',
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    const userLanguage = navigator?.language || navigator?.userLanguage; 
    const langPrefix = userLanguage.startsWith('ru') ? '/ru' : '/en'; 
    next(langPrefix); 
  } else {
    next(); 
  }
})

export default router
