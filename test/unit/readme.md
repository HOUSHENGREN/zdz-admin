# 注意
## 使用官方例子跑单测有各种问题

1 localstorage 的问题
https://stackoverflow.com/questions/51554366/jest-securityerror-localstorage-is-not-available-for-opaque-origins

2 vm.$el.querySelector is not a function
https://github.com/vuejs-templates/webpack/issues/851

# 思路
参考 vue-admin 项目的配置

1 jest.conf.js 加配置
···
testURL: "http://localhost/",
··· 

2 安装低版本的 vue-test-utils
我试过高版本，有兼容问题
