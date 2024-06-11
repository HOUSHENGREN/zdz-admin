// import Mock from 'mockjs'

// // 定义一个数据数组
// const dataArray = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
//   { id: 3, name: 'Item 3' }
//   // ... 更多数据
// ]

// // 使用 Mock.js 模拟 GET 请求
// Mock.mock('/data/list', 'get', () => {
//   // 生成一个 0 到 dataArray.length-1 之间的随机索引
//   const index = Math.floor(Math.random() * dataArray.length)
//   if (index === 2) {
//     return {
//       code: '404'
//     }
//   }
//   // 返回数组中的对应数据
//   return dataArray[index]
// })

const Mock = require('mockjs')

// 假设我们有一个模拟超时的阈值（毫秒）
const TIMEOUT_THRESHOLD = 2000 // 2秒
let callCount = 0 // 记录接口被调用的次数

// 自定义模拟函数
Mock.mock('/data/list', 'get', (req, res) => {
  callCount++

  // 使用 Promise 来模拟异步操作和可能的超时
  return new Promise((resolve, reject) => {
    // 设定一个随机延迟时间
    const delayTime = Math.random() * 5000 // 随机0到5秒
    console.log('time', delayTime, delayTime > TIMEOUT_THRESHOLD)

    // 使用 setTimeout 来模拟请求处理时间
    setTimeout(() => {
      if (delayTime > TIMEOUT_THRESHOLD) {
        // 如果延迟时间超过了超时阈值，则拒绝 Promise 来模拟超时
        reject(new Error('Request timeout'))
      } else {
        // 否则，解析 Promise 并返回模拟数据
        const data = Mock.mock({
          // 'id': 22
          bb: 5,
          'id': Mock.Random.id(),
          'content': '@csentence'
        })
        resolve(data)
      }
      console.log('delayTime', delayTime)
    }, delayTime)
  })
})

Mock.mock('/data/one', 'get', Mock.mock([
  {
    id: '12'
  },
  {
    id: '11'
  },
  {
    id: '13'
  },
  {
    id: '14'
  },
  {
    id: '15'
  }
]))
