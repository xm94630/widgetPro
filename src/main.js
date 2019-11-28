import Vue from 'vue'
import router from './router'
import './assets/css/main.css'
import App from './App.vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')