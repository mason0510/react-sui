## React sui
以下为项目基本信息↓

### 技术栈

`React@16.10.1 + React-Router@5.1.1 + Redux@4.0.4 + Antd@3.23.5 + Axios@0.19.0`

> `Create React App`    脚手架工具快速搭建项目结构

> `react-loadable@5.5.0`    路由懒加载

> `react-redux@7.1.1`     配合 `Redux` 更舒心

> `animate.css@3.7.2`     页面动画展示

> `braft-editor@2.3.8`    富文本插件

> `echarts@4.4.0`   数据可视化

> `nprogress@0.2.0`     顶部加载条

> `screenfull@5.0.0`    全屏插件

> `prettier@1.18.2`    代码风格统一

### 基本功能

- [x] 路由懒加载
- [x] 面包屑导航
- [x] 常用 UI 展示
- [x] echarts 全屏展示
- [x] 登陆/注销功能
- [x] axios 封装
- [x] 简单权限管理

### 项目结构

```
├── public                   # 不参与编译的资源文件
├── src                      # 主程序目录
│   ├── api                     # axios 封装
│   ├── assets                  # 资源文件
│   │   ├── font                    # 字体文件
│   │   └── images                  # 图片资源
│   ├── components              # 全局公共组件
│   │   ├── CustomBreadcrumb        # 面包屑导航
│   │   └── CustomMenu              # menu 菜单
│   ├── contatiners             # 页面结构组件
│   ├── routes                  # 路由目录
│   ├── store                   # redux 配置
│   ├── style                   # 样式目录
│   ├── utils                   # 工具类
│   ├── views                   # UI 页面
│   ├── APP.js                  # App.js
│   └── index.js                # index.js
├── .prettierrc.js           # 代码规范
├── config-overrides.js      # antd 样式按需加载
```

### 使用方法

```npm

// 安装依赖
yarn

// 启动
yarn start

// 打包
yarn build

```

### 改造项目

### 增加钱包连接

vite使用
https://vitejs.dev/guide/
https://github.com/suiet/wallet-kit
https://github.com/MystenLabs/sui/blob/main/doc/src/explore/wallet-browser.md
https://github.com/suiet/wallet-adapter
https://kit.suiet.app/docs/QuickStart
https://1x.ant.design/docs/react/getting-started
https://ant.design/components/menu-cn#components-menu-demo-horizontal


import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import screenfull from 'screenfull'
class Index extends Component {
fullToggle = () => {
if (screenfull.isEnabled) {
screenfull.request(document.getElementById('bar'))
}
}
render() {
return (
<Layout className='index animated fadeIn'>
<div className='bar-header'>
<div>主要功能：抵押 债券 等方式一揽子的形式发行稳定币</div>
<Icon type='fullscreen' style={{ cursor: 'pointer' }} onClick={this.fullToggle} />
</div>
</Layout>
)
}
}

export default Index


问题:
1.
react版本为问题 官方是18的版本必须匹配
安装最新版本解决

2.加入组建后连接栏消失
获取🈷余额并且签名️

3.连接ui

4.动态宽高
width 0
height 1000
https://blog.csdn.net/weixin_34163741/article/details/94138922
