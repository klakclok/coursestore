<template>
  <swiper class="swiper"  :options="swiperOption">
    <swiper-slide v-for="card in cards" :key="card.id" >
        <CardCourse  
        :card="card"
        />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import CardCourse from './cardCourse.vue';

  export default {
    name: 'swiper-example-loop-group',
    title: 'Loop mode with multiple slides per group',
    components: {
    Swiper,
    SwiperSlide,
    CardCourse
},
    props:{
        cards:{
            type: Array,
            required: true
        }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints:{
            320:{
                slidesPerView:1,
                slidesPerGroup:1
            },
            800:{
                slidesPerView:2,
                slidesPerGroup:2
            },
            1230:{
                slidesPerView:3,
                slidesPerGroup:3
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/swiper/css/swiper.css';

.swiper {
  height: 600px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    
    align-items: center;
    font-weight: bold;  
    background-color: white;
  }
  
}

</style>
