<template>
    <div>
      <router-link to="">
        <div class="title-broad">
          {{broadTitle}}
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'broadCastTitle',
    props: {
      titleName: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      }
    },
    data () {
      return {}
    },
    computed: {
      broadTitle () {
        return this.titleName
      }
    }
  }
</script>
<style>
  a{
    text-decoration: none;
  }
  .title-broad{
    position: relative;
    font-size: 16px;
    color: #333333;
    text-indent: 0.5rem;
    padding: 0.5rem;
    text-decoration: none;
  }
  .title-broad:before{
    content: '';
    position: absolute;
    width: 5px;
    height: 16px;
    background: #f44336;
    left: 0;
    top: 0.61rem;
  }
  .title-broad:after{
    content: '';
    position: absolute;
    width: 20px;
    height: 16px;
    background: url('../assets/right.svg');
    left: 85px;
    top: 0.61rem;
    background-size: 100%;
    background-repeat: no-repeat;
  }
</style>
