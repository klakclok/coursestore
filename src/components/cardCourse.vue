<template>
    <div id="card">
        <div class="card">
            <div class="card_content">
                <img class="card_content_image" src="../assets/img1.png" alt="">
                <span class="card_button" href="">Программирование</span>
                <router-link to="/coursePage" class="card_content_title">Основы программирования</router-link>
                <p class="card_content_subtitle">Вы научитесь делать веб-сайты, разрабатывать удобные интерфейсы и решать проблемы пользователей.</p>
                <p class="card_content_price">10 000 ₽</p>
                
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name: 'cardCourse'
    }
</script>


<style scoped>
.card {
    width: 345px;
    height: 474px;
    padding-left: 20px;
    /* padding-bottom: 48px; */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 68px;
    position: relative;
}
.card_content {
    /* margin: 0 auto; */
    width: 305px;
    /* margin-top: -20px; */
    position: absolute;
    top: -20px;
    border-bottom: 1px solid #E8E8E8;
}
.card_content_image{
    /* margin-right: 17px; */
    /* margin-right: 17px; */
    /* width: 305px; */
    height: auto;
    /* background: url(../assets/img1.png) 50% no-repeat; */
    border-radius: 10px;
    margin-bottom: 16px;
    /* margin-top: -20px; */
    
}

.card_content_title {
    color: #000;
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 8px;
    transition-duration: 0.3s;
}
.card_content_title:hover{
    color: red;
}
.card_content_subtitle {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #888888;
    margin-bottom: 16px;
}
.card_content_price {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 16px;
}
.card_button {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    border: 1px solid #007385;
    border-radius: 5px;
    padding: 5px;
    background-color: #007385;
    
}

</style>