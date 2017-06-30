<template>
    <div>
      <ul class="out-ul">
        <li v-for="(menu,index) in menuList" :key="menu.id"
            :class="[{'red-under-color': selectedMenu === menu.id}]"
            @click="chooseMenu(menu,index)">{{menu.name}}</li>
        <span class="under-line" :class="selectedIndex === 0 ?
        'under-line-transition1' : selectedIndex === 1 ?
         'under-line-transition2' : selectedIndex === 2 ?
          'under-line-transition3' : 'under-line-transition4' "></span>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'tabChooseBar',
      props: {
        liItems: {
          type: Array,
          required: true
        }
      },
      data () {
        return {
          selectedMenu: 'meun-1',
          selectedIndex: 0
        }
      },
      methods: {
        chooseMenu: function (menu, index) {
          this.selectedMenu = menu.id
          this.selectedIndex = index
        }
      },
      computed: {
        menuList: function () {
          return this.liItems
        }
      }
    }
</script>
<style scoped>
  .out-ul{
    height: 2.05rem;
    white-space: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .out-ul li{
    display: inline-block;
    font-size: 16px;
    width: 25%;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
  }
  .red-under-color{
    color: red;
  }
  .under-line{
    height: 1px;
    background: red;
    width: 25%;
    position: absolute;
    bottom: 0;
    left: 0%;
    transition: transform .3s,-webkit-transform .3s;
  }
  .under-line-transition1{
    transform: translate3d(0%, 0px, 0px);
  }
  .under-line-transition2{
    transform: translate3d(100%, 0px, 0px);
  }
  .under-line-transition3{
    transform: translate3d(200%, 0px, 0px);
  }
  .under-line-transition4{
    transform: translate3d(300%, 0px, 0px);
  }
</style>
