import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui' //引入element-ui
import axios from 'axios'
import {post,get} from './request/axios'

import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$post=post;
Vue.prototype.$get=get;

Vue.config.productionTip = false
require('./mock/mock')

Vue.use(ElementUi);
new Vue({
  el:'#app',
  router,
  components:{App},
  template:'<App/>',

  // el: '#app',
  // router:router,
  // render: h => h(App)
})
