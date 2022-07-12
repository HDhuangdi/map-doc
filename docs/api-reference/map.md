# Map

`Map`对象代表你页面上的地图。你以编程方式更改地图的方法和属性，并在用户与其交互时触发事件。
```js
new Map(options: Object)
```

## 参数
|  名称   | 默认值  | 描述  |
|  ----  | ----  | ----  |
| **antialias** | true | 开启抗锯齿 |
| **bearing** | 0 | 地图旋转角度。如果在构造函数中没有指定，地图会从样式对象中寻找，如果还没有找到，就赋值为0 |
| **bearingSnap** | 7 | 地图旋转角度矫正阈值。假如设置为7，则用户将地图旋转到正北`bearing: ±7`时，地图会自动归正为正北`bearing:0` |
| **pitch** | 0 | 地图的俯仰角 |
| **pitchWithRotate** | true | 开启拖拽改变俯仰角 |
| **zoom** | 0 | 地图缩放值 |
| **scrollZoom** | true | 开启滚动改变缩放值 |
| **bounds** | LngLatBoundsLike | 地图的初始边界。如果指定了边界，它将覆盖`center`和`zoom`。 |
| **center** | [0, 0] | 地图的初始经纬度。如果构造函数选项中没有指定`center`，地图将在样式对象中寻找它 |
| **container** | '' | 地图容器。可以为HTML元素，也可以是元素id |
| **cooperativeGestures** | false | 开启按住ctrl或者⌘才能进行缩放 |
| **doubleClickZoom** | true | 开启双击缩放 |
| **dragPan** | true | 开启拖动平移 |
| **dragRotate** | true | 开启拖动旋转 |
| **fadeDuration** | 300 | 控制标签碰撞的淡入/淡出动画的持续时间（毫秒） |
| **hash** | false | 开启url hash来存储地图视角信息，比如`http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60` |
| **interactive** | true | 如果为`false`，则地图上不会监听鼠标、触摸或键盘事件，因此不会对交互做出响应 |
| **maxBounds** | null | 如果设置，地图的视角将被约束到给定的边界 |
| **maxPitch** | 85 | 最大俯仰角 |
| **maxZoom** | 22 | 最大缩放值 |
| **minPitch** | 85 | 最小俯仰角 |
| **minZoom** | 22 | 最小缩放值 |
| **style** | {} | 样式对象，详见[样式规范](/style-specification/) |
| **vignetting** | {<br/>enable: false, <br/>lightHeight: 250, <br/>lightColor: 0xffffff, <br/>strength: 2<br/>} | 暗角配置。enable: 是否启用，lightHeight: 光源高度，lightColor:光源颜色，strength: 光源强度|

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