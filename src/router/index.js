import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import ArticleList from '@/views/ArticleList'
import PostArticle from '@/views/PostArticle'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
      path: '/home',
      name: 'Home',
      component: Home
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
  }
]

const router = new VueRouter({
  routes
})

export default router
