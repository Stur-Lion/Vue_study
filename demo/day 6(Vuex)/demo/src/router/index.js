import Vue from 'vue'
import Router from 'vue-router'
import lion from '@/components/lion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lion',
      component: lion
    }
  ]
})
