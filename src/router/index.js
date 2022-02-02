import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import AdminHome from '@/views/AdminHome'
import ArticleList from '@/views/ArticleList'
import PostArticle from '@/views/PostArticle'
import Home from '@/views/Home'
import Archive from '@/views/Archive'
import ArticleDetail from '@/views/ArticleDetail'
import CategoryList from '@/views/CategoryList'
Vue.use(VueRouter)
const mode = 'history'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/admin/home',
      name: 'AdminHome',
      meta: {
        requireAuth: true
      },
      component: AdminHome
  },
  {
      path: '/admin/articleList',
      name: 'ArticleList',
      meta: {
        requireAuth: true
      },
      component: ArticleList
  },
  {
    path: '/admin/categoryList',
    name: 'CategoryList',
    meta: {
        requireAuth: true
      },
    component: CategoryList
  },
  {
    path: '/admin/postArticle',
    name: 'PostArticle',
    meta: {
        requireAuth: true
      },
    component: PostArticle
  },
  {
      path: '/home',
      name: 'Home',
      component: Home
  },
  {
      path: '/admin/login',
      name: 'Login',
      component: Login
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
   },
   {
    path: '/articleDetail',
    name: 'ArticleDetail',
    component: ArticleDetail
   }
]

const router = new VueRouter({
  routes,
  mode
})
router.beforeEach((to, from, next) => {
    // {to and from are Route Object,next() must be called to resolve the hook}
    if (to.matched.some(res => res.meta.requireAuth)) {
        if (sessionStorage.getItem('token')) {
            next()
        } else {
            next({
                path: '/admin/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})
export default router
