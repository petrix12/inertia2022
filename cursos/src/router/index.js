import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses',
    name: 'CoursesList',
    component: () => import('../views/courses/CoursesList')
  },
  {
    path: '/courses/:id',
    name: 'CourseDetails',
    component: () => import('../views/courses/CourseDetails')
  },
  {
    path: '/courses/:id/edit',
    name: 'CourseEdit',
    component: () => import('../views/courses/CourseEdit'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
    beforeEnter: (to, from, next) =>{
      if(localStorage.getItem('auth')){
        next('/dashboard')
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.meta.requiresAuth)
  if(protectedRoute && !localStorage.getItem('auth')){
    next('/login')
  } else {
    next()
  }
})

export default router