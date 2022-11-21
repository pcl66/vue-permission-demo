import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home'
import Layout from '../views/layout'
import PageNotFound from '../views/errorPage/404'
import Forbidden from '../views/errorPage/403'

Vue.use(VueRouter)

/** 静态路由 */
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

/**
 * 动态路由
 * 
 */
export const dynamicRoutes = [
  {
    path: '',
    name: 'Layout',
    component: Layout,
    redirect: 'home',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          /** 匹配规则 */
          name: "首页",
          icon: 'icon-name'
        }
      }
    ]
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: Forbidden
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
