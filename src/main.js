// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import ECharts from 'vue-echarts'
//按需加载引入
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
//注册组件
Vue.component('chart', ECharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
