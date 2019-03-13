import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Overview from '@/views/Overview'
import ManageBus from '@/views/ManageBus'
import ManageStudent from '@/views/ManageStudent'
import ManageFamily from '@/views/ManageFamily'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Overview
    },
    {
      path: '/dashboard/bus',
      name: 'bus-managing-console',
      component: ManageBus
    },
    {
      path: '/dashboard/student',
      name: 'student-managing-console',
      component: ManageStudent
    },
    {
      path: '/dashboard/family',
      name: 'family-managing-console',
      component: ManageFamily
    }
  ]
})
