import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '@/src/pages/homePage.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect: '/index'},
    {path:'/index',component:homePage,props:{aaa:100}},
    {
      path:'/page1',
      component:homePage,
      children: [
        {path: 'box1',component: homePage},
        {path: 'box2',component: homePage},
        {path: 'box3',component: homePage},
      ]
    },
    {path:'/page2',component:homePage},
  ],
})

//全局前置守卫
router.beforeEach((to, from, next)=>{
  next();
});

export default router