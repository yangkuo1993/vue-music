import Vue from 'vue'
import Tab from '@/components/Tab'

describe('Tab.vue', () => {
  // 检查组件名称
  it('check component name', (done) => {
    expect(Tab.name).to.equal('Tab')
    done()
  })
  // 检查组件方法对象
  it('check component methods object', (done) => {
    expect(Tab.methods).to.be.a('Object')
    done()
  })
  // 检查组件数据属性
  it('data format', (done) => {
    Tab.data().msg.should.equal('Welcome to Your Vue.js App')
    done()
  })
  // 检查dom
  it('dom demo', (done) => {
    const Ctor = Vue.extend(Tab)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).to.equal('推荐音乐 热歌榜 搜索')
    done()
  })
  // 检查方法
  it('check handleTabClick', (done) => {
    const Ctor = Vue.extend(Tab)
    const vm = new Ctor().$mount()
    vm.$el.querySelector('.van-tabs').click()
    done()
  })
})
