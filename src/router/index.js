// import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 引入parent组件！
// import Parent from '@/components/Parent'

// Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/index/Home'),
      meta: {
        // 页面标题title
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/index/About'),
      meta: {
        // 页面标题title
        title: '关于'
      }
    }
  ]
})

