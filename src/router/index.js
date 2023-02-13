import { createRouter, createWebHistory } from 'vue-router'
//@はsrcフォルダを差す。相対パスだと規模が大きくなった時に可読性が落ちるので@使用を推奨
//以下のインポート方法を静的インポートと言う。
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import(/* webpackChunkName: "about" */ '@/views/RegistExampleView.vue')
  },
  {
    path: '/list',
    name: 'list',
    //以下のインポート方法を動的インポートと言う。
    //静的インポートが必ずロードされるのに対し、動的インポートはクリック時にロードされるため、
    //クリックされない可能性のあるTop以外のページは、動的インポートが推奨される。
    component: () => import(/* webpackChunkName: "about" */ '@/views/ListExampleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),//createWebHashHistoryにすると、urlに#が入る
  routes
})

export default router
