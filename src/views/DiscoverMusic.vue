<template>
    <div class="full-container">
      <tab-choose-bar :liItems="menuList"></tab-choose-bar>
      <div class="tab-container-top">
        <div v-show="chooseMenu === 'meun-1'">
          <personal-recommend></personal-recommend>
        </div>
        <div v-show="chooseMenu === 'meun-2'">
          <song-list></song-list>
        </div>
        <div v-show="chooseMenu === 'meun-3'">
          <broad-cast></broad-cast>
        </div>
        <div v-show="chooseMenu === 'meun-4'">
          <rank-list></rank-list>
        </div>
      </div>
    </div>
</template>

<script>
  import tabChooseBar from '@/components/tabChooseBar'
  import personalized from './Personalized .vue'
  import songList from './SongList.vue'
  import broadCast from './BroadCast.vue'
  import rankList from './RankingList.vue'
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
    created () {
    },
    components: {
      'tab-choose-bar': tabChooseBar,
      'personal-recommend': personalized,
      'song-list': songList,
      'broad-cast': broadCast,
      'rank-list': rankList
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
    margin-top: 4rem;
    margin-bottom: 55px;
  }
</style>
