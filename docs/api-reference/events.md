---
sidebarDepth: 2
---

# 事件

## 通用
### `resize`
在地图调整大小后立即触发。

### `remove`
使用`map.destroy`后立即触发。

### `map.ready`
在所有必要的资源下载完成并且第一次视觉上完整的地图渲染完成后立即激活。

## 交互
### `mousedown`
鼠标点击后立即触发。

### `mouseover`
在鼠标位于元素上方时会触发。

### `mousemove`
在地图中移动鼠标立即触发。

### `preclick`
鼠标点击之前触发。

### `click`
鼠标点击后立即触发。

### `dbclick`
鼠标双击后立即触发。

### `mouseenter`
在鼠标进入地图后立即触发。

### `mouseleave`
在鼠标移出地图、指定图层后立即触发。

### `mouseout`
在鼠标移出画布后立即触发。

### `contextmenu`
单击鼠标右键或按下地图中的上下文菜单键时触发。

### `wheel`
鼠标滚轮滚动时触发。

## 移动
### `movestart`
在地图开始从一个视图转换到另一个视图之前触发，这是用户交互或者`map.jumpTo`等方法的结果。

### `move`
在地图开始从一个视图转换到另一个视图中触发，这是用户交互或者`map.jumpTo`等方法的结果。

### `moveend`
在地图开始从一个视图转换到另一个视图之后触发，这是用户交互或者`map.jumpTo`等方法的结果。

### `dragstart`
当拖动平移交互开始时触发。参见 DragPanHandler。

### `drag`
当拖动平移交互中触发。参见 DragPanHandler。

### `dragend`
当拖动平移交互后触发。参见 DragPanHandler。

### `zoomstart`
地图发生缩放变化前触发。

### `zoom`
地图发生缩放变化中触发。

### `zoomend`
地图发生缩放变化后触发。

### `rotatestart`
地图发生方位角（旋转）变化前触发。

### `rotate`
地图发生方位角（旋转）变化中触发。

### `rotateend`
地图发生方位角（旋转）变化后触发。

### `pitchstart`
地图发生俯仰角变化前触发。

### `pitch`
地图发生俯仰角变化中触发。

### `pitchend`
地图发生俯仰角变化后触发。

## 生命周期
### `render`
地图发生绘制、重绘时触发。

### `idle`
在地图进入“空闲”状态之前渲染的最后一帧之后触发:
- 没有镜头切换正在进行中
- 当前请求的所有瓦片都已加载
- 所有渐变/过渡动画已完成。

### `error`
发生错误时触发。

### `webglcontextlost`
`WebGL`上下文丢失时触发。

### `webglcontextrestored`
`WebGL`上下文恢复时触发。

## 数据加载
### `data`
当任何地图数据加载或更改时激发。有关更多信息，请参见 MapDataEvent。

### `styledata`
加载或更改地图样式时激发。有关更多信息，请参见 MapDataEvent。

### `sourcedata`
当地图的一个源加载或更改时激发。有关更多信息，请参见 MapDataEvent。

### `dataloading`
当任何地图数据（样式、源、瓦片等）开始异步加载或更改时激发。有关更多信息，请参见 MapDataEvent。

### `styledataloading`
当地图的样式开始异步加载或更改时激发。有关更多信息，请参见 MapDataEvent。

### `sourcedataloading`
当地图的一个源开始异步加载或更改时激发。有关更多信息，请参见 MapDataEvent。

### `styleimagemissing`
当样式所需的图标或图案缺失时激发。