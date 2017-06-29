<template>
    <div>
      home
      <Hello></Hello>
    </div>
</template>

<script>
  import hello from '@/components/hello'
  export default {
    name: 'home',
    data () {
      return {}
    },
    mounted () {
      console.log(this.$store.state.user.hotMusicList)
    },
    components: {
      Hello: hello
    }
  }
</script>
<style>

</style>
