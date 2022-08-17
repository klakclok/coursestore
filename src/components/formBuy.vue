<template>
    <div id="form-bye" v-if="value"   @click.stop="$emit('input', false)">
        <form class="request-user" @click.stop  @submit.prevent="checkInput" >
            <h2 class="form-title">Оставить заявку</h2>
            <div class="request-user__block">
                <h3 class="input-title">Фамилия</h3>
                <input v-model="request.surname"  class="request-user__input" type="text" placeholder="Введите фамилию...">
                <span class="error" v-show="!request.surname && error">Поле является обязательным</span>
            </div>
            <div class="request-user__block">
                <h3 class="input-title">Имя</h3>
                <input v-model="request.name"  class="request-user__input" type="text" placeholder="Введите имя...">
                <span class="error" v-show="!request.name && error">Поле является обязательным</span>
            </div>
            <div class="request-user__block">
                <h3 class="input-title">Отчество</h3>
                <input v-model="request.patronymic"  class="request-user__input" type="text" placeholder="Введите отчество...">
            </div>
            <div class="request-user__block">
                <h3 class="input-title">Номер телефона</h3>
                <input v-model="request.phone"  class="request-user__input" type="tel" placeholder="Введите номер...">
                <span class="error" v-show="!request.phone && error">Поле является обязательным</span>
            </div>
            <button type="submit" :class="{'create-request__button-active': isFilled}" class="request-btn">Отправить</button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:'formbye',
        data(){
            return{
                error:false,
                request:{
                    surname:"",
                    name:"",
                    phone:"",
                    patronymic:""
                    
                }
            }
        },  
        props:{
            value:{
                
                default:false
            }
        },
        methods:{
            checkInput() {
            let formRequest = this.request
            this.error = true;
            console.log(formRequest)
            if ((formRequest.surname && formRequest.name && formRequest.phone)) {
                this.error = false;
                console.log('alo')
                return this.createRequest();
            }},
            createRequest() {
                axios({

                    url: 'http://8bit.comrades.dev/api/claim',
                    method: "POST",
                    data: {
                    name: this.request.name,
                    surname: this.request.surname,
                    phone: this.request.phone,
                    patronymic:this.request.patronymic
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
                this.request.surname="",
                this.request.name="",
                this.request.phone="",
                this.request.patronymic=""
                this.$emit('request', false)
            }
        },
        computed:{
            isFilled(){
                return this.request.name && this.request.surname && this.request.phone
            }
        }
        
    }
</script>

<style scoped>
    #form-bye{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        position: fixed;
        display: flex;
        z-index: 500;
        
    }
    .form-title{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        color: black;
        padding: 70px 170px 78px 170px;
    }
    .request-user__block{
        padding: 0px 70px 50px 70px;
    }
    .request-user{
        margin: auto;
        background: white;
        border-radius: 12px;
        width: 700px;
        
        height: max-content;
    }
    input {outline:none;}
    .input-title{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
    }
    .request-user__input{
        display: block;
        /* margin: 123px 70px 110px 70px; */
        width: 560px;
        height: 35px;
        color: black;
        background-color:white;
        border-bottom: 2px solid #007385;
        border-top: none;
        border-right: none;
        border-left: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
    }
    .request-btn{
        width: 256px;
        height: 62px;
        background: #9f9f9f;
        border-radius: 10px;
        color: rgb(255, 255, 255);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        border: none;
        margin: 0px 200px;
        margin-bottom: 5px;
        
    }
    .create-request__button-active {
        background-color: #007385;
        cursor: pointer;
    }
    .error{
        color:red
    }
    @media(max-width:720px){
        .request-user{
            width: 500px;
        }
        .request-user__input{
            width: 360px;
        }
        .form-title{
            font-size: 30px;
            padding: 70px 0px 30px 120px;
        }
        .request-btn{
            margin: 0px 130px;
        }
}
    @media(max-width:520px){
        .request-user{
            width: 400px;
            height: 650px;
        }
        .request-user__input{
            width: 250px;
        }
        .form-title{
            font-size: 30px;
            padding: 40px 0px 30px 75px;
        }
        .request-btn{
            margin: 0px 70px;
        }
}
    @media(max-width:420px){
        .request-user{
            width: 300px;
            height: 610px;
        }
        .request-user__input{
            width: 220px;
        }
        .form-title{
            font-size: 20px;
            line-height: 25px;
            padding: 30px 0px 30px 60px;
        }
        .request-btn{
            margin: 0px 50px;
            width: 200px;
        }
        .request-user__block{
            padding: 0px 70px 50px 30px;
        }
}
</style>

