<template>
    <div id="main-page">
        <div class="main_screen">
            <div class="conteiner">
                <div class="main_screen_colum">
                    <div class="main_screen_colum_title">
                        <h1>Обмен знаниями без границ</h1>
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
                <!-- <div class="main_screen_statistics">
                    <div class="main_screen_statistics_inform">
                        <div class="main_screen_statistics_inform_number">3000</div>
                        <div class="main_screen_statistics_inform_text">Пользоветелей</div>
                    </div>
                    <div class="main_screen_statistics_inform">
                        <div class="main_screen_statistics_inform_number">250</div>
                        <div class="main_screen_statistics_inform_text">Лекций</div>
                    </div>
                    <div class="main_screen_statistics_inform">
                        <div class="main_screen_statistics_inform_number">120</div>
                        <div class="main_screen_statistics_inform_text">Лекторов</div>
                    </div>
                </div> -->
                
            </div>
        </div>
        <div class="course">
            <div class="conteiner">
                <h2>Курсы</h2>
                <SwiperMain :cards="cards" />
            </div>
        </div>
        <div class="questions">
            <div class="conteiner">
                <h2>Часто задаваемые вопросы</h2>
                <faqsList :faqs="faqs" />
            </div>
        </div>
        <div class="footer">
            <div class="footer_line"></div>
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
                                <a href=""><img class="contacts" src="../assets/instagram.svg" alt=""></a>
                                
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
                url: 'http://8bit.comrades.dev/api/courses',
                method: "GET",
                
            }).then((response) => {
                this.cards=response.data
            }).catch((err) => {
                console.log(err)
            }),
            axios({
                url: 'http://8bit.comrades.dev/api/faq',
                method: "GET",
                
            }).then((response) => {
                this.faqs=response.data
            }).catch((err) => {
                console.log(err)
            }),
            axios({
                url: 'http://8bit.comrades.dev/api/info',
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
}
a{
    text-decoration: none;
    color: black;
}
h2{
    margin-top: 20px;
    margin-bottom: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* margin-bottom: 68px; */
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
}

.main_screen_colum {
    display: flex;
}

h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #fff;
    margin-bottom: 28px;
    /* width: 588px; */
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
    margin-left: 195px;
}


/* ______________________COURSE______________________ */
.course{
    margin-bottom: 100px;
}

/* ______________________questions______________________ */
.questions{
    margin-bottom: 500px;
}
/* ------------------------Footer------------------------- */

.footer_line{
    border-bottom: solid 1px #E5E5E5;
    margin-bottom: 61px;
}
.footer_content {
    display: flex;
    gap: 108px;
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


</style>