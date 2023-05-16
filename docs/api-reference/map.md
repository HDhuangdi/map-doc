# 构造配置

`Map`对象代表你页面上的地图。你以编程方式更改地图的方法和属性，并在用户与其交互时触发事件。
```js
new Map(options: MapOptions)
```

## 参数
|  名称   | 类型  | 默认值  | 描述  |
|  ----  | ---- | ----  | ----  |
| **qualityPreset** | string | 'default' | 画面质量预设。可选值：low（低质量）, high（高质量）, default（默认）|
| **bearing** | number | 0 | 地图旋转角度。如果在构造函数中没有指定，地图会从样式对象中寻找，如果还没有找到，就赋值为0 |
| **bearingSnap** | number| 7 | 地图旋转角度矫正阈值。假如设置为7，则用户将地图旋转到正北`bearing: ±7`时，地图会自动归正为正北`bearing:0` |
| **pitch** | number| 0 | 地图的俯仰角 |
| **pitchWithRotate** | boolean| true | 开启拖拽改变俯仰角 |
| **zoom** | number| 0 | 地图缩放值 |
| **scrollZoom** | boolean| true | 开启滚动改变缩放值 |
| **bounds** | LngLatBoundsLike | LngLatBoundsLike | 地图的初始边界。如果指定了边界，它将覆盖`center`和`zoom`。 |
| **center** | [number, number]| [0, 0] | 地图的初始经纬度。如果构造函数选项中没有指定`center`，地图将在样式对象中寻找它 |
| **container** | string \| HTMLElement| '' | 地图容器。可以为HTML元素，也可以是元素id |
| **cooperativeGestures** | boolean| false | 开启按住ctrl或者⌘才能进行缩放 |
| **doubleClickZoom** | boolean| true | 开启双击缩放 |
| **dragPan** | boolean| true | 开启拖动平移 |
| **dragRotate** | boolean| true | 开启拖动旋转 |
| **fadeDuration** | number| 300 | 控制标签碰撞的淡入/淡出动画的持续时间（毫秒） |
| **hash** | boolean| false | 开启url hash来存储地图视角信息，比如`http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60` |
| **interactive** | boolean| true | 如果为`false`，则地图上不会监听鼠标、触摸或键盘事件，因此不会对交互做出响应 |
| **maxBounds**| LngLatBoundsLike | null | 如果设置，地图的视角将被约束到给定的边界 |
| **maxPitch** | number| 85 | 最大俯仰角 |
| **maxZoom**| number | 22 | 最大缩放值 |
| **minPitch** | number| 85 | 最小俯仰角 |
| **minZoom**| number | 22 | 最小缩放值 |
| **style**| any | {} | 样式对象，详见[样式规范](https://docs.mapbox.com/mapbox-gl-js/style-spec/) |
| **passiveRendering**| boolean | false | 是否开启被动渲染。若配置为`true`，则不会实时渲染动态效果，以节约GPU资源 |
| **fps** | number| 60 | 锁帧配置，单位：每秒帧数 |
| **sourceDebug** | boolean| false | 开启source日志 |
| **stageAntialias** | boolean| true | 是否开启抗锯齿 |
| **offscreenAntialias**| boolean | true | 离屏图层是否开启抗锯齿 |
| **buildingAntialias** | boolean| false | 建筑图层是否开启抗锯齿 |

## 示例

<demo-block>
::: slot source
<pages-api-reference-map></pages-api-reference-map>
:::


在离开页面时，需要调用`map.destroy()` 销毁地图

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/api-reference/map.vue
:::

</demo-block>