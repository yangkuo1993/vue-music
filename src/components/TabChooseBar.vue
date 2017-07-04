<template>
    <div>
      <div class="search-div">
        <div class="search-inner-div">
          <input v-focus type="text" class="search-input" placeholder="搜索音乐、歌词、电台">
          <button class="right-bk"></button>
        </div>
      </div>
      <ul class="out-ul">
        <li v-for="(menu,index) in menuList" :key="menu.id"
            :class="[{'red-under-color': selectedMenu === menu.id}]"
            @click="chooseMenu(menu,index)">{{menu.name}}</li>
        <span class="under-line" :class="selectedMenu === 'meun-1' ?
        'under-line-transition1' : selectedMenu === 'meun-2' ?
         'under-line-transition2' : selectedMenu === 'meun-3' ?
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
          selectedMenu: this.$store.state.discover.chooseMenu,
          selectedIndex: 0
        }
      },
      methods: {
        chooseMenu: function (menu, index) {
          this.selectedMenu = menu.id
          this.selectedIndex = index
          this.$store.commit('GET_DISCOVER_TAB', this.selectedMenu)
        }
      },
      computed: {
        menuList: function () {
          return this.liItems
        }
      },
      directives: {
        focus: {
          // 指令的定义---
          inserted (el) {
            // 聚焦元素
            el.addEventListener('mouseenter', () => {
              console.log('focus')
              el.style.left = '2%'
              el.style.width = '78%'
            })
            el.addEventListener('mouseleave', () => {
              console.log('mouseleave')
              el.style.left = '20%'
              el.style.width = '60%'
            })
          }
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
    position: fixed;
    top: 2rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.77);
    z-index: 999;
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
    color: #f44336;
  }
  .under-line{
    height: 1px;
    border-top:1px solid #f44336;
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
  .search-div{
    height: 2rem;
    position: fixed;
    background: #f44336;
    width: 100%;
    z-index: 999;
  }
  .search-input{
    border: none;
    padding: 0;
    height: 1.5rem;
    width: 60%;
    border-radius: 2rem;
    background: url('../assets/search.svg') #ffffff no-repeat 0.7rem 50%;
    background-size: 1rem;
    font-size: 12px;
    line-height: 1.5rem;
    position: absolute;
    left: 20%;
    top: 0.25rem;
    transition: all .3s;
    text-indent: 1.7rem;
  }
  .search-inner-div{
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
  }
  .right-bk{
    height: 100%;
    width: 2rem;
    position: absolute;
    display: inline-block;
    right: 0;
    top: 0;
    line-height: 2rem;
    background: url("../assets/musicplay.svg") no-repeat 50%;
    border: none;
  }
</style>
