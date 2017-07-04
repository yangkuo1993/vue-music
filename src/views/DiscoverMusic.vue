<template>
    <div class="full-container">
      <mt-tabbar v-model="selected" style="z-index: 999;background: #f44336;position: fixed;
    bottom: 0;">
        <mt-tab-item id="发现音乐">
          <img slot="icon" src="../assets/discover.svg">
          发现音乐
        </mt-tab-item>
        <mt-tab-item id="我的音乐">
          <img slot="icon" src="../assets/mymusic.svg">
          我的音乐
        </mt-tab-item>
        <mt-tab-item id="朋友">
          <img slot="icon" src="../assets/friends.svg">
          朋友
        </mt-tab-item>
        <mt-tab-item id="账号">
          <img slot="icon" src="../assets/count.svg">
          账号
        </mt-tab-item>
      </mt-tabbar>
      <mt-tab-container class="full-container" v-model="selected">
        <mt-tab-container-item id="发现音乐">
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
        </mt-tab-container-item>
        <mt-tab-container-item id="我的音乐">
          ffff
        </mt-tab-container-item>
        <mt-tab-container-item id="朋友">
          ffvvvv
        </mt-tab-container-item>
        <mt-tab-container-item id="账号">
          5555
        </mt-tab-container-item>
      </mt-tab-container>
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
        ],
        selected: '发现音乐'
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
