import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import AdminHome from '@/views/AdminHome'
import ArticleList from '@/views/ArticleList'
import PostArticle from '@/views/PostArticle'
import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
      path: '/admin/home',
      name: 'AdminHome',
      component: AdminHome
  },
  {
      path: '/admin/articleList',
      name: 'ArticleList',
      component: ArticleList
  },
  {
    path: '/admin/postArticle',
    name: 'PostArticle',
    component: PostArticle
  },
  {
      path: '/home',
      name: 'Home',
      component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
