import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

import { Toast } from '../utils/toast'

Vue.use(VueRouter)

const thirdPartyLogin = (to, from, next) => {
  if(to.path === '/_=_') {
    localStorage.setItem('signInToken', to.query.token)
    store.dispatch('setCurrentUser')
    Toast.fire({
      icon: 'success',
      title: '登入成功'
    })
    next('/about')
  }
  next()
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
      beforeEnter: thirdPartyLogin,
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem('signInToken')
  let isAuthenticated = false
  if (token) {
    isAuthenticated = await store.dispatch('setCurrentUser')
  }
  // console.log('isAuth: ', isAuthenticated)
  if (!isAuthenticated && to.name ==="About") {
    Toast.fire({
      icon: 'error',
      title: '登入後瀏覽相關頁面'
    })
    next('/signin')
    return
  }
  if (isAuthenticated && to.name === "signin") {
    next('/about')
    return
  }
  next()
})

export default router
