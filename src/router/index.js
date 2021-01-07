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
    redirect: '/pages/quotationMng',
    children: [
      {
        path: 'quotationMng',
        name: 'quotationMng',
        meta: { title: '报价管理' },
        component: () => import('@/views/pages/quotationMng'),
        redirect: '/pages/quotationMng/mainpage',
        children:[
          {
            path: 'mainpage',
            name: '报价管理',
            meta: { title: '签约管理' },
            component: () => import('@/views/pages/quotationMng/mainpage'),
          },
          {
            path: '/quotationDetails',
            name: '报价详情',
            meta: { title: '签约管理' },
            component: () => import('@/views/pages/quotationMng/quotationDetails'),
          },
        ]
      },
 
      {
        path: 'projectMng',
        name: 'projectMng',
        meta: { title: '项目管理' },
        component: () => import('@/views/pages/projectMng'),
        redirect: '/pages/projectMng/AcontractMng',
        children: [
          {
            path: 'AcontractMng',
            name: 'AcontractMng',
            meta: { title: '签约管理' },
            component: () => import('@/views/pages/projectMng/AcontractMng'),
          },
          {
            path: 'BmaterialSelectionMng',
            name: 'BmaterialSelectionMng',
            meta: { title: '选材管理' },
            component: () => import('@/views/pages/projectMng/BmaterialSelectionMng'),
          },
          {
            path: 'CbudgetMng',
            name: 'CbudgetMng',
            meta: { title: '预算管理' },
            component: () => import('@/views/pages/projectMng/CbudgetMng'),
          },
          {
            path: 'DprojectScheduling',
            name: 'DprojectScheduling',
            meta: { title: '项目排期' },
            component: () => import('@/views/pages/projectMng/DprojectScheduling'),
          },
          {
            path: 'EprojectImplement',
            name: 'EprojectImplement',
            meta: { title: '项目实施' },
            component: () => import('@/views/pages/projectMng/EprojectImplement'),
          },
          {
            path: 'FchangeMng',
            name: 'FchangeMng',
            meta: { title: '变更管理' },
            component: () => import('@/views/pages/projectMng/FchangeMng'),
          },
          {
            path: 'GexaminationMng',
            name: 'GexaminationMng',
            meta: { title: '审批管理' },
            component: () => import('@/views/pages/projectMng/GexaminationMng'),
          },
        ]
      },
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
      {
        path: 'systemSetting',
        name: 'systemSetting',
        meta: { title: '系统设置' },
        component: () => import('@/views/pages/systemSetting'),
        redirect: '/pages/systemSetting/userMng',
        children: [
          {
            path: 'userMng',
            name: '用户管理',
            meta: { title: '用户管理' },
            component: () => import('@/views/pages/systemSetting/userMng'),
          },
          {
            path: 'roleMng',
            name: '用户管理',
            meta: { title: '用户管理' },
            component: () => import('@/views/pages/systemSetting/roleMng'),
          },
          {
            path: 'passwordMng',
            name: '用户管理',
            meta: { title: '用户管理' },
            component: () => import('@/views/pages/systemSetting/passwordMng'),
          },
        ]
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
      console.log("1111")
      next({ name: from.name })
    } else {
      console.log("2222")
      next()
    }
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})


export default router