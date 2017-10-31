<template>
  <div class="tab">
    <van-tabs @click="handleTabClick">
        <van-tab class="van-tabs" title="推荐音乐">推荐音乐</van-tab>
        <van-tab title="热歌榜">热歌榜</van-tab>
        <van-tab title="搜索">搜索</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.component(Tab.name, Tab)
Vue.component(Tabs.name, Tabs)
export default {
  name: 'Tab',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleTabClick (index) {
      this.$emit('handleTabClick', index)
      this.$emit('update:foo', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
