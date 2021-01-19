import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/token.js'
import {  Message } from 'element-ui'
Vue.use(Router)

// debug https://www.cnblogs.com/rever/p/11577322.html
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登陆' },
    component: () => import('@/views/login')
  },
  {
    path: '/pages',
    name: 'pages',
    meta: { title: '仪表板' },
    component: () => import('@/views/pages'),
    redirect: '/pages/materialMng',
    children: [
      {
        path: 'materialMng',
        name: 'materialMng',
        meta: { title: '材料管理' },
        component: () => import('@/views/pages/materialMng'),
      },
      {
        path: 'manualMng',
        name: 'manualMng',
        meta: { title: '人工管理' },
        component: () => import('@/views/pages/manualMng'),
      },
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roules
 */

export const asyncRoutes = []

const createRouter = () => new Router({ routes: constantRoutes })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher
// }

// 路由守卫，登陆权限
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  NProgress.configure({ showSpinner: false })
  if (to.name !== 'login' && !getToken()) {  // token莫名其妙消失了的时候，将路由跳转至登陆页面
    Message({  message: '登陆已失效，请重新登陆',  type: 'warning' });
    next({ name: 'login' })
    NProgress.done()
  } else {
    if (to.name === 'login' && getToken()) {
      next({ name: from.name })
    } else {
      next()
    }
    NProgress.done()
  }
})

router.afterEach((e) => {
  document.title = `${e.meta.title}-后台`
  NProgress.done()
})


export default router