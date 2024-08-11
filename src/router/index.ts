import { title } from 'process';
import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            meta:{title:'用户登录'},
            component:()=>import("@/views/sys/login/index.vue")
        },
        {
            path:'/login',
            meta:{title:'用户页面'},
            redirect:'/'
        },
        {
            path:'/home',
            meta:{title:'首页'},
            component:()=>import('@/views/sys/home/index.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    next();
    // to and from are both route objects. must call `next`.
})
router.afterEach((to, from) => {
    document.title = to.meta.title
    // to and from are both route objects.
})
export default router