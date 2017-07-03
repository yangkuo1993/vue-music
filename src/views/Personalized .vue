<template>
    <div>
      <Banner></Banner>
      <div class="out-flex">
        <div class="inline-block inline-33">
            <div class="round-type">
              <img src="../assets/radio.svg">
            </div>
            <p class="round-type-p">私人FM</p>
        </div>
        <div class="inline-block inline-34">
            <div class="round-type">
              <img src="../assets/personalized.svg">
            </div>
            <p class="round-type-p">开启个性推荐</p>
        </div>
        <div class="inline-block inline-33">
            <div class="round-type">
              <img src="../assets/rankingList.svg">
            </div>
            <p class="round-type-p">云音乐热歌榜</p>
        </div>
      </div>
      <broad-cast-title titleName="推荐歌单" path="123"></broad-cast-title>
      <broad-cast-list :musicArray="musicPersonalized"></broad-cast-list>
      <broad-cast-title titleName="独家放送" path="123"></broad-cast-title>
      <mv-list :mvList="privateMv" :exclusive="true"></mv-list>
      <broad-cast-title titleName="最新音乐" path="123"></broad-cast-title>
      <broad-cast-list :musicArray="newMusicList"></broad-cast-list>
      <broad-cast-title titleName="推荐MV" path="123"></broad-cast-title>
      <mv-list :mvList="personalizedMV" :exclusive="false"></mv-list>
      <broad-cast-title titleName="精选专栏" path="123"></broad-cast-title>
      <broad-cast-list :musicArray="musicBoutique"></broad-cast-list>
    </div>
</template>

<script>
  import banner from '../components/banner'
  import broadCastTitle from '../components/broadCastTitle'
  import broadCastList from '../components/broadCastList'
  import mvList from '../components/mvList'
  export default {
    name: 'personalRecommend',
    data () {
      return {
        // 精选专栏
        musicBoutique: [],
        // 推荐歌单
        musicPersonalized: [],
        // 独家放送
        privateMv: [],
        // 最新音乐
        newMusicList: [],
        // 推荐MV
        personalizedMV: []
      }
    },
    components: {
      'Banner': banner,
      'broad-cast-title': broadCastTitle,
      'broad-cast-list': broadCastList,
      'mv-list': mvList
    },
    created () {
      this.$store.dispatch('GET_BOUTIQUE_MUSIC').then((data) => {
        this.musicBoutique = data.playlists
      }).catch((error) => {
        console.log(error)
      })
      this.$store.dispatch('MUSIC_PERSONALIZED').then((data) => {
        this.musicPersonalized = data.result
      }).catch((error) => {
        console.log(error)
      })
      this.$store.dispatch('PRIVATE_CONTENT').then((data) => {
        this.privateMv = data.result
      }).catch((error) => {
        console.log(error)
      })
      this.$store.dispatch('NEW_MUSIC_ALBUM').then((data) => {
        this.newMusicList = data.albums
      }).catch((error) => {
        console.log(error)
      })
      this.$store.dispatch('PERSONALIZED_MV').then((data) => {
        this.personalizedMV = data.result
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>
<style>
   .inline-33{
     width: 33%;
     text-align: center;
   }
   .inline-34{
     width: 34%;
     text-align: center;
   }
    .round-type{
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 1.7rem;
      border: 0.05rem solid red;
      text-align: center;
      font-size: 16px;
      overflow: hidden;
      display: inline-block;
    }
   .round-type-p{
     margin: 0.5rem 0;
     font-size: 12px;
   }
  .round-type img{
    width: 2rem;
    margin-top: 0.7rem;
  }
  .out-round-width{
    width: 3.4rem;
    text-align: center;
    margin: auto;
  }
  .out-flex{
    display: -webkit-box;
    display: flex;
    display: -ms-flex;
    display: -webkit-flex;
    padding: 1rem 0;
    border-bottom: 1px solid #f3f3f3;
  }
</style>
