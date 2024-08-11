import {defineStore} from 'pinia'

export default defineStore('user',{
    state(){
        return{
            user:{
                userName:''
            }
        }
    },
    actions:{
        setUser(user:object){
            this.user = user;
        },
        clearUser(){
            sessionStorage.clear();
            this.user={
                userName:''
            }
        }
    }
})