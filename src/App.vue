<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
    import useStore from '@/store/user.ts'
    const userStore = useStore();
    // 每次页面刷新，获取sessionStorage数据，判断用户是否登录状态，是的话不跳回登录页
    if(sessionStorage.getItem('user')){
        let user = JSON.parse(sessionStorage.getItem('user'))
        userStore.setUser(user)
    }
</script>

<style scoped>
</style>
