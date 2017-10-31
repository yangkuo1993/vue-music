// import Vue from 'vue'
import home from '@/views/home'

describe('home.vue', () => {
  // 检查组件名称
  it('check component name', (done) => {
    expect(home.name).to.equal('home')
    done()
  })
  // 检查属性
  it('checkTab', (done) => {
    home.data().bar.should.equal(1)
    done()
  })
})
