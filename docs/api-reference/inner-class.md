---
sidebarDepth: 2
---

# 内部类

## Marker

打点类，用于根据geojson路网计算导航路径

### 实例方法
#### `setPosition(lng, lat, altitude)`

根据传入坐标设置位置。

**参数列表：**

*lng\<number>* 经度

*lat\<number>* 纬度

*altitude\<number>* 高度，单位：米

**返回值：**

ways 一个由众多点组成的导航路线。

**示例：**
```js
marker.setPosition(120.05, 30.3, 1000)
```

#### `setVisible(visible)`

控制该Marker是否显示。

**参数列表：**

*visible\<boolean>* 是否显示


**示例：**
```js
marker.setVisible(false)
```

## PathMoving

路径动画类

### 实例方法
#### `changeStatus(status)`

根据传入状态来设置动画的运行状态。

**参数列表：**

*status\<boolean>* 运行状态，false为不运行，true为运行

**示例：**
```js
pm.changeStatus(true)
```

## Emitter

粒子发射器内部类，用于控制粒子的发射

### 实例方法
#### `fire()`

开始发射粒子。

**示例：**
```js
emitter.fire()
```

## Streamer

流光线条类

### 实例方法
#### `changeStatic(isStatic)`

调整流光线条的动画是否播放.

**参数列表：**

*isStatic\<boolean>* 是否播放

**示例：**
```js
streamer.changeStatic(true)
```