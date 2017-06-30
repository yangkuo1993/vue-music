<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiper" v-show="showBanner">
        <!-- slides -->
        <swiper-slide v-for="banner in bannerList" :key="banner.targetId">
          <img style="width: 100%" :src="banner.pic" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'banner',
    data () {
      return {
        bannerList: [],
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          scrollbarHide: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          onTransitionStart (swiper) {
//            console.log(swiper)
          }
        },
        showBanner: false
      }
    },
    created () {
      this.$store.dispatch('GET_BANNER_MUSIC').then((data) => {
        this.bannerList = data.banners
        this.showBanner = true
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>
<style>

</style>
