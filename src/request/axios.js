import axios from 'axios';
import { Message } from 'element-ui';
import { param } from 'jquery';

//通过环境变量控制默认请求地址
switch(process.env.NODE_ENV) {
    case 'development':
    axios.defaults.baseURL = location.host;
    break;
    case 'debug':
    axios.defaults.baseURL = 'https://www.baidu.com';
    break;
    case 'production':
    axios.defaults.baseURL = 'https://www.baidu.com';
    break;
    default:
    
    break; 
}
//请求超时 toast    axios.defaults.timeout
axios.defaults.timeout = '5000';
//post请求头设置 告诉服务器你的请求是用url编码的，也就是遇到特殊符号会进行转义
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 拦截器
axios.interceptors.request.use({
    config:{

    }
})
/**  
 * get请求
 * @param { string } url (请求的url)
 * @param { Object } params (请求的参数)
**/

export function get(url,params){
    return new Promise((reslove,reject)=>{
        axios.get(url,{params:params}).then(res=>{
            reslove(res.data)
        }).catch(err => {
            this.$message({
                showClose: true,
                message: '这是一条消息提示',
                type: 'warning'
            });
            reject(err.datddddda)

        })
    })
}