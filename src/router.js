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
            path:'/',
            name:'homePage',
            component:homePage
        },
        {
            path:'/uploadFile',
            name:'上传文件',
            component:uploadFile
        },{
            path:'/transferDialog',
            name:'穿梭框',
            component:transferDialog
        }
    ]
})