import Vue from 'vue'
import VueRouter from 'vue-router'


// 1、安装插件
Vue.use(VueRouter)
// 2、创建路由对象

// 懒加载
const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
 
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// 3、导出router
export default router