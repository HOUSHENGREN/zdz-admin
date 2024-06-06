import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
// 在你的测试文件顶部  
import 'jest-localstorage-mock';
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
