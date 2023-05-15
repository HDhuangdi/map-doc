---
sidebarDepth: 2
---

# 内部类

## Marker

打点类，用于根据geojson路网计算导航路径

### 实例方法
#### `setPosition(lng, lat, altitude)`

根据传入坐标设置位置。

**方法签名：**
```typescript
setPosition(lng: number, lat: number, altitude?: number): void
```

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

#### `setZIndex(zIndex)`

更改当前marker.header.style的z-index属性。

**方法签名：**
```typescript
setZIndex(zIndex: number): void
```

**参数列表：**

*zIndex\<number>* z-index值


**示例：**
```js
marker.setZIndex(10)
```

#### `setVisible(visible)`

控制该Marker是否显示。

**方法签名：**
```typescript
setVisible(visible: boolean): void
```

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

**方法签名：**
```typescript
changeStatus(isPlay: boolean): void
```

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

**方法签名：**
```typescript
fire(): void
```

**示例：**
```js
emitter.fire()
```

## Streamer

流光线条类

### 实例方法
#### `changeStatic(isStatic)`

调整流光线条的动画是否播放.

**方法签名：**
```typescript
changeStatic(isStatic: boolean): void
```

**参数列表：**

*isStatic\<boolean>* 是否播放

**示例：**
```js
streamer.changeStatic(true)
```

## Model

3D模型类

### 实例方法
#### `reset(coord, altitude, rotation, translation, sacle)`

设置3D模型的位置、海拔、旋转、偏移、缩放参数

**方法签名：**

```typescript
type TModelRotation = { axis: string; angle: number }[];
type TModelPosition = { axis: string; offset: number }[];
reset(
  coord?: [number, number],
  altitude?: number,
  rotation?: TModelRotation,
  translation?: TModelPosition,
  sacle?: number
): void;
```

**参数列表：**

*coord\<[number, number]>* 位置，经纬度

*altitude\<number>* 海拔，单位：米

*rotation\<TModelRotation>* 旋转信息

*translation\<TModelPosition>* 偏移信息

*sacle\<number>* 缩放信息


**示例：**
```js
model.reset([120, 30], 100, {axis: 'x', angle: Math.PI}, {axis: 'x', offset: 100}, sacle: 10)
```