import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '@/home'
import uploadFile from '@/uploadFile/uploadFile'
import transferDialog from '@/transfer/transferDialog'


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
      }]
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