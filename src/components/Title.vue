<template>
  <div class="title">
    {{this.name}}
  </div>
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

</style>
