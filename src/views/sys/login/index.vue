<template>
    <div class="login">
        <div class="box">
            <el-form
                size="small"
                ref="formRef"
                style="max-width: 600px"
                :model="formDate"
                status-icon
                :rules="rules"
                label-width="auto"
            >
                <el-form-item label="登录名" prop="userName">
                    <el-input v-model="formDate.userName" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formDate.password" type="password"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(formRef)">
                        登录
                    </el-button>
                    <el-button @click="resetForm(formRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
    // 导入组合式api
    import { reactive, ref, onMounted} from 'vue'

    // 导入 element-plus 类型
    import type { FormInstance, FormRules } from 'element-plus'

    // 导入路由
    import {useRouter} from 'vue-router'

    // 引入store文件
    import userUser from '@/store/user.ts'

    // 导入请求
    import {$Login,$getOne} from '@/api/sys/login.ts'

    // 返回路由对象器
    const router = useRouter();

    // 获取user全局状态
    const userStore = userUser();

    // 定义一个ref对象绑定表单
    const formRef = ref<FormInstance>()

    // 绑定表单数据
    const formDate = reactive({
        userName:'',
        password: ''
    })

    onMounted(()=>{
        if(userStore.user.userName){
            router.push('/home')
        }
    })

    // 验证账号
    const validateuserName= (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入账号'))
        } else {
            callback()
        }
    }

    // 验证密码
    const validatepassword = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入密码'))
        } else {
            callback()
        }
    }

    const rules = reactive<FormRules<typeof formDate>>({
        userName: [{ validator: validateuserName, trigger: 'blur' }],
        password: [{ validator: validatepassword, trigger: 'blur' }],
    })

    

    // 提交表单
    const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate(async(valid) => {
            if (valid) {

                let ret = await $Login(formDate)
                // 获取用户信息，并且保存到store中

                // let user =await $getOne({userName:formDate.userName})
                // userStore.setUser(user)
                // // 将用户信息传到浏览器缓存
                // sessionStorage.setItem("user",JSON.stringify(user));
                // 登录成功跳转
                console.log("准备跳转")
                router.push('/home')
            } else {
                return false
            }
        })
    }

    // 重置表单
    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.resetFields()
    }
</script>

<style scoped lang="scss">
    .login{
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to bottom,#74759b,#ccccd6);
        display: flex;
        justify-content: center;
        align-items: center;
        .box{
            width: 400px;
            height: 200px;
            border: 1px solid white;
        }
    }
</style>