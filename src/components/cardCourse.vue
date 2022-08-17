<template>
    
        <div class="card">

            <div class="card_content">
                <img class="card_content_image" src="../assets/img1.png" alt="">
                <span class="card_button" href="">Программирование</span>
                <router-link to="/coursePage" class="card_content_title">Основы программирования</router-link>
                <p class="card_content_subtitle">Вы научитесь делать веб-сайты, разрабатывать удобные интерфейсы и решать проблемы пользователей.</p>
                <p class="card_content_price">10 000 ₽</p>
                

            <div class="card_content" >
                <img class="card_content_image"  :src="this.$store.getters.getHost + card.head_img.img.path" :alt="card.title">
                <span class="card_button" href="">{{card.category}}</span>
                <router-link to="/coursePage" class="card_content_title">{{card.title}}</router-link>
                <p class="card_content_subtitle">{{card.description}}</p>
                <p class="card_content_price">{{card.price}} <span>&#8381;</span> </p>
            </div>
        </div>
    </div>
</template>


<script>
    export default{

        name: 'cardCourse',
        props:{
            card:{  
                type: Object,
                required: true,
            }
        }

    }
</script>


<style scoped>
.card {
    width: 345px;
    height: 474px;
    padding: 0px 20px 0px 20px;
    /* padding-bottom: 48px; */
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 68px;
    position: relative;

    
}
.card_content {
    /* margin: 0 auto; */
    max-width: 305px;
    /* margin-top: -20px; */
    position: absolute;
    top: -20px;
    /* margin-left: 20px; */
    
    
    
}
.card_content_image{
    /* margin-right: 17px; */
    /* width: 305px; */

    height: auto;

    width: 305px;
    height: 250px;

    /* background: url(../assets/img1.png) 50% no-repeat; */
    border-radius: 10px;
    margin-bottom: 16px;
    /* margin-top: -20px; */
    
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
    text-decoration:none;
    
}
.card_content_title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    /* margin-top: 26px; */
    text-decoration: none;
    color: black;
    margin-bottom: 8px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 314px;
    transition-duration: 0.3s;
}
.card_content_title:hover{
    color:red;
}
.card_content_subtitle {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #888888;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 272px;
}
.card_content_price {
    width: 305px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    position: absolute;
    top: 415px;
    /* margin-bottom: 16px; */
    padding-bottom: 16px;
    border-bottom: 1px solid #E8E8E8;
}
.card_content_price::after{
    border-bottom: 1px #E8E8E8;
}

@media(max-width:400px){
    .card{
        width: 280px;
        height: 483px;
        padding: 0px 16px 48px 16px;
    }
    .card_content_image{
        width: 248px;
        height: 250px;
    }
    .card_content_price{
        width: 248px;
        top: 412px;
    }
    .card_content{
        max-width: 248px;
    }
}
</style>