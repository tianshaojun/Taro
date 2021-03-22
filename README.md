# Taro

### 1.Taro框架简介

![](https://github.com/tianshaojun/Taro/blob/master/md_img/taro001.jpg)

#### Taro支持的终端

+ 微信小程序
+ H5移动端Web页面
+ 百度小程序
+ 支付宝小程序
+ 快应用
+ ReactNative
+ 字节跳动小程序
+ QQ轻应用

### 2.Taro开发环境的搭建

+ Taro开发环境的安装
     1. npm的安装方式    npm install -g @tarojs/cli
     2. yarn的安装方式   yarn global add @tarojs/cli
+ 用脚手架创建项目  taro init myDemo1
+ 启动项目  yarn dev:h5

### 3.Taro生成小程序代码

+ yarn dev:weapp

### 4.Taro目录介绍

```
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index 页面目录
|   |   |   ├── index.js   index 页面逻辑
|   |   |   └── index.css  index 页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```

### 5.Taro使用React Hooks新特性

### 6.Taro中子组件的编写和传值

### 7.Taro路由配置介绍

+ navigateTo: 最基本的跳转方式，可以返回上级页面。三端都支持的，小程序、H5、React Native。
+ redirectTo：不记录上级页面，直接跳转。三端都支持的，小程序、H5、React Native。
+ switchTab： Tab之间进行切换，这个要配合Taro的导航栏一起使用，三端都支持的，小程序、H5、React Native。
+ navigateBack: 返回上一级页面，这个在小程序中常使用，三端都支持的，小程序、H5、React Native。
+ relaunch：关闭所有页面，打开到应用内某个页面。三端都支持的，小程序、H5、React Native。
+ getCurrentPages:获取当前页面信息所用，这个H5是不支持的。(注意)

### 8.Taro页面间传递参数









