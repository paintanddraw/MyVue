// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router' // 导入路由文件
import store from './store/index' // 导入vuex文件
import api from './api/index' // 导入api接口

import ECharts from 'vue-echarts'
//按需加载引入
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
//注册组件
Vue.component('chart', ECharts)

// 将api挂载到vue的原型上
Vue.prototype.$api = api; 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
