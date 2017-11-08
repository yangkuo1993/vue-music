<template>
  <div class="music">
    <div>
        <a class="list" href="">
            <div class="out">
                <div class="top">
                    <div class="name">{{info.name}}</div>
                    <div class="singer">
                        {{info.song.artists[0].name}}-{{info.name}}
                    </div>
                </div>
                <div>
                    <span></span>
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
    width: 100%;
    height: 100%;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    border: 0 solid rgba(0,0,0,.1);
}
.top .name{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    font-size: 17px;
}
.top .singer{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    font-size: 12px;
    color: #888;
}
</style>
