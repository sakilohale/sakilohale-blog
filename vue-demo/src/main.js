import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.config.productionTip = false

new Vue({
  animated,
  router,
  render: h => h(App)
}).$mount('#app')
