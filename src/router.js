import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Overview from '@/views/Overview'
import ManageBus from '@/views/ManageBus'
import ManageDriver from '@/views/ManageDriver'
import ManageStudent from '@/views/ManageStudent'
import ManageStudentGroup from '@/views/Student/StudentGroups'
import ManageFamily from '@/views/ManageFamily'
import ManageFamilyRequests from '@/views/Family/RequestsPage'
import CreateStudentGroup from '@/views/Student/CreateStudentGroup'
import UpdateStudentGroup from '@/views/StudentGroup/UpdateStudentGroup'
import CreateStudent from '@/views/Student/CreateStudent'
import StudentProfile from '@/views/Student/StudentProfile'
import DriverProfile from '@/views/Driver/DriverProfile'
import CreateBus from '@/views/Bus/CreateBus'
import Profile from '@/views/Profile/Profile'

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
      path: '/dashboard/profile',
      name: 'profile',
      component: Profile
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
      path: '/dashboard/drivers',
      name: 'driver-managing-console',
      component: ManageDriver
    },
    {
      path: '/dashboard/bus/create',
      name: 'create-bus',
      component: CreateBus
    },
    {
      path: '/dashboard/student',
      name: 'student-managing-console',
      component: ManageStudent
    },
    {
      path: '/dashboard/student/group',
      name: 'student-group-console',
      component: ManageStudentGroup
    },
    {
      path: '/dashboard/student/create',
      name: 'create-student',
      component: CreateStudent
    },
    {
      path: '/dashboard/family',
      name: 'family-managing-console',
      component: ManageFamily
    },
    {
      path: '/dashboard/family/requests',
      name: 'requests-managing-console',
      component: ManageFamilyRequests
    },
    {
      path: '/dashboard/student/group/create',
      name: 'groups-creating-console',
      component: CreateStudentGroup
    },
    {
      path: '/dashboard/group/update',
      name: 'groups-updating-console',
      component: UpdateStudentGroup
    },
    {
      path: '/dashboard/student/profile',
      name: 'students-profile',
      component: StudentProfile
    },
    {
      path: '/dashboard/drivers/profile',
      name: 'drivers-profile',
      component: DriverProfile
    },
    {
      path: '/dashboard/drivers',
      name: 'bus-driver-console',
      component: ManageDriver
    }
  ]
})

export default router
