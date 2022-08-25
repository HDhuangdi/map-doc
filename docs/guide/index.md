## 简介
本地图基于`WebGL1.0`打造，需运行在支持`WebGL`的浏览器、操作系统中。本教程推荐使用Chrome和Windows10+操作系统。

windows7操作系统需要进行设置才能启用浏览器的`WebGL`功能。

## 准备工作
强大的效果需要强大的硬件支持，流畅使用地图的设备需配备高性能GPU，推荐使用`GTX1660`型号及以上性能的GPU。

本教程使用`Vue.js`框架来进行演示，如果你还不熟悉`Vue.js`，可以点击[这里](https://cn.vuejs.org/v2/guide/)来进行学习。

## 安装
使用模块化：
```bash
npm i ark-map -S
```
## 使用
`import arkmap from "ark-map"`导入模块

`import "ark-map/dist/ark-map.css"` 导入样式

::: tip
在离开页面时，需要调用`map.destroy()` 销毁地图
:::

<demo-block>
::: slot source
<pages-guide-quick-start></pages-guide-quick-start>
:::


在离开页面时，需要调用`map.destroy()` 销毁地图

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/guide/quick-start.vue
:::

</demo-block>