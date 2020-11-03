import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/home'
import uploadFile from '@/uploadFile/uploadFile'


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
            name:'uploadFile',
            component:uploadFile
        }
    ]
})