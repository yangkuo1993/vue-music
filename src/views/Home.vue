<template>
    <div>
      <mt-tabbar v-model="selected">
        <mt-tab-item id="发现音乐">
          <img slot="icon" src="../assets/discover.svg">
          发现音乐
        </mt-tab-item>
        <mt-tab-item id="我的音乐">
          <img slot="icon" src="../assets/mymusic.svg">
          我的音乐
        </mt-tab-item>
        <mt-tab-item id="朋友">
          <img slot="icon" src="../assets/friends.svg">
          朋友
        </mt-tab-item>
        <mt-tab-item id="账号">
          <img slot="icon" src="../assets/count.svg">
          账号
        </mt-tab-item>
      </mt-tabbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="发现音乐">
          <Discover-Music></Discover-Music>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的音乐">
          <My-Music></My-Music>
        </mt-tab-container-item>
        <mt-tab-container-item id="朋友">
          <Friends></Friends>
        </mt-tab-container-item>
        <mt-tab-container-item id="账号">
          <Account></Account>
        </mt-tab-container-item>
      </mt-tab-container>
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
        selected: '我的音乐'
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

</style>
