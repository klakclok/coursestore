<template>
    <div id="main-page">
        <div class="main_screen">
            <div class="conteiner">
                <div class="main_screen_colum">
                    <div class="main_screen_colum_title">
                        <h1>Обмен <span class="span"> знаниями</span> без границ</h1>
                        <p class="main_screen_colum_subtitle">Единственная образовательная онлайн-площадка для лекций, курсов, мастер-классов от мусульман для мусульман, а также единственное в своем роде место знакомства и обмена знаниями в сфере исламской тематики, арабистики и востоковедения.</p>
                        <div class="main_screen_statistics">
                    <div class="main_screen_statistics_inform">
                        <div class="main_screen_statistics_inform_number">{{info}}</div>
                        <div class="main_screen_statistics_inform_text">Пользователей</div>
                    </div>
                    <div class="main_screen_statistics_inform">
                        <div class="main_screen_statistics_inform_number">250</div>
                        <div class="main_screen_statistics_inform_text">Лекций</div>
                    </div>
                    <div class="main_screen_statistics_inform">
                        <div class="main_screen_statistics_inform_number">120</div>
                        <div class="main_screen_statistics_inform_text">Лекторов</div>
                    </div>
                </div>
                    </div>
                    <img class="phone" src="../assets/Saly-24.svg" alt="">
                </div>

            </div>
        </div>
        <div class="course" v-if="cards.length > 0">
            <div class="conteiner">
                <h2>Курсы</h2>
                <SwiperMain :cards="cards"
                />
            </div>
        </div>
        <div class="questions" v-if="faqs.length > 0">
            <div class="conteiner">
                <h2>Часто задаваемые вопросы</h2>
                <faqsList :faqs="faqs" />
            </div>
        </div>
        <div class="footer">
            <div class="conteiner">
                <div class="footer_content">
                    <div class="footer_content_colum">
                        <h3><a href="">Store</a></h3>
                        <ul>
                            <li ><a class="footer_content_colum_item" href="">Catalog</a></li>
                            <li ><a class="footer_content_colum_item" href="">Popular</a></li>
                            <li ><a class="footer_content_colum_item" href="">Features</a></li>
                        </ul>
                    </div>
                    <div class="footer_content_colum">
                        <h3><a href="">Store</a></h3>
                        <ul>
                            <li ><a class="footer_content_colum_item" href="">Catalog</a></li>
                            <li ><a class="footer_content_colum_item" href="">Popular</a></li>
                            <li ><a class="footer_content_colum_item" href="">Features</a></li>
                        </ul>
                    </div>
                    <div class="footer_content_colum">
                        <h3><a href="">Store</a></h3>
                        <ul>
                            <li ><a class="footer_content_colum_item" href="">Catalog</a></li>
                            <li ><a class="footer_content_colum_item" href="">Popular</a></li>
                            <li ><a class="footer_content_colum_item" href="">Features</a></li>
                        </ul>
                    </div>

                </div>
                <div class="footer_contacts">
                    <div class="conteiner">
                        <div class="footer_contacts_content">
                            <p class="footer_contacts_content_text">© 2021. All rights reserved</p>
                            <div class="footer_contacts_content_social">
                                <a href=""><img class="contacts" src="../assets/twitter.svg" alt=""></a>
                                <a href=""><img class="contacts" src="../assets/facebook.svg" alt=""></a>
                                <a href=""><img class="contacts" src="../assets/google.svg" alt=""></a>
                                <a href=""><img class="contacts" src="../assets//instagram.svg" alt=""></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CardCourse from "@/components/cardCourse.vue";
import SwiperMain from "@/components/swiperMain.vue";
import faqsList from "@/components/faqsList";
import axios from "axios";
    export default{
        name: 'mainPage',
        components:{
    CardCourse,
    SwiperMain,
    faqsList,

},
        data(){
            return{
                info: null ,
                cards: [],
                faqs:[]
            }
        },
        mounted(){
            axios({
                url: 'https://8bit.comrades.dev/api/courses',
                method: "GET",

            }).then((response) => {
                this.cards=response.data
            }).catch((err) => {
                console.log(err)
            }),
            axios({
                url: 'https://8bit.comrades.dev/api/faq',
                method: "GET",

            }).then((response) => {
                this.faqs=response.data
            }).catch((err) => {
                console.log(err)
            }),
            axios({
                url: 'https://8bit.comrades.dev/api/info',
                method: "GET",

            }).then((response) => {
                this.info=response.data[0].users
            }).catch((err) => {
                console.log(err)
            })
        },

    }
</script>






<style lang="scss" scoped>
.conteiner{
    max-width: 1440px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 15px;
}
a{
    text-decoration: none;
    color: black;
}
h2{
    margin-top: 100px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* margin-bottom: 68px; */
    margin-bottom: 40px;
}

li{
    list-style-type: none;
}
/* __________________MAIN_SCREEN___________________ */
.main_screen {
    background: #007385;
    padding-top: 60px;
    /* padding-bottom: 60px; */
    /* padding-top: 60px; */
    /* height: 778px; */
    position: relative;
    min-height: 100%;
    overflow: hidden;
}

.main_screen_colum {
    /* display: flex; */

}
.main_screen_colum_title {
    /* margin-bottom: 60px; */
    position: relative;


}


h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #fff;
    margin-bottom: 28px;
    width: 588px;
    z-index: 5;
    /* margin-bottom: -100px; */

}
span{
    position: relative;
}
span::after{
    /* text-decoration: underline wavy; */
    content: url(../assets/Vector3.svg);
    position: absolute;
    /* margin-left: -289px; */
    left: 3px;
    top: 20px;
}
.main_screen_colum_subtitle {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: #FFFFFF;
    width: 588px;
    /* margin-bottom: 173px; */
}
.main_screen_statistics{
    display: flex;
    gap: 40px;
    background-color: inherit;
    margin-top: 173px;
    margin-bottom: 60px;

}
.main_screen_statistics_inform{
}
.main_screen_statistics_inform_number {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #fff;
}
.main_screen_statistics_inform_text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: #fff;
}
.phone{
    position: absolute;
    top: 0;
    left: 969px;
    /* margin-top: 44px; */
    z-index: 0;

}
/* -------------ЧИСТО НА КАРТИНКУ------------ */
@media(max-width:1750px){
    .phone{
        left: 800px;
    }
}
@media(max-width:1600px){
    .phone{
        left: 750px;
    }
}
@media(max-width:1540px){
    .phone{
        left: 750px;
    }
}
@media(max-width:1370px){
    /* h1{
        font-size: 50px;
    }
    span::after{
        content: url(../assets/Vector\ 3.svg);
        width: 200px;
        height: auto;
    } */
    .phone{
        /* transform: rotate(-30deg); */
        left: 650px;
    }
}
@media(max-width:1270px){
    .phone{
        left: 550px;
    }
}
@media(max-width:1200px){
    .phone{
        /* transform: rotate(-40deg); */
        width: 670px;
        height: auto;
        left: 556px;
        top: 72px;
    }
    .main_screen_statistics{
        margin-top: 70px;
    }
}
@media(max-width:1050px){
    .phone{
        /* transform: rotate(-40deg); */
        left: 480px;
        width: 670px;
        height: auto;
        top: -14px;
    }
    .main_screen_statistics{
        margin-top: 50px;
    }
    h1{
        font-size: 50px;
        width: 450px;
        margin-bottom: 28px;
        line-height: 60px;
    }
    span::after {
        content: url(../assets/line3.svg);
    }
    .main_screen_colum_subtitle{
        font-size: 20px;
        width: 500px;
    }
    .main_screen_statistics_inform_number{
        font-size: 50px;

    }
    .main_screen_statistics_inform_text{
        font-size: 20px;
    }
}
@media(max-width:940px){
    .phone{
        transform: rotate(-40deg);
        /* left: 400px;  */
        left: 500px;
    }
}
@media(max-width:900px){
    .phone{
        transform: rotate(-40deg);
        left: 460px;
    }
}
@media(max-width:750px){
    .phone{
        transform: rotate(-40deg);
        left: 475px;
        width: 420px;
        height: auto;
    }


}
@media(max-width:700px){
    .phone{
        transform: rotate(-40deg);
        left: 425px;
        width: 420px;
        height: auto;
    }


}
@media(max-width:650px){
    .phone{
        transform: rotate(-40deg);
        left: 375px;
        width: 400px;
        height: auto;
        margin-top: 30px;
    }


}
@media(max-width:600px){
    .phone{
        transform: rotate(-40deg);
        left: 336px;
        width: 400px;
        height: auto;
        margin-top: 30px;
    }
    h1{
        font-size: 40px;
        width: 400px;
    }
    .main_screen_colum_subtitle{
        font-size: 20px;
        width: 370px;
    }
    .main_screen_statistics_inform_number{
        font-size: 40px;

    }
    .main_screen_statistics_inform_text{
        font-size: 20px;
    }
    span::after {
        content: url(../assets/line5.svg);
        top: 15px;
    }


}
@media(max-width:550px){
    .phone{
        transform: rotate(-40deg);
        left: 286px;
        width: 400px;
        height: auto;
        margin-top: 15px;
    }
}
@media(max-width:500px){
    .phone{
        transform: rotate(-40deg);
        left: 236px;
        width: 400px;
        height: auto;
        margin-top: 15px;
    }
    h1{
        font-size: 30px;
        line-height: 36px;
        width: 200px;
    }
    .main_screen_colum_subtitle{
        font-size: 20px;
    }
    .main_screen{
        padding-top: 30px;
    }
    span::after {
        content: url(../assets/line4.svg);
        top: 10px;
    }
}
@media(max-width:450px){
    .phone{
        transform: rotate(-40deg);
        left: 250px;
        width: 300px;
        height: auto;
        margin-top: 15px;
    }
    .main_screen_colum_subtitle{
        font-size: 16px;
        line-height: 140%;
        width: 300px;
    }
    .main_screen_statistics_inform_number{
        font-size: 24px;
        line-height: 29px;
        margin-top: 45px;
    }
    .main_screen_statistics_inform_text{
        font-size: 14px;
    }
    .main_screen_statistics{
        gap: 19px;
    }
}
@media(max-width:420px){
    .phone{
        transform: rotate(-40deg);
        left: 220px;
        width: 300px;
        height: auto;
        margin-top: 15px;
    }

}
@media(max-width:380px){
    .phone{
        transform: rotate(-40deg);
        left: 225px;
        width: 230px;
        height: auto;
        margin-top: 15px;
        position: absolute;
        right: 0;

    }

}
@media(max-width:350px){
    .phone{
        transform: rotate(-40deg);
        left: 200px;
        width: 230px;
        height: auto;
        margin-top: 15px;
    }

}
@media(max-width:330px){
    .phone{
        transform: rotate(-30deg);
        left: 197px;
        width: 230px;
        height: auto;
        margin-top: 15px;
    }
    /* .main_screen{
        padding-top: 30px;
    } */

}
@media(max-width:320px){
    .phone{
        transform: rotate(-30deg);
        left: 187px;
        width: 230px;
        height: auto;
        margin-top: 15px;
    }
    /* .main_screen{
        padding-top: 30px;
    } */

}

/* ----------------------------------------------- */




/* ______________________COURSE______________________ */
.course{
    margin-bottom: 100px;
}
.course_card{
    margin-left: 5px;
    margin-bottom: 5px;
}

/* ______________________questions______________________ */
.questions{
    margin-bottom: 500px;
}

/* ------------------------Footer------------------------- */
.footer{
    border-top: 1px solid #e5e5e5;
    padding-top: 61px;
}

.footer_content {
    display: flex;
    flex-wrap: wrap;

    gap: 108px;
}
.footer_content_colum {


}
h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 24px;
}
.footer_content_colum_item{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 34px;
}

.footer_contacts {
    margin-top: 127px;
    margin-bottom: 15px;
}

.footer_contacts_content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.footer_contacts_content_text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
}
.footer_contacts_content_social {
    display: flex;
    gap: 24px;

}
.contacts {
}
@media(max-width:390px){
    .footer_content{
        gap: 40px;
        margin-bottom: 313px;

    }
    .footer_contacts_content{
        flex-direction: column-reverse;
        margin-bottom: 0px;
    }
    .footer_contacts_content_social{
        margin-bottom: 29px;
    }

}
@media(max-width:1050px){
    h2{
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 30px;
    }

}

</style>
