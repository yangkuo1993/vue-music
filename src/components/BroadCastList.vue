<template>
    <div class="list-out-flex">
      <ul class="list-out-width">
        <li class="list-inline inline-32" v-for="(music,index) in emitArrayMusic" :class="[(index === 1 || index === 4) ? 'list-center-space' : '']">
          <div class="relative">
            <img class="list-inline-img" :src="music.coverImgUrl || music.picUrl" alt="">
            <p class="play-count">
              <img style="width: 12px;" src="../assets/song.svg" alt="">
              {{music.playCount | playCount}}</p>
            <!--<p class="music-describe">{{music.copywriter}}</p>-->
          </div>
          <p class="list-inline-p">{{music.name}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'broadCastList',
      props: {
        musicArray: {
          type: Array,
          required: true
        }
      },
      data () {
        return {}
      },
      computed: {
        emitArrayMusic () {
          return this.musicArray.slice(0, 6)
        }
      },
      filters: {
        playCount (data) {
          let backDataLength = parseInt(data).toString().length
          switch (backDataLength) {
            case 5:
              return data.toString().substring(0, 1) + '万'
            case 6:
              return data.toString().substring(0, 2) + '万'
            case 7:
              return data.toString().substring(0, 3) + '万'
            default:
              return data
          }
        }
      }
    }
</script>
<style scoped>
  .list-inline{
    display: inline-block;
    position: relative;
    vertical-align: top;
  }
  .inline-32{
    width: 32%;
  }
  .list-inline-img{
    width: 100%;
  }
  .list-center-space{
    margin: 0 2%;
  }
  .list-inline-p{
    margin: 0;
    font-size: 12px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .list-out-width{
    width: 100%;
  }
  .play-count{
    margin: 0;
    position: absolute;
    top: 0.2rem;
    font-size: 12px;
    color: #fff;
    right: 0.2rem;
  }
  .music-describe{
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    font-size: 12px;
  }
</style>
