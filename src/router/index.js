import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import login from '@/pages/login'

import deptList from '@/pages/dept/deptList'

import casePlan from '@/pages/case/casePlan'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/dept/deptList',
      children: [
        {
          path: '/dept/deptList',
          name: 'deptList',
          component: deptList,
          meta: { title: '部门列表' }
        },
        {
          path: '/case/casePlan',
          name: 'casePlan',
          component: casePlan,
          meta: { title: '案例评选计划' }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
