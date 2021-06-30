import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Rise from '@/pages/menu/Rise'
import Noodle from '@/pages/menu/Noodle'
import Side from '@/pages/menu/Side'
import Info from '@/pages/Info'
import Notice from '@/pages/Notice'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu/rise',
      name: 'Rise',
      component: Rise
    },
    {
      path: '/menu/noodle',
      name: 'Noodle',
      component: Noodle
    },
    {
      path: '/menu/side',
      name: 'Side',
      component: Side
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    }
  ]
})

export default router
