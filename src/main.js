import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUi from 'element-ui' //引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

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
