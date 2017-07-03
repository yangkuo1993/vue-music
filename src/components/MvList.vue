<template>
    <div>
      <ul>
        <li v-show="exclusive" class="mv-list" v-for="(mv,index) in mvList" :class="[index === 0 ? 'wd-50' : index === 1 ? 'wd-50 margin-left-2' : 'img-with']">
          <div class="relative">
            <img class="img-with" v-lazy="mv.picUrl" alt="">
            <div class="mv-bk"></div>
          </div>
          <p class="mv-describe">{{mv.name}}</p>
        </li>
        <li v-show="!exclusive" class="mv-list wd-50" v-for="(mv,index) in mvList" :class="[index%2 !== 0 ? 'margin-left-2' : '']">
          <div class="relative">
            <img class="img-with" v-lazy="mv.picUrl" alt="">
            <p class="mv-play-count">
              <img style="width: 12px" src="../assets/mv.svg" alt="">
              {{mv.playCount}}
            </p>
          </div>
          <p class="mv-one-describe">{{mv.name}}</p>
          <p class="mv-one-describe" style="color: rgb(160, 160, 160)">{{mv.artistName}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'mvList',
      props: {
        mvList: {
          type: Array,
          required: true
        },
        exclusive: {
          type: Boolean,
          required: true
        }
      },
      data () {
        return {}
      }
    }
</script>
<style scoped>
  .mv-list{
    display: inline-block;
    vertical-align: top;
  }
  .img-with{
    width: 100%;
  }
  .wd-50{
    width: 50%;
    width:-moz-calc(50% - 1px);
    width:-webkit-calc(50% - 1px);
    width: calc(50% - 1px);
  }
  .wd-49{
    width: 49%;
    vertical-align: top;
  }
  .mv-describe{
    margin: 0;
    font-size: 12px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .mv-one-describe{
    margin: 0;
    font-size: 12px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .margin-left-2{
    margin-left: 2px;
  }
  .mv-bk{
    width: 1rem;
    height: 1rem;
    border: 1px solid #fff;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    border-radius: 0.5rem;
    background: url("../assets/mv.svg") no-repeat 50%;
    background-size: 80%;
  }
  .mv-play-count{
    margin: 0;
    position: absolute;
    top: 0.2rem;
    font-size: 12px;
    color: #fff;
    right: 0.2rem;
  }
</style>
