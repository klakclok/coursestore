<template>
    <div id="course-page">
        <header class="header">
            <div class="header__container">
                <div class="navbar">
                    <nav class="nav">
                        <router-link to="/" class="navigation">Все курсы</router-link>
                        <span  class="navigation-symbol">&rsaquo;</span>
                        <router-link to="/coursePage" href="#" class="navigation">Профессия Менеджер проектов</router-link>
                    </nav>
                </div>
            </div>
        </header>
        <main class="main">
            <section class="get-started">
                <div class="get-started__container">
                    <div class="name-academy">
                        <img class="logo" src="@/assets/02.svg" alt="Логотип">
                        <h3 class="market-name">Академия <br> маркетинга</h3>
                    </div>
                    <div class="get-start__content">
                        <div class="get-started__content">
                            <div class="get-started__block-text block-text">
                                <h1 class="block-text__title">Профессия <br> Менеджер  проектов</h1>
                                <div class="block-text__text">Научитесь управлять бюджетом, сроками и <br> командой, применять Agile-подход, <br> Scrum-фреймворк и методологию Double <br> Diamond. Пополните портфолио сильным кейсом <br> и найдёте высокооплачиваемую работу.</div>
                                <button  class="block-text__button button" @click="showRequest">Купить - 10 250₽</button>
                                </div>
                            </div>
                        <div class="get-started__image">
                            <img src="@/assets/01.svg" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <transition name="slide-fade">
                <FormBuy  v-model="requestVisible" @request="showRequest"/>
            </transition>

            <section class="what-learn">
                    <div class="what-learn__container">
                        <div class="what-learn__content">
                            <div class="what-learn__block-learn block-learn">
                                <h2 class="block-learn__title">Чему вы научитесь</h2>
                                <ul class="block-learn__list">
                                    <li class="list">Получите полное представление о методах и навыках, необходимых для достижения успеха в управлении проектами начального уровня.</li>
                                    <li class="list">Узнайте, как создавать эффективную проектную документацию и артефакты на различных этапах проекта.</li>
                                    <li class="list">Изучите основы управления проектами Agile с упором на реализацию событий Scrum, создание артефактов Scrum и понимание ролей Scrum</li>
                                    <li class="list">Практикуйте стратегическое общение, решение проблем и управление заинтересованными сторонами с помощью реальных сценариев</li>
                                </ul>
                            </div>
                            <div class="what-learn-wraper">
                                <h3 class="what-learn-wraper-title">Навыки которые вы получите</h3>
                                <ul class="what-learn-wraper-skills">
                                    <li class="skills__list">Organizational Culture</li>
                                    <li class="skills__list">Career Development</li>
                                    <li class="skills__list">Strategic Thinking</li>
                                    <li class="skills__list">Change Management</li>
                                    <li class="skills__list">Project Management</li>
                                    <li class="skills__list">Stakeholder Management</li>
                                    <li class="skills__list">Business Writing</li>
                                    <li class="skills__list">Project Charter</li>
                                    <li class="skills__list">Procurement</li>
                                    <li class="skills__list">Project Planning</li>
                                    <li class="skills__list">Risk Management</li>
                                    <li class="skills__list">Task Estimation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
            <section class="program-course">
                <div class="program-course__container">
                    <ProgramCourse />
                </div>
            </section>
            <section class="who-course">
                <div class="who-course__container">
                    <div class="who-course__contant">
                        <h2 class="who-course__title">Для кого этот курс?</h2>
                        <div class="who-course__blocks">
                            <div class="who-course__block">
                                <img src="@/assets/image2.png" alt="человек с сиреной">
                                <h3 class="who-course__subtitle">Для новичков</h3>
                                <p class="who-course__text">Since wire-frame renderings are relatively simple and fast to calculate</p>
                            </div>
                            <div class="who-course__block">
                                <img src="@/assets/image3.png" alt="очкарик на умах">
                                <h3 class="who-course__subtitle">Для маркетологов</h3>
                                <p class="who-course__text">Since wire-frame renderings are relatively simple and fast to calculate</p>
                            </div>
                            <div class="who-course__block">
                                <img src="@/assets/image4.png" alt="в галстуке пацан">
                                <h3 class="who-course__subtitle">Для предпринимателей</h3>
                                <p class="who-course__text">Since wire-frame renderings are relatively simple and fast to calculate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="footer__container">
                <div class="footer_content">
                    <div class="footer_content_colum">
                        <h3><a href="">Store</a></h3>
                        <ul>
                            <li><a class="footer_content_colum_item" href="">Catalog</a></li>
                            <li><a class="footer_content_colum_item" href="">Popular</a></li>
                            <li><a class="footer_content_colum_item" href="">Features</a></li>
                        </ul>
                    </div>
                    <div class="footer_content_colum">
                        <h3><a href="">Store</a></h3>
                        <ul>
                            <li><a class="footer_content_colum_item" href="">Catalog</a></li>
                            <li><a class="footer_content_colum_item" href="">Popular</a></li>
                            <li><a class="footer_content_colum_item" href="">Features</a></li>
                        </ul>
                    </div>
                    <div class="footer_content_colum">
                        <h3><a href="">Store</a></h3>
                        <ul>
                            <li><a class="footer_content_colum_item" href="">Catalog</a></li>
                            <li><a class="footer_content_colum_item" href="">Popular</a></li>
                            <li><a class="footer_content_colum_item" href="">Features</a></li>
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
        </footer>
    </div>
</template>

<script>
import ProgramCourse from '@/components/programCourse.vue';
import FormBuy from '@/components/formBuy';
    export default {
    name: "coursePage",
    components: {
        ProgramCourse,
        FormBuy },
    data(){
        return{
            requestVisible: false
        }
    },
    methods:{
        showRequest(request){
            this.requestVisible = request;
        },

    }

}
</script>
<style lang="scss" scoped>
a {

    text-decoration: none
}
[class*="__container"] {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    overflow: hidden;
}
.main{
    flex: 1 1 auto;
    position: relative;
    min-height: 100%;
    overflow: hidden;
}
section{
    display: block;

}

.navigation{

    width: 72px;
    height: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;


}
.nav{
    position: absolute;
    padding-top: 30px;
    z-index: 1;
    span{
        padding: 0px 10px 0px 10px;
    }
}
.navigation-symbol{
    width: 2.5px;
    height: 5px;

    color: #FFF;
}
.main{
    width: 100%;
}
.course-page{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
.get-started{
    position: relative;
    background-color: #101010;
    background-size: cover;
    padding-bottom: 20px;
}
.name-academy{
    display: flex;

    padding: 100px 0px 20px 0px;
}
.logo{
    width: 50px;
    height: 50px;
}
.market-name{
    width: 104px;
    height: 44px;
    padding-left: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
}

.block-text__title:not(:last-child) {
    margin: 0px 0px 30px 0px;
}
.block-text__text:not(:last-child) {
    margin: 0px 0px 40px 0px;
    max-width: 550px;
}
.get-start__content{
    display: flex;
    justify-content: space-between;

}
.get-started__image{
    margin-top: -170px;
}
.block-text__title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;

    color: #FFFFFF;

}
.block-text__text{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    /* or 34px */


    color: #FFFFFF;
}

.button{
    position: relative;
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    background: #007385;
    border-radius: 10px;
    padding: 20px 50px;
    color: #FFFFFF;
    z-index: 499;
    cursor: pointer;
    outline: none;
}
.button:hover{
        background: linear-gradient(90deg,#ea1414,#7004a7);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
// section two
.what-learn{
    margin-top: 130px ;
    // height: 500px;
}
.what-learn__content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
ul{
    list-style-type:none;
}
.block-learn__title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #000000;
    margin-bottom: 80px;

}

.block-learn__list{
    width: 816px;
    // height: 400px;
    position: relative;
    display: flex;
    // padding-top: 86px;
    flex-wrap: wrap;
    gap: 80px;
    margin-bottom: 30px;
}
.list{
    display: block;
    width: 346px;
    // height: 135px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #000000;
    position: relative;
}
.list::before{
    content: url('../assets/03.svg');
    position: absolute;
    top: -30px;
}
.what-learn-wraper{
    display: block;
    inline-size: max-content;
    height: max-content;
    block-size: max-content;
    width: 466px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
    background: #FFFFFF;
}

.what-learn-wraper-title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    padding-top:30px;
    padding-left: 30px;
    padding-right: 0px;
    color: #000000;
}
.what-learn-wraper-skills{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-left: 30px;
    padding-bottom: 30px;
}

.skills__list{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 4px 10px;
    line-height: 140%;
    color: #000000;
    background: #F1F1F1;
    border-radius: 5px;
    text-align: center;
}

//section three
.program-course{
    margin-top: 130px;
}

//section four
.who-course{
    margin-bottom: 91px;
    margin-top: 130px;
}
.who-course__title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    padding-bottom: 60px;
}
.who-course__blocks{
    display:flex;
    text-align: center;
    justify-content: space-between;
}
.who-course__block{

    img{
        height: 200px;
    }
}
.who-course__subtitle{
    padding-top:40px ;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 34px;
}
.who-course__text{
    max-width: 358px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 34px;

}

// .footer{
//     margin-top: 300px;
//     border-top: 1px solid #E8E8E8;

// }

// .footer_content {
//     display: flex;
//     gap: 108px;
//     margin-top: 60px;
// }
// h3{
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 32px;
//     margin-bottom: 24px;
// }
// .footer_content_colum_item{
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 34px;
// }

// .footer_contacts {
//     margin-top: 127px;
//     margin-bottom: 15px;
// }

// .footer_contacts_content{
//     display: flex;
//     justify-content: space-between;
// }
// .footer_contacts_content_text {
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 18px;
// }
// .footer_contacts_content_social {
//     display: flex;
//     gap: 24px;
// }
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
h3 a{
    color: #000000;
}
.footer_content_colum_item{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 34px;
    color: #000000;
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
    color: #000000;
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
    .block-learn__list{
        gap: 70px;
    }
    .list{
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        width: 280px;
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


@media (max-width:1230px){
    .header{
        display: none;
    }
    .get-start__content{
        flex-direction: column-reverse;
    }
    .what-learn-wraper{

    }
    .get-started__image{
        margin-top: -45px;
    }
    .name-academy{
        padding-top: 23px;
    }
    // .what-learn__content{
    //     flex-direction: column;
    // }
    // .block-learn__list{
    //     flex-direction: column;
    // }
    .who-course__blocks{
        flex-direction: column;
        gap: 30px;
    }
    .who-course__text{
        margin: 0 auto;
        width: 100%;
        display: block;
    }
}
@media (max-width:500px){
    .block-learn__title{
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        width: 165px;
    }
    .what-learn{
        margin-top: 50px;
    }

}
@media (max-width:770px){
    .block-learn__list{
        flex-direction: column;
    }
}
@media (max-width:710px){
    .get-started__image img{
        width: 450px;
        height: auto;

    }
    .get-started__image{
        margin-top: -50px;
    }
}
@media (max-width:470px){
    .get-started__image img{
        width: 350px;
        height: auto;

    }
    .get-started__image{
        margin-top: -50px;
    }
    .block-text__title{
        font-size: 40px;
        line-height: 45px;
    }
    .block-text__text{
        font-size: 20px;
        line-height: 140%;
    }
}
@media (max-width:360px){
    .get-started__image img{
        width: 250px;
        height: auto;

    }
    .get-started__image{
        margin-top: -50px;
    }
    .block-text__title{
        font-size: 30px;
        line-height: 36px;
    }
    .block-text__text{
        font-size: 16px;
        line-height: 140%;
    }
}


</style>l
