<template>
    <div>
        <ul @click="clickUl">
            <li v-for="item in list" :key="item.id">{{item.name}}</li>
        </ul>
        <div class="home" @click.stop="clickOne">
            <div class="one" @click.stop="clickTwo">
                <div class="two" @click.stop="clickThree">inner</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        {
          id: 1,
          name: 1
        },
        {
          id: 2,
          name: 2
        },
        {
          id: 3,
          name: 3
        }
      ]
    }
  },
  mounted () {
    this.$http.get('https://cnodejs.org/api/v1/topics').then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    clickOne (event) {
      console.log(event.currentTarget)
    },
    clickTwo (event) {
      console.log(event.currentTarget)
    },
    clickThree (event) {
      console.log(event.currentTarget)
    },
    clickUl (event) {
      console.log(event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
        width: 100px;
        height: 100px;
        background: yellowgreen;
    }
    .one{
        width: 60px;
        height: 60px;
        background: blueviolet;
    }
    .two{
        width: 30px;
        height: 30px;
        background: darkorange;
    }
</style>
