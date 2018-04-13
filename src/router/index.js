import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login.vue'
import Prepare from '@/pages/prepare/Prepare.vue'
import Countdown from '@/pages/countdown/Countdown.vue'
import Shaking from '@/pages/shaking/Shaking.vue'
import Rank from '@/pages/rank/Rank.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: Prepare
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: Countdown
    },
    {
      path: '/shaking',
      name: 'shaking',
      component: Shaking
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' || this.a.app.$store.state.__logined) {
    return next()
  }

  next('/')
})

export default router
