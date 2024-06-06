import HelloWorld from '@/components/HelloWorld'
import { shallowMount } from '@vue/test-utils'

// 在你的测试文件顶部
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        iconClass: 'test'
      }
    })
    expect(wrapper.find('h1').text()).toEqual('Welcome to Your Vue.js App')
  })
})
