import axios from 'axios'
import { baseURL_dev } from '@/config/baseURL.ts'

// 初始化一个axios对象
var instance = axios.create({
    baseURL:baseURL_dev,
    timeout:30000
});

// 请求拦截器
instance.interceptors.request.use(function(config){
    // 在发送请求之前做些什么
    console.log("config",config)
    // 如果请求的URL包含特定字符串，则不执行拦截器中的逻辑
    if (config.url?.includes('user/login')) {
        return config;
    }
    // 每次请求之前，向请求头中添加token信息
    config.headers['token'] = sessionStorage.getItem('token');
    return config;
},function(error){
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use(function(response){
     // 对响应数据做些什么
     console.log("请求后数据------------",response)
    return response;
},function(error){
    // 对响应错误做些什么
    return Promise.reject(error);
})

// 封装get请求方法
export const $get = async(url:string,params:object={})=>{
    let {data} = await instance.get(url,{params})
    return data
}

// 封装post请求方法
export const $post = async(url:string,params:object={})=>{
    let {data} = await instance.post(url,params)
    return data
}