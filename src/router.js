import Vue from 'vue'
import Router from 'vue-router'
import VueScroller from "vue-scroller"
import store from './store'
Vue.use(VueScroller);

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/sellers',
      name: 'sellers',
       meta:{ title:"商户中心" },
      component: () => import('./views/Sellers.vue')
    },
    {
      path: '/sellersupload',
      name: 'sellersupload',
       meta:{ title:"店铺审核" },
      component: () => import('./views/SellerUpload.vue')
    },
    {
      path: '/extension',
      name: 'extension',
       meta:{ title:"推广申请" },
      component: () => import('./views/Extension.vue')
    },
    {
      path: '/audit',
      name: 'audit',
       meta:{ title:"审核中" },
      component: () => import('./views/Audit.vue')
    }
    ,
    {
      path: '/extensionadopted',
      name: 'extensionadopted',
      meta:{ title:"推广" },
      component: () => import('./views/ExtensionAdopted.vue')
    },
    {
      "path": "/author",
      "name": "author",
      "component":  () => import('./views/Auth.vue'),
      "meta": {
        "requireAuth": false
      }
    }

  ]
})

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  // 第一次访问
  const token = window.localStorage.getItem('token')

  if (!token && to.path !== '/author') {
    // 保存用户进入的url
    console.log(to.fullPath)
    window.localStorage.setItem('beforeLoginUrl', to.fullPath)
    next('/author')
  } else if (token) {
    next()
  } else {
    // 已经登录
    next()
  }
})

export default router
