import vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router-install'

vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  base:'/vueporject/',
  routes
})


/**
 * 全局前置路由守卫 
 */
router.beforeEach((to,from,next) => {
  // 定义路由在切换之前的拦截逻辑处理
  if('/' == to.path) {
    next('/login');
  }
  next();
});

/**
 * 全局后置路由守卫
 */
router.afterEach((to,from) => {

});

export default router;

