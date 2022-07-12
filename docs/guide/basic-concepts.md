# 基本概念

## Source
`Source`表示数据源，说明地图应显示哪些数据。使用属性指定源的类型，`Source.type`属性必须是`vector`、`raster`、`raster-dem`、`geojson`、`image`、`video`之一。

下面这个例子以`geojson`类型的`Source`为例，清晰的展示了`Source`的概念。

### 杭州的高速路：

<demo-block>
::: slot source
<pages-guide-geojson></pages-guide-geojson>
:::


在离开页面时，需要调用`map.destroy()` 销毁地图

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/guide/geojson.vue
:::

</demo-block>