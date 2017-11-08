<template>
  <h2 class="title relative">
    {{this.name}}
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    font-size: 17px;
    font-weight: 400;
    margin: 0px 0 14px;
    padding-left: 9px;
    height: 20px;
    line-height: 20px;
}
.title::before{
  content: '';
  position: absolute;
  left: 0;
  top: 2px;
  height: 16px;
  width: 2px;
  background: #d33a31;
}
</style>
