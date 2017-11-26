<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html,body{
    width: 100%;
    overflow-x: hidden;
  }
body{
  color: #333;
}
.relative{
  position: relative
}
</style>
