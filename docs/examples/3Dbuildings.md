# 街景

通过调用`map.addBuildings`API，并附上6张贴图，分别对应从低到高的建筑。

同时通过调整`options.vignetting`选项参数，已达到更加自然的效果。
::: tip
注意：贴图的大小必须为2的n次幂，比如：128×128、256×256，推荐分辨率较小的贴图。

以提高地图渲染性能，防止显存不够导致崩溃
:::
::: warning
并不是所有城市都有3D建筑资源，如需添加特定城市的资源，需联系地图引擎管理员。
:::

## 建筑白模
<demo-block>
::: slot source
<pages-examples-3Dbuildings></pages-examples-3Dbuildings>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/3Dbuildings.vue
:::

</demo-block>
 
## 贴图

<demo-block>
::: slot source
<pages-examples-3Dbuildings2></pages-examples-3Dbuildings2>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/3Dbuildings2.vue
:::

</demo-block>

## 可更改屋顶颜色
(渲染大量3D建筑时，可能会有所卡顿)

<demo-block>
::: slot source
<pages-examples-3Dbuildings3></pages-examples-3Dbuildings3>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/3Dbuildings3.vue
:::

</demo-block>

## 雪天场景
修改屋顶颜色 + 添加雪花天气，营造雪天场景。若同时修改样式配置中的图层绘制属性，效果会更加好。

<demo-block>
::: slot source
<pages-examples-3Dbuildings4></pages-examples-3Dbuildings4>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/3Dbuildings4.vue
:::

</demo-block>

样式配置：

<<< @/docs/.vuepress/components/pages/examples/style.js