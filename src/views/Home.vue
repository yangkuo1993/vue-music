<template>
    <div class="full-container">
      123124
    </div>
</template>

<script>
  import hello from '@/components/hello'
  import account from './account'
  import friends from './friends'
  import discoverMusic from './discoverMusic'
  import myMusic from './myMusic'
  export default {
    name: 'home',
    data () {
      return {
        selected: '发现音乐'
      }
    },
    mounted () {
      console.log(this.$store.state.user.hotMusicList)
    },
    components: {
      'Hello': hello,
      'Account': account,
      'Friends': friends,
      'Discover-Music': discoverMusic,
      'My-Music': myMusic
    }
  }
</script>
<style>
  .mint-tab-container-wrap{
    width: 100%;
    height: 100%;
  }
</style>
