<template>
  <swiper :slides-per-view="3"
          :space-between="0"
          :loop="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange">
    <Swiper-slide><img src="../assets/thanks.jpg" alt="1"/></Swiper-slide>
    <swiper-slide><img src="../assets/thanks.jpg" alt="2"/></swiper-slide>
    <swiper-slide><img src="../assets/thanks.jpg" alt="3"/></swiper-slide>
    <swiper-slide><img src="../assets/thanks.jpg" alt="4"/></swiper-slide>
    <swiper-slide><img src="../assets/thanks.jpg" alt="5"/></swiper-slide>
<!--    <div class="swiper-pagination" slot="pagination"></div>-->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// eslint-disable-next-line no-unused-vars
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  name: 'Carrousel',
  data() {
    return {
      imgList: [],
      swiperOptions: {
        slidesPerView: 3, // 显示的数量
        spaceBetween: 30, // 每张的间距
        pagination: { el: '.swiper-pagination' }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    // swiper() { return this.$refs.mySwiper.$swiper }
  },

  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  & img {
    width: 540px;
    border-radius: 10px;
  }
}
</style>
