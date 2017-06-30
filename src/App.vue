<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" style="z-index: 999;background: #f44336">
      <mt-tab-item id="发现音乐">
        <img slot="icon" src="./assets/discover.svg">
        发现音乐
      </mt-tab-item>
      <mt-tab-item id="我的音乐">
        <img slot="icon" src="./assets/mymusic.svg">
        我的音乐
      </mt-tab-item>
      <mt-tab-item id="朋友">
        <img slot="icon" src="./assets/friends.svg">
        朋友
      </mt-tab-item>
      <mt-tab-item id="账号">
        <img slot="icon" src="./assets/count.svg">
        账号
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container class="full-container" v-model="selected">
      <mt-tab-container-item id="发现音乐">
      </mt-tab-container-item>
      <mt-tab-container-item id="我的音乐">
      </mt-tab-container-item>
      <mt-tab-container-item id="朋友">
      </mt-tab-container-item>
      <mt-tab-container-item id="账号">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        selected: '发现音乐'
      }
    },
    created () {
      const html = document.documentElement
      function onWindowResize () {
        html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px'
      }
      window.addEventListener('resize', onWindowResize)
      onWindowResize()
    },
    mounted () {
    },
    components: {
    },
    methods: {
      demo: function () {
        console.log('ppp')
      }
    },
    watch: {
      selected: function (value) {
        if (value === '发现音乐') {
          this.$router.push({name: 'Discover'})
        } else if (value === '我的音乐') {
          this.$router.push({name: 'MyMusic'})
        } else if (value === '朋友') {
          this.$router.push({name: 'Friends'})
        } else {
          this.$router.push({name: 'Account'})
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #app,html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .full-container{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: scroll;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  .relative{
    position: relative;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background: #f44336;
    color: #ffffff;
  }
  .inline-block{
    display: inline-block;
  }
</style>
