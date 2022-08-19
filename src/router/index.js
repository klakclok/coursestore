import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '@/views/mainPage.vue'
import store from "@/store";
import coursePage from '@/views/coursePage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    meta: {layout:'page'},
    component: mainPage
  },
  {
    path: '/coursePage',
    name: 'coursePage',
    meta: {layout:'page'},
    component: () => import('@/views/coursePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/admin/Login')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/admin/Courses')
  },
  {
    path: '/faq',
    name: 'faq',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/admin/FAQ')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/admin/Profile')
  },
  {
    path: '/claims',
    name: 'claims',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/admin/Claims')
  },
  {
    path: '/users',
    name: 'users',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/admin/Users')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {

    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  })

export default router
