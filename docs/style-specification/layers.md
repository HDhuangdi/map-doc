---
sidebarDepth: 2
---

# Layers
图层属性列出了该样式中可用的所有图层。图层的类型由`type`属性指定，并且必须是`background`、`fill`、`line`、`symbol`、`raster`、`circle`、` fill-extrusion`、`heatmap`、`hillshade`、`sky`、`building`之一。

除了背景或天空类型的图层之外，每个图层都必须引用一个源。层从源获取数据，可选择过滤一部分要素，然后定义这些要素的样式。

## Layer 属性

### id
唯一的图层id。

### type
图层的类型，必须是`background`、`fill`、`line`、`symbol`、`raster`、`circle`、` fill-extrusion`、`heatmap`、`hillshade`、`sky`、`building`之一。

#### fill
可描边边界的填充多边形。

#### line
可描边的线条。

#### symbol
icon或者文字。

#### circle
可填充的圆形。

#### heatmap
热力图。

#### fill-extrusion
挤压3D几何体。

#### raster
栅格图片。

#### hillshade
基于 DEM 数据的客户端山形可视化。

#### background
地图背景色或纹理填充。

#### sky
天空。

### filter
指定源要素条件的表达式。仅显示与过滤器匹配的要素。筛选器表达式中不支持["feature state"，…]表达式。`symbol`层上的过滤器表达式支持["pitch"]和["distance from center"]表达式。

### layout
布局属性。

### maxzoom
图层的最大缩放级别。当缩放级别等于或大于最大缩放时，层将被隐藏。

### metadata
元数据。

### minzoom
图层的最小缩放级别。当缩放级别等于或小于最小缩放时，层将被隐藏。

### paint
绘制属性。

### source
使用的是哪个源。

### source-layer
要从矢量瓦片源使用的层。只有矢量瓦片源需要；禁止用于所有其他源类型，包括GeoJSON源。

## background
背景样式层覆盖整个地图。使用背景样式层配置颜色或图案，以显示在所有其他地图内容下方。如果背景图层是透明的或为空，则地图视图中不显示其他样式图层的任何部分都是透明的。

### background-color
*paint属性。颜色类型。默认为"#000000"。若使用了`background-pattern`则此属性无效。支持插入表达式。可转换。*

绘制背景时使用的颜色。

### background-opacity
*绘图属性。数字类型。可选数字介于0和1之间。默认值为1。支持插入表达式。可转换。*

绘制背景时的透明度。

### background-pattern
*绘图属性。图像类型。可转换。*

用于绘制图像背景的精灵中图像的名称。对于无缝图案，图像宽度和高度必须是2的幂（2、4、8…、512）。

### visibility
*布局属性。枚举类型。可选枚举。`visible`、`none`之一。默认为`visible`。*

是否显示此层。
- `visible`: 显示
- `none`: 不显示

## fill
在地图上呈现一个或多个可填充多边形。

### fill-antialias
*绘制属性。布尔值类型。默认为 `true`。*

填充是否应该进行抗锯齿处理。

### fill-color
*绘制属性。颜色类型。默认为"#000000"。若使用了`fill-pattern`则此属性无效。支持`feature-state`和插值表达式。可过渡。*

此层的填充部分的颜色。这种颜色可以指定为带有 alpha 分量的 rgba，如果使用的话，颜色的透明度不会影响1px描边的透明度。

### fill-opacity
*绘图属性。数字类型。可选的数字在0到1之间。默认为1。支持`feature-state`和插值表达式。可过渡。*

整个填充层的不透明度。如果使用`fill-color`，则此值还将影响填充周围的1px描边。

### fill-outline-color
*绘图属性。颜色类型。若使用了`fill-color`则此属性无效。要求`fill-antialias`为`true`。支持`feature-state`和插值表达式。可过渡。*

填充的轮廓颜色。如果未指定，则匹配`fill-color`的值。

### fill-pattern
*绘图属性。图像类型。可转换。*

用于绘制图像填充的精灵图像的名称。对于无缝图案，图像的宽度和高度必须是2的幂(2,4,8，... ，512)

### fill-sort-key
*布局属性。数字类型。*

基于此值按升序对要素排序。排序键较高的要素将显示在排序键较低的要素上方。

### fill-translate
*绘制特性。数组类型。可选的数字数组。单位px。默认为[0,0]。支持插值表达式。可转换。*

几何的偏移。值为[x，y]，其中负值分别表示向左和向上。

### fill-translate-anchor
*绘制属性。枚举类型。`map`，`viewport`。默认为`map`。需要`fill-translate`。*

控制填充偏移的中心点。
- `map`填充是相对于地图偏移的。
- `viewport`填充是相对于视角偏移的。

### visibility
*布局属性。枚举类型。可选枚举。`visible`、`none`之一。默认为`visible`。*

是否显示此层。
- `visible`: 显示
- `none`: 不显示

## line
在地图上呈现一条或多条描边的折线。

### line-blur
*绘制属性。数字类型。大于或等于0的数字。以像素为单位。默认值为0。支持`feature-state`和插值表达式。可转换。*

线模糊，单位px。

### line-cap
*布局属性。枚举类型。一个`butt`，`round`，`square`。默认为`butt`。*

- `butt`: 直线的端点以方形绘制。
- `round`: 直线的端点以圆形绘制。
- `square`: 直线的端点以菱形绘制。

### line-color
*绘制属性。颜色类型。默认为#000000。若使用了`line-pattern`则此属性无效。支持`feature-state`和插值表达式。可过渡。*

线条颜色。

### line-dasharray
*绘制属性。数组类型。若使用了`line-pattern`则此属性无效。可转换。*

虚线配置，数组两个值代表实线的比例和虚线的比例。

### line-gap-width
*绘制属性。数字类型。大于或等于0的数字。以像素为单位。默认值为0。支持`feature-state`和插值表达式。可转换。*

在线的实际路径外绘制线框。值指示内部间隙的宽度。

### line-gradient
*绘制属性。颜色类型。可选颜色。若使用了`line-pattern`则此属性无效。要求源为geojson。支持插值表达式。*

线条的渐变色。

### line-join
*布局属性。枚举类型。一个`bevel`，`round`，`miter`。默认为`bevel`。*

两线交汇处的样式。

- `bevel`: 方形交汇。
- `round`: 圆形交汇。
- `miter`: 锐角交汇。

### line-miter-limit
*布局属性。数字类型。默认值为2。要求`line-join`为`miter`。支持插值表达式。*

锐角交汇的自动处理限制。

### line-offset
*绘制属性。数字类型。单位px。默认为0。支持`feature-state`和插值表达式。可转换。*

线偏移。正值相对于线的方向偏移到右边，负值相对于左边。

### line-opacity
*绘图属性。数字类型。可选的数字在0到1之间。默认为1。支持`feature-state`和插值表达式。可转换。*

线的透明度。

### line-pattern
*绘图属性。图像类型。可转换。*

要用于绘制图像线的精灵图的名称。对于无缝图案，图像宽度必须是2的幂（2、4、8、…、512）。

### line-round-limit
*布局属性。数字类型。默认为1.05。要求`line-join`为`round`。支持插入表达式。*

圆形交汇的自动处理限制。

### line-sort-key
*布局属性。数字类型。*

基于此值按升序对要素排序。排序键较高的要素将显示在排序键较低的要素上方。

### line-translate
*绘制属性。数组类型。像素单位。默认为[0,0]。支持插值表达式。可转换。*

几何的偏移量。值是[ x，y ] ，其中负值分别表示向左和向上。

### line-translate-anchor
*绘制属性。枚举类型。一个`map`，`viewport`。默认为`map`。需要`line-translate`。*

偏移中心点。

- `map`: 相对于地图进行偏移。
- `viewport`: 相对于视角进行偏移。

### line-trim-offset
*绘制属性。数组类型，包括00和11之间的数字。默认为[0,0]。要求源为geojson。*

在[trim-start, trim-end]之间的线部分将被绘制为透明。

### line-width
*绘制属性。数字类型。大于或等于0的可选数。以像素为单位。默认值为1。支持`feature-state`和插值表达式。过渡期。*

线宽。

## symbol
在地图呈现图标和文本标签。

### icon-allow-overlap
*布局属性。布尔值类型。默认为`false`。需要`icon-image`。*

如果为真，即使图标与之前绘制的其他符号相冲突，图标也将是可见的。

### icon-anchor
*布局属性。枚举值类型。`center`、`left`、`right`、`top`、`bottom`、`top-left`、`top-right`、`bottom-left`、`bottom-right`，默认为`center`。需要`icon-image`。*

图表的锚点。
- `center`: 锚点在图标中心。
- `left`: 锚点在图标左侧。
- `right`: 锚点在图标右侧。
- `top`: 锚点在图标上方。
- `bottom`: 锚点在图标下方。
- `top-left`: 锚点在图标左上。
- `top-right`: 锚点在图标右上。
- `bottom-left`: 锚点在图标左下。
- `bottom-right`: 锚点在图标右下。

### icon-color
*绘制属性。颜色类型。默认为#000000。支持`feature-state`和插值表达式。可过渡。需要`icon-image`。*

图标的颜色。这只能用于 SDF 图标。

### icon-halo-blur
*绘制属性。数字类型。大于或等于0的可选数字。单位为像素。默认为0。需要`icon-image`。支持`feature-state`和插值表达式。可转换。*

向外淡出光晕。

### icon-halo-color
*绘制属性。颜色类型。默认为rgba(0, 0, 0, 0)。需要`icon-image`。支持`feature-state`和插值表达式。可转换。*

图标光晕的颜色。这只能用于 SDF 图标。

### icon-halo-width
*绘制属性。颜色类型。大于或等于0的可选数。以像素为单位。默认值为0。需要`icon-image`。支持`feature-state`和插值表达式。可转换。*

光晕宽度。

### icon-ignore-placement
*绘制属性。布尔类型。默认为 false。需要`icon-image`。*

如果为真，则其他符号即使与图标冲突也可以看到。

### icon-image
*布局属性，图像类型*

icon的图像。

### icon-keep-upright
*布局属性。布尔类型。默认为 false。需要`icon-image`。要求`icon-rotation-alignment `为`map`。要求`symbol-placement`为`line`或`line-center`。*

如果为 true，图标可能会被翻转，以防止它被上下颠倒。

### icon-offset
*布局属性。数组类型。默认为[0,0]。需要`icon-image`。支持插值表达式。*

图标与其锚点的偏移距离。正值表示向右和向下，而负值表示向左和向上。单位相对于图像的宽高。

### icon-opacity
*绘图属性。数字类型。可选数字0到1之间。默认为1。需要`icon-image`。支持`feature-state`和插值表达式。可过渡。*

透明度。

### icon-optional
*布局属性。布尔类型。默认为 false。需要`icon-image`。需要`text-field.`。*

如果为真，当图标与其他符号碰撞而文本没有碰撞时，文本将不显示相应的图标。

### icon-padding
*布局属性。大于或等于0的可选数字。单位为像素。默认为2。需要`icon-image`。支持插值表达式。*

用于检测符号冲突的图标包围盒的大小。

### icon-pitch-alignment
*布局属性。枚举类型。`map`、`viewport`、`auto`。默认为`auto`。需要`icon-image`。*

地图倾斜时图标的方向。
- `map`: 图标与地图平面对齐。
- `viewport`: 图标与视角对齐。
- `auto`: 自动匹配`icon-rotation-alignment`的值

### icon-rotate
*布局属性。数字类型。单位度。默认为0。需要`icon-image`。支持插值表达式。*

顺时针旋转的角度。

### icon-rotation-alignment
*布局属性。枚举类型。`map`、`viewport`、`auto`。默认为`auto`。需要`icon-image`。*

结合`symbol-placement`，确定图标的旋转行为。
- `map`: 图标与地图平面对齐。
- `viewport`: 图标与视角对齐。
- `auto`: 当`symbol-placement`设置为点时，图标将东西对齐。当符号放置设置为线或线中心时，图标x轴与线对齐。