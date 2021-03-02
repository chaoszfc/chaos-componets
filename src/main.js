import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'            // 引入element-ui
import axios from 'axios'
import {post,get} from './request/axios'      // 引入axios
import store from './store/store'

// let echarts = require('echarts/lib/echarts');
import echarts from 'echarts'
// 引入折线图/柱状图等组件
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title')

Vue.prototype.$echarts = echarts


import 'element-ui/lib/theme-chalk/index.css';
require('./mock/mock')
Vue.prototype.$post = post;
Vue.prototype.$get = get;

Vue.config.productionTip = false

Vue.use(ElementUi);
new Vue({
  el:'#app',
  router,
  store,
  components:{ App },
  template:'<App/>'
  // el: '#app',
  // router:router,
  // render: h => h(App)
})
