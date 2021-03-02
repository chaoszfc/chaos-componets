import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '@/home'
import uploadFile from '@/components/uploadFile/uploadFile'
import transferDialog from '@/components/transfer/transferDialog'
import eatCaculate from '@/components/sport/eatCaculate'
import guixuPrice from '@/components/guixuPrice/guixuPrice'
import vuexStudy from '@/components/vuexStudy/vuexStudy'
import bfcStudy from '@/components/bfcStudy/bfcStudy'
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {
    path: '/',
    name: 'homePage',
    component: homePage,
    children:[{
      path: '/uploadFile',
      name: '上传文件',
      component: uploadFile
    },{
      path: '/transferDialog',
      name: '穿梭框',
      component: transferDialog
    },{
      path: '/eatCaculate',
      name: '计算器',
      component: eatCaculate
    },{
      path: '/guixuPrice',
      name: '归墟价格',
      component: guixuPrice
    },
    {
      path: '/vuexStudy',
      name: 'vuex学习',
      component: vuexStudy
    },{
      path: '/bfcStudy',
      name: 'bfc学习',
      component:bfcStudy
    }
  ]
    },
    // {
    //   path: '/uploadFile',
    //   name: '穿梭框',
    //   component: uploadFile
    // },
    // {
    //   path: '/work',
    //   name: '工作相关',
    //   component: uploadFile,
      
    // }
  ],
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}