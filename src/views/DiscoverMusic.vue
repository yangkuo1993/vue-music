<template>
    <div class="full-container">
      <tab-choose-bar :liItems="menuList"></tab-choose-bar>
      <router-view></router-view>
    </div>
</template>

<script>
  import tabChooseBar from '@/components/tabChooseBar'
  export default {
    name: 'discoverMusic',
    data () {
      return {
        selected: '1',
        result: [],
        menuList: [
          {
            name: '个性推荐',
            id: 'meun-1'
          },
          {
            name: '歌单',
            id: 'meun-2'
          },
          {
            name: '主播电台',
            id: 'meun-3'
          },
          {
            name: '排行榜',
            id: 'meun-4'
          }
        ]
      }
    },
    components: {
      'tab-choose-bar': tabChooseBar
    }
  }
</script>
<style>

</style>
