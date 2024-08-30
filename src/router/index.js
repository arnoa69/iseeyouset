import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import CoursesPage from '../pages/CoursesPage.vue'
import ServicePage from '../pages/ServicePage.vue'
import LoginPage from '../pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage, // Layout wird hier verwendet
      children: [
        {
          path: 'courses',
          name: 'courses',
          component: CoursesPage
        },
        {
          path: 'services',
          name: 'services',
          component: ServicePage
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router