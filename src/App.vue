<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
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
    },
    watch: {
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
    /*width: 100%;*/
    /*height: 100%;*/
    margin: 0;
    padding: 0;
    /*overflow: hidden;*/
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
