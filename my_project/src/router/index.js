import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Länkar till förstasidan 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/svamp',
      name: 'svamp',
      
      component: () => import('../views/SvamparView.vue')
    },
    {
      path: '/recept',
      name: 'recept',
      // component: TestView 
      component: () => import('../views/ReceptView.vue')
    }
  ]
})

export default router
