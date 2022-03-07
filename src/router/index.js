import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

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
      component: NotFound
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem('signInToken')
  let isAuthenticated = false
  if (token) {
    isAuthenticated = await store.dispatch('setCurrentUser')
  }
  if (!isAuthenticated && to.name ==="About") {
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
