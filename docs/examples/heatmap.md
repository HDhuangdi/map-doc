# 热力图

使用`map.addSource`和`map.addLayer`方法，添加`heatmap`图层，以实现热力图功能。

## 普通热力图
<demo-block>
::: slot source
<pages-examples-heatmap></pages-examples-heatmap>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/heatmap.vue
:::

</demo-block>

## 降雨量图
灵活调节样式，可以做出类似于等值线的效果，以下是杭州市主城区的降雨量等值线图：

<demo-block>
::: slot source
<pages-examples-rain-fall></pages-examples-rain-fall>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/rain-fall.vue
:::

</demo-block>

样式配置：

<<< @/docs/.vuepress/components/pages/examples/style.js

