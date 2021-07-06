import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Pizza from '@/pages/menu/Pizza'
import Noodle from '@/pages/menu/Noodle'
import Side from '@/pages/menu/Side'
import Custom from '@/pages/menu/Custom'
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
      path: '/menu/pizza',
      name: 'Pizza',
      component: Pizza
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
      path: '/menu/custom',
      name: 'Custom',
      component: Custom
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
