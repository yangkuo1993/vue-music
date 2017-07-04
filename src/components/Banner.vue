<template>
    <div>
      <mt-swipe :auto="4000" style="height: 8rem">
        <mt-swipe-item v-for="banner in bannerList" :key="banner.targetId">
          <img :src="banner.pic" :alt="banner.typeTitle" style="width: 100%">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
  export default {
    name: 'banner',
    data () {
      return {
        bannerList: []
      }
    },
    mounted () {
      this.$store.dispatch('GET_BANNER_MUSIC').then((data) => {
        this.bannerList = data.banners
      }).catch((error) => {
        console.log(error)
      })
    },
    computed: {
    }
  }
</script>
<style>

</style>
