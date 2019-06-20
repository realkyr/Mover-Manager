import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Overview from '@/views/Overview'
import ManageBus from '@/views/ManageBus'
import ManageDriver from '@/views/ManageDriver'
import ManageStudent from '@/views/ManageStudent'
import ManageFamily from '@/views/ManageFamily'
import ManageFamilyRequests from '@/views/Family/RequestsPage'
import CreateStudentGroup from '@/views/StudentGroup/CreateStudentGroup'
import UpdateStudentGroup from '@/views/StudentGroup/UpdateStudentGroup'
import CreateStudent from '@/views/Student/CreateStudent'
import UpdateStudent from '@/views/Student/UpdateStudent'
import DriverProfile from '@/views/Driver/DriverProfile'
import CreateDriver from '@/views/Driver/CreateDriver'
import UpdateDriver from '@/views/Driver/UpdateDriver'
import EditProfile from '@/views/Profile/EditProfile'
import Profile from '@/views/Profile/Profile'
import CreateBus from '@/views/Bus/CreateBus'
import Profile2 from '@/views/Profile/Profile2'

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
      path: '/profile/edit',
      name: 'edit-profile',
      component: EditProfile
    },
    {
      path: '/profile2',
      name: 'profile2',
      component: Profile
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile2
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
      path: '/dashboard/student/update',
      name: 'students-updating-console',
      component: UpdateStudent
    },
    {
      path: '/dashboard/drivers/profile',
      name: 'drivers-profile',
      component: DriverProfile
    },
    {
      path: '/dashboard/drivers/create',
      name: 'drivers-creating-console',
      component: CreateDriver
    },
    {
      path: '/dashboard/drivers/update',
      name: 'drivers-updating-console',
      component: UpdateDriver
    },
    {
      path: '/dashboard/drivers',
      name: 'bus-driver-console',
      component: ManageDriver
    }
  ]
})

export default router
