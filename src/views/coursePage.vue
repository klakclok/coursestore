<template>
    <div id="course-page">
        <header class="header">
            <div class="header__container">
                <div class="navbar">
                    <nav class="nav">
                        <a href="#" class="navigation">Все курсы</a>
                        <span  class="navigation-symbol">&rsaquo;</span>
                        <a href="#" class="navigation">Профессия Менеджер проектов</a>
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
                                <a href="#" class="block-text__button button">Купить - 10 250₽</a>
                                </div>
                            </div>
                        <div class="get-started__image">
                            <img src="@/assets/01.svg" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="what-learn">
                    <div class="what-learn__container">
                    </div>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name:'coursePage'
    }
</script>
<style lang="scss">
a {
    
    text-decoration: none
}
[class*="__container"] {
    max-width: 1438px;
    margin: 0px auto;
    
    padding: 0 20px;
}
.main{
    flex: 1 1 auto;
    position: relative;
}
section{
    display: block;
}
.header{
    position: absolute;
    z-index: 1;
    
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
    padding-top: 30px;
    
    span{
        padding: 0px 10px 0px 10px;
    }
}
.navigation-symbol{
    width: 2.5px;
    height: 5px;

    color: #FFF;
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
    height: 728px;
}
.name-academy{
    display: flex;
    align-items: center;
    padding: 70px 0px 40px 0px;
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
.block-text{
    
}
.block-text__title:not(:last-child) {
    margin: 0px 0px 30px 0px;
}
.block-text__text:not(:last-child) {
    margin: 0px 0px 40px 0px;
}
.get-start__content{
    
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
}
.get-started__image{
    position: absolute;
    padding-left: 740px;
    margin-top: -20px;
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
    display: inline-block;
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
    transition: background-color 0.3s ease 0s;
}
</style>