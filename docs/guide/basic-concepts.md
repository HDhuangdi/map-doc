# 基本概念

## Source
`Source`表示数据源，说明地图应显示哪些数据。使用属性指定源的类型，`Source.type`属性必须是`vector`、`raster`、`raster-dem`、`geojson`、`image`、`video`之一。

下面这个例子以`geojson`类型的`Source`为例，清晰的展示了`Source`的概念。

#### 杭州的高速路：

<demo-block>
::: slot source
<pages-guide-geojson></pages-guide-geojson>
:::


在离开页面时，需要调用`map.destroy()` 销毁地图

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/guide/geojson.vue
:::

</demo-block>

## Layer
`Layer`表示图层，一张完整的地图是由非常多的图层组成的。

如道路、河流、湖泊可以为3个图层。但是为了不同的地图样式展现，同一个数据也可以不止一个图层来展现。如道路数据可以细分为3个图层：道路、隧道、桥梁。在样式配置中添加道路、隧道、桥梁的图层，可以将不同的道路展现在地图上。

在下面这个列子可以看到，所有的`Layer`数据都来自于`roads`，但是根据不同的属性，筛选出不同的道路，并且分为3个图层：道路、隧道、桥梁。

#### Layer示例
```js
const layers = [
  // 高速路
  {
    type: "line",
    source: "composite",
    filter: ["all", ["==", "fclass", "motorway"]], // 筛选出高速路
    id: "motorway",
    paint: {...},
    "source-layer": "roads",
  },
  // 桥梁
  {
    type: "line",
    source: "composite",
    filter: ["all", ["==", "bridge", "T"]], // 筛选出桥梁
    id: "bridge",
    paint: {...},
    "source-layer": "roads",
  },
  // 隧道
  {
    type: "line",
    source: "composite",
    filter: ["all", ["==", "tunnel", "T"]], // 筛选出隧道
    id: "tunnel",
    paint: {...},
    "source-layer": "roads",
  },
]
```