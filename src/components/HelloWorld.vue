<template>
  <div class="hello">
    <button @click="getData">getData</button>
    <div v-for="(item, index) in list" :key="index">
      {{item.id}}
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [],
      id: 1
    }
  },
  created () {
    axios('/data/one').then(
      async res => {
        let list = res.data
        let arr = await Promise.all(list.map(i => this.getData(i)))
        this.list = arr
      }
    )
  },
  methods: {
    // async getData (i) {
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       let res = await axios({
    //         url: '/data/list',
    //         data: {
    //           i: i
    //         }
    //       })
    //       console.log('ttttt', res)
    //       resolve({
    //         ...i,
    //         id: res.id
    //       })
    //     } catch {
    //       resolve({
    //         ...i,
    //         id: ''
    //       })
    //     }
    //   })
    // }
    async getData (i) {
      try {
        let res = await axios({
          url: '/data/list',
          method: 'get', // 通常用于发送数据的请求使用 POST 方法
          data: {
            i: i // 注意：这里可能不是你想传递的，通常我们会传递一个对象或不同的参数名
          }
        })
        console.log('ttttt', res)
        // 注意：这里假设 res.data 包含了 id 属性，你需要根据实际情况修改
        return {
          ...i, // 注意：这里返回 i 的展开可能会包含你不需要的属性，确保这是你的意图
          id: res.data.id || this.id++ // 假设 id 在 res.data 中
        }
      } catch (error) {
        // console.error('获取数据出错：', error)
        // 如果出错，返回一个包含空 id 的对象，或者根据需要抛出错误
        return {
          ...i,
          id: ''
        }
        // 或者，如果你希望函数在出错时抛出异常而不是返回结果，可以使用 throw
        // throw new Error('获取数据出错');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
