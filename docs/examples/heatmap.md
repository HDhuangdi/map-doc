# 热力图

使用`map.addSource`和`map.addLayer`方法，添加`heatmap`图层，以实现热力图功能。

<demo-block>
::: slot source
<pages-examples-heatmap></pages-examples-heatmap>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/heatmap.vue
:::

</demo-block>

热力图数据(部分)：

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [87.5726, 43.8363],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "new_recovery": 3,
        "new_death": 0,
        "new_diagnosis": 0
      }
    },
    {
      "geometry": {
        "coordinates": [50.3, 26.1],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "new_recovery": 0,
        "new_death": 0,
        "new_diagnosis": 5
      }
    },
    ......
  ]
} 
```

样式配置：

<<< @/docs/.vuepress/components/pages/examples/style.js

