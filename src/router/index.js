import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
       return { selector: to.hash }
    }
},
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
