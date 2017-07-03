<template>
    <div>
      <ul>
        <li class="mv-list" v-for="(mv,index) in mvList" :class="[index === 0 ? 'wd-50' : index === 1 ? 'margin-left-1 wd-49' : 'img-with']">
          <div class="relative">
            <img class="img-with" :src="mv.picUrl" alt="">
            <div class="mv-bk"></div>
          </div>
          <p class="mv-describe">{{mv.name}}</p>
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
  }
  .img-with{
    width: 100%;
  }
  .wd-50{
    width: 50%;
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
  .margin-left-1{
    margin-left: 1%;
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
</style>
