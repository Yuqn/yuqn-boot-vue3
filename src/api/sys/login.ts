import {$post,$get} from '@/utils/request.ts'

// 登录方法
export const $Login = async(params:object)=>{
    let ret = await $post('user/login',params)
    if(ret.success){
        // 登成功后，将token信息保存到浏览器缓存中
        sessionStorage.setItem('token',ret.result.token)
        console.log("登录成功后获取tokentoken",ret.result.token)
    }
}

// 获取某个用户信息
export const $getOne = async(params:object)=>{
    let ret = await $get('sys/getOne',params)
    return ret;
}

// 退出
export const $logout = async()=>{
    let ret = await $post('user/logout')
    return ret;
}