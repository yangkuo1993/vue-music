<template>
  <div class="music">
    <div>
        <a class="list" href="">
            <div class="out">
                <div class="top">
                    <div class="name">{{info.name}}</div>
                    <div class="singer">
                      <i class="music-sq"></i>
                      <span v-if="musicType !== 'hot'">{{info.song.artists[0].name}}-{{info.name}}</span>
                      <span v-else>{{info.artists[0].name}}-{{info.name}}</span>
                    </div>
                </div>
                <div class="bottom">
                    <span class="music-pl"></span>
                </div>
            </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Music',
  props: {
    info: {
      type: Object,
      required: true
    },
    musicType: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
    display: flex;
    padding-left: 10px;
}
.list .out{
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    display: -webkit-box;
    display: flex;
    position: relative;
}
.out .top{
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 6px 0;
    width: 0;
}
.out::after{
    width: 200%;
    height: 200%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    position: absolute;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    border: 0 solid rgba(0,0,0,.1);
    border-bottom-width: 1px;
}
.top .name{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    font-size: 17px;
    color: #333333;
}
.top .singer{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    font-size: 12px;
    color: #888;
}
  .music-sq{
    display: inline-block;
    width: 12px;
    height: 8px;
    margin-right: 4px;
    background: url(../assets/index_icon_2x.png) no-repeat;
    background-size: 166px 97px;
  }
  .music-pl{
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(../assets/index_icon_2x.png) no-repeat;
    background-size: 166px 97px;
    background-position: -24px 0;
  }
  .bottom{
    display: -webkit-box;
    display: flex;
     -webkit-box-align: center;
    align-items: center;
    padding: 0 10px;
  }
</style>
