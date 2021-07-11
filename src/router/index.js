import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Test from '@/pages/Test'
import Pizza from '@/pages/menu/Pizza'
import Pasta from '@/pages/menu/Pasta'
import Side from '@/pages/menu/Side'
import Custom from '@/pages/menu/Custom'
import Info from '@/pages/Info'
import Notice from '@/pages/Notice'
import Noticeid from '@/components/Noticeid'
import NoticeCreate from '@/components/NoticeCreate'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
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
      path: '/menu/pasta',
      name: 'Pasta',
      component: Pasta
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
    },
    {
      path: '/notice/:id',
      name: 'Noticeid',
      component: Noticeid,
      props: true
    },
    {
      path: '/notice/create',
      name: 'NoticeCreate',
      component: NoticeCreate
    }
  ]
})

export default router
