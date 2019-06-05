import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Overview from '@/views/Overview'
import ManageBus from '@/views/ManageBus'
import ManageStudent from '@/views/ManageStudent'
import ManageFamily from '@/views/ManageFamily'
import CreateStudentGroup from '@/views/CreateStudentGroup'
import UpdateStudentGroup from '@/views/UpdateStudentGroup'
import CreateStudent from '@/views/CreateStudent'
import UpdateStudent from '@/views/UpdateStudent'
import CreateDriver from '@/views/CreateDriver'
import UpdateDriver from '@/views/UpdateDriver'

// import firebase from 'firebase'
import 'firebase/auth'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
    },
    {
      path: '/dashboard/group/create',
      name: 'groups-creating-console',
      component: CreateStudentGroup
    },
    {
      path: '/dashboard/group/update',
      name: 'groups-updating-console',
      component: UpdateStudentGroup
    },
    {
      path: '/dashboard/student/create',
      name: 'students-creating-console',
      component: CreateStudent
    },
    {
      path: '/dashboard/student/update',
      name: 'students-updating-console',
      component: UpdateStudent
    },
    {
      path: '/dashboard/driver/create',
      name: 'drivers-creating-console',
      component: CreateDriver
    },
    {
      path: '/dashboard/driver/update',
      name: 'drivers-updating-console',
      component: UpdateDriver
    }
  ]
})

export default router
