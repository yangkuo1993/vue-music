<template>
    <div class="full-container">
      <tab-choose-bar :liItems="menuList"></tab-choose-bar>
      <div class="tab-container-top">
        <div v-show="chooseMenu === 'meun-1'">1</div>
        <div v-show="chooseMenu === 'meun-2'">2</div>
        <div v-show="chooseMenu === 'meun-3'">3</div>
        <div v-show="chooseMenu === 'meun-4'">4</div>
      </div>
    </div>
</template>

<script>
  import tabChooseBar from '@/components/tabChooseBar'
  export default {
    name: 'discoverMusic',
    data () {
      return {
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
    },
    computed: {
      chooseMenu: function () {
        return this.$store.state.discover.chooseMenu
      }
    }
  }
</script>
<style>
  .tab-container-top{
    margin-top: 2.05rem;
  }
</style>
