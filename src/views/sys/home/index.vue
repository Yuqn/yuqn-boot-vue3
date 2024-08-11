<template>
    <div class="index">
        <div class="left">
            <h2>yuqn-boot</h2>
            <el-menu
                active-text-color="#ffd04b"
                background-color="#bbb5ac"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><HomeFilled /></el-icon>
                        <span>首页</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><Tools /></el-icon>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item index="2-1">用户管理</el-menu-item>
                    <el-menu-item index="2-2">角色管理</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3" >
                    <el-icon><View /></el-icon>
                    <span>关于</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="right">
            <div class="right-top">
                <el-menu
                    :ellipsis="false"
                    mode="horizontal"
                    :popper-offset="16"
                    style="max-width: 600px"
                    background-color="#bbb5ac"
                >
                    <el-sub-menu index="2">
                        <template #title>Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="1">
                        <el-icon><BellFilled /></el-icon>
                        <!-- Processing Center -->
                    </el-menu-item>
                    
                    <el-menu-item index="4" >
                        <el-icon><Tools /></el-icon>
                        <!-- Info -->
                    </el-menu-item>

                    <el-menu-item index="5">
                        <div class="demo-type">
                            <!-- <div>
                              <el-avatar :icon="UserFilled" />
                            </div> -->
                            <div>
                              <el-avatar
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                              />
                            </div>
                            <!-- <div>
                              <el-avatar> user </el-avatar>
                            </div> -->
                        </div>
                    </el-menu-item>
                    <el-sub-menu index="6">
                        <template #title>
                            <el-icon><Avatar /></el-icon>
                            <span>yuqn</span>
                        </template>
                        <el-menu-item index="6-1" @click="exitLogin">退出登录</el-menu-item>
                        <el-menu-item index="6-2">item two</el-menu-item>
                        <el-menu-item index="6-3">item three</el-menu-item>
                    </el-sub-menu>

                </el-menu>
            </div>
            <div class="right-bottom">2</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // 导入钩子
    import {onMounted} from 'vue'

    // 导入 element-plus 类型
    import {HomeFilled,Tools,View,BellFilled,UserFilled,Avatar } from '@element-plus/icons-vue'
    import { ElMessage, ElMessageBox } from 'element-plus'

    // 导入路由
    import userUser from '@/store/user.ts'

    // 引入store文件
    import {useRouter} from 'vue-router'

    // 获取user全局状态
    let userStore = userUser();

    // 返回路由对象器
    let router = useRouter();

    // 导入请求
    import {$logout} from '@/api/sys/login.ts'

    onMounted(()=>{
        if(!userStore.user.userName){
            // router.push('/')
        }
    })

    // 退系系统
    let exitLogin = ()=>{
        ElMessageBox.confirm(
            '是否退出系统?',
            '系统提示',
            {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
            }
        )
        .then(async() => {
            let ret = await $logout();
            console.log("ret",ret)
            userStore.clearUser();
            router.push('/');
        })
        .catch(() => {
       
        })
    }
</script>

<style scoped lang="scss">
    .index{
        width: 100vw;
        height: 100vh;
        display: flex;
        .left{
            width: 200px;
            background-color: #bbb5ac;
            color: white;
            .el-menu{
                border-right: none;
            }
            h2{
                font-size: 18px;
                font-family: 'Courier New', Courier, monospace;
                text-align: center;
                height: 60px;
                line-height: 60px;
            }
        }
        .right{
            flex: 1;
            display: flex;
            flex-direction: column;
            .right-top{
                height: 60px;
                background-color: #bbb5ac;
                display: flex;
                justify-content: flex-end;
                .el-menu{
                    border-bottom: none;
                }
            }
            .right-bottom{
                flex: 1;
                background-color: white;
                padding: 5px;
            }
        }
    }
    .demo-type {
        display: flex;
    }
    .demo-type > div {
        flex: 1;
        text-align: center;
    }

    .demo-type > div:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }
</style>