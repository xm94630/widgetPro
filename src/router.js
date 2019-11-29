import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '@/src/pages/homePage.vue';
import homePage_configurator from '@/src/components/homePage_configurator.vue';
import homePage_widget from '@/src/components/homePage_widget.vue';
import homePage_course from '@/src/components/homePage_course.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect: '/homePage/configurator'},
    {
      path:'/homePage',
      component:homePage,
      props:{aaa:100},
      children: [
        {path: 'configurator',component: homePage_configurator},
        {path: 'widget',component: homePage_widget},
        {path: 'course',component: homePage_course},
      ]
    },
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