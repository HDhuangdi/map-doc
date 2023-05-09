---
sidebarDepth: 2
---

# 公用类
## CustomStageUtils
自定义图层工具类
### `StageMouseEvent`
自定义图层鼠标事件类

**构造参数列表：**

*map\<ArkMap>* [ArkMap底图实例对象](/api-reference/map.html)

*camera\<THREE.Camera>* 由[customStageInstance](/api-reference/methods.html#addcustomstage-customstageinstance)传入的camera对象

*scene\<THREE.Scene>* 由[customStageInstance](/api-reference/methods.html#addcustomstage-customstageinstance)传入的scene对象

**方法：**

`onHover(obj3D, callback)`

鼠标移入`obj3D`对象后（类型为`THREE.Object3D`），会触发`callback`参数。

`callback`函数接收两个参数：
- `e: MouseEvent`：表示鼠标原生事件；
- `intersects: THREE.Object3D[]`：表示当前鼠标位置往屏幕内投射，穿越的所有物体（`obj3D`本身及`obj3D.children`）

**示例：**
```js
const geo = new THREE.BoxGeometry(10, 10, 10)
const mat = new THREE.MeshBasicMaterial()
const mesh = new THREE.Mesh(geo, mat)

const eventCenter =  new CustomStageUtils.StageMouseEvent(map, camera, scene)
eventCenter.onHover(mesh, (e, intersects) => {
  if (intersects.length) {
    console.log('鼠标有拾取到mesh物体哦')
  }
});

```

`onClick(obj3D, callback)`

鼠标点击`obj3D`对象后（类型为`THREE.Object3D`），会触发`callback`参数。

`callback`函数接收两个参数：
- `e: MouseEvent`：表示鼠标原生事件；
- `intersects: THREE.Object3D[]`：表示当前鼠标位置往屏幕内投射，穿越的所有物体（`obj3D`本身及`obj3D.children`）

**示例：**
```js
const geo = new THREE.BoxGeometry(10, 10, 10)
const mat = new THREE.MeshBasicMaterial()
const mesh = new THREE.Mesh(geo, mat)

const eventCenter =  new CustomStageUtils.StageMouseEvent(map, camera, scene)
eventCenter.onHover(mesh, (e, intersects) => {
  if (intersects.length) {
    console.log('鼠标有点击到mesh物体哦')
  }
});

```


### `convertLnglatToWorld(lnglat)`
将经纬度映射到世界坐标

**参数列表：**

*lnglat\<number[ ] \|\| number[ ][ ]>* 经度、纬度、海拔(可选)坐标，或者是经度、纬度、海拔(可选)坐标数组

**返回值：**
传入经纬度坐标，返回一个世界坐标`{x: xxx, y: xxx, z: xxx}`；传入一个经度、纬度、海拔(可选)坐标数组，返回两个值：
- `vertices`: 以`position`为中心的相对坐标数组
- `position`: 中心坐标

**示例：**
```js
const coords = [
  [120.1896, 30.1997],
  [120.1964, 30.2028],
  [120.1981, 30.1943],
  [120.1909, 30.1937],
  [120.1896, 30.1997],
]
const pos = CustomStageUtils.convertLnglatToWorld(coords)
const shp = new THREE.Shape()

let isFirst
for (coord of pos.vertices) {
  if (isFirst) {
    isFirst = false
    shp.moveTo(coord.x, coord.y)
  } else {
    shp.lineTo(coord.x, coord.y)
  }
}

const geo = new THREE.ExtrudeGeometry(shp, {bevelEnabled: false, depth: 10})
const mat = new THREE.MeshBasicMaterial()
const mesh = new THREE.Mesh(mat)
mesh.position.copy(pos.position)

world.add(mesh)
```

## Navigation
导航类，用于根据geojson路网计算导航路径
### 参数
*routeNetwork\<geojson>*: 一个type为`LineString`的geojson路网。

### 静态方法
#### `genDirvingInfo(path)`
根据传入的导航路线数组，输出每个点和下一个点之间需要变换的角度、两点之间的距离的信息集合。

**参数列表：**

*path\<Array\<Array\<number>>>* 一个导航路线数组

**返回值：**

dirvingInfo 一个集合, 存储着每个点和下一个点之间需要变换的角度、两点之间的距离的信息。

**示例：**
```js
const navigation = new arkmap.Navigation(network)
const way = navigation.findWay(start, end);
const info = Navigation.genDirvingInfo(way);
```

### 实例方法
#### `findWay(point1, point2)`
根据俩个经纬度点，两点必须在给定的路网GEOJSON内，在路网中寻找连接路线。

**参数列表：**

*point1\<Array\<number>>* 一个经纬度数组

*point2\<Array\<number>>* 一个经纬度数组

**返回值：**

ways 一个由众多点组成的导航路线。

**示例：**
```js
const navigation = new arkmap.Navigation(network)
const way = navigation.findWay(start, end);
```

#### `findWayFuzzy(point1, point2)`
根据俩个经纬度点，在路网中模糊查询，寻找路线。

**参数列表：**

*point1\<Array\<number>>* 一个经纬度数组

*point2\<Array\<number>>* 一个经纬度数组

**返回值：**
一个 pending状态的Promise，full filed后传递一个路线对象，

**示例：**
```js
const navigation = new arkmap.Navigation(network)
const { path } = await navigation.findWayFuzzy(start, end);
```

## AnimationOptions
常用于地图涉及动画的移动方法的选项，如 `map.panBy` 和 `map.easeTo`，用于控制动画的持续时间等功能。所有属性都是可选的
### 参数
*animate\<boolean>*: 如果为 false，则不会发生任何动画。

*duration\<number>*: 持续时间，单位毫秒。

*easing\<Function>*: 缓动函数。

*essential\<boolean>*: 如果为true，则动画被认为是必不可少的，并且不会受到`prefers-reduced-motion`的影响。

*offset\<PointLike>*: 在动画结束时，目标中心相对于真实地图容器中心的偏移。

## CameraOptions
`map.jumpTo`、`map.easeTo`和`map.flyTo`的常用选项，用于控制摄像机的所需位置、缩放、方向角和俯仰。所有属性都是可选的，当省略某个属性时，该属性的值将保持不变。
### 参数
*around\<LngLatLike>*: 作为变焦、俯仰和/或方位变化原点的位置。如果设置此值，则忽略`center`

*bearing\<number>*: 方位角。

*center\<LngLatLike>*: 屏幕中心的地理坐标。

*padding\<PaddingOptions>*: 内边距。

*pitch\<number>*: 俯仰角。

*zoom\<number>*: 缩放值。

## FreeCameraOptions
用于配置基础相机实体的选项。直接访问这些属性可以更灵活、更精确地控制摄像机。这些选项也与`CameraOptions`完全兼容和可互换。所有字段都是可选的。
### 参数
*position\<MercatorCoordinate>*: 相机的位置的墨卡托坐标，坐标[0, 0, 0]是西北角，[1, 1, 0]是东南角。
### 实例方法
#### `lookAtPoint(location, up)`
通过在地图上定义焦点来设置摄像机方向的辅助功能。

**参数列表：**

location\<LngLatLike> 地图上焦点的位置。

up\<vec3?> 在某些不能从观察方向推断方位的情况下，摄像机的向上矢量是必要的。

#### `setPitchBearing(pitch, bearing)`
辅助功能，用于将摄像机的方向设置为俯仰和方向角。

**参数列表：**

pitch\<number> 俯仰角。

bearing\<number> 方位角。

```js
const camera = map.getFreeCameraOptions();

const position = [138.72649, 35.33974];
const altitude = 3000;

camera.position = arkmap.MercatorCoordinate.fromLngLat(position, altitude);
camera.lookAtPoint([138.73036, 35.36197]);

map.setFreeCameraOptions(camera);
```

## PaddingOptions
用于设置内边距，经常被`map.fitBound`、`map.fitScreenConcerates`、`map.setPaddings`所用，在四周设置统一或单独的值，所有的值都必须为非负数。单位像素。
### 参数

*bottom\<number>*: 下边距。

*left\<number>*: 左边距。

*right\<number>*: 右边距。

*top\<number>*: 上边距。

```js
const bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
    padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

## LngLat
一个`LngLat`对象表示一个给定的经纬度坐标，以度为单位
```ts
new LngLat(lng: number, lat: number)
```
### 参数

*lng\<number>*: 经度。

*lat\<number>*: 纬度。

```js
const ll = new arkmap.LngLat(-123.9749, 40.7736);
console.log(ll.lng); // = -123.9749
```

### 静态方法
#### `convert(input)`
将两个数字的数组或具有`lng`和`lat`或`lon`和`lat`属性的对象转换为`LngLat`对象。

**参数列表：**

input\<LngLatLike> 要转换的两个数字或对象的数组，或要返回的`LngLat`对象。

**返回值：**

如果发生转换，则为新的`LngLat`对象。若无转换，则为原始的`LngLat`对象。

**实例：**
```js
const arr = [-73.9749, 40.7736];
const ll = arkmap.LngLat.convert(arr);
console.log(ll);   // = LngLat {lng: -73.9749, lat: 40.7736}
```

### 实例方法
#### `warp()`
返回一个新的`LngLat`对象，其经度被转换到范围-180~180。

**返回值：**

新的`LngLat`对象。

**实例：**
```js
const ll = new arkmap.LngLat(286.0251, 40.7736);
const wrapped = ll.wrap();
console.log(wrapped.lng); // = -73.9749
```

#### `toArray()`
返回包含两个数字坐标的数组。

**返回值：**

坐标数组。

**实例：**
```js
const ll = new arkmap.LngLat(-73.9749, 40.7736);
ll.toArray(); // = [-73.9749, 40.7736]
```

#### `toString()`
返回字符串坐标。

**返回值：**

格式为"LngLat(lng，lat)"的字符串。

**实例：**
```js
const ll = new arkmap.LngLat(-73.9749, 40.7736);
ll.toString(); // = "LngLat(-73.9749, 40.7736)"
```

#### `distanceTo(lngLat)`
返回两个坐标之间的距离，以米为单位。

**参数列表：**

lngLat\<LngLat> 要计算到的距离的坐标。

**返回值：**

距离，以米为单位。

**实例：**
```js
const newYork = new arkmap.LngLat(-74.0060, 40.7128);
const losAngeles = new arkmap.LngLat(-118.2437, 34.0522);
newYork.distanceTo(losAngeles); // 3935751.690893987
```

#### `toBounds(radius)`
以给定半径的坐标返回`LngLatBounds`。返回的`LngLatBounds`完全包含半径。

**参数列表：**

radius\<number> (default 0) 半径。

**返回值：**

一个新的`LngLatBounds`对象，表示由半径扩展的坐标。

**示例：**
```js
const ll = new arkmap.LngLat(-73.9749, 40.7736);
ll.toBounds(100).toArray(); // = [[-73.97501862141328, 40.77351016847229], [-73.97478137858673, 40.77368983152771]]
```

## LngLatBounds
表示地理边界框，由其在经度和纬度上的西南点和东北点定义。
```ts
new LngLatBounds(sw: LngLatLike?, ne: LngLatLike?)
```
### 参数

*sw\<LngLatLike?>*: 边界框的西南角。

*ne\<LngLatLike?>*: 边界框的东北角。

```js
const sw = new arkmap.LngLat(-73.9876, 40.7661);
const ne = new arkmap.LngLat(-73.9397, 40.8002);
const llb = new arkmap.LngLatBounds(sw, ne);
```

### 静态方法
#### `convert(input)`
用法类似于[LngLat.convert](/api-reference/properties.html#lnglat)

**参数列表：**

input\<LngLatLike> 要转换的两个坐标的数组，或要返回的`LngLatBounds`对象。

**返回值：**

如果发生转换，则为新的`LngLatBounds`对象。若无转换，则为原始的`LngLatBounds`对象。

**实例：**
```js
const arr = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
const llb = arkmap.LngLatBounds.convert(arr);
console.log(llb);   // = LngLatBounds {_sw: LngLat {lng: -73.9876, lat: 40.7661}, _ne: LngLat {lng: -73.9397, lat: 40.8002}}
```

### 实例方法
#### `setNorthEast(ne)`
设置边界框的东北角。

**参数列表：**

ne\<LngLatLike> 描述边界框东北角的类LngLatLike对象。

**返回值：**

自身

**实例：**
```js
const sw = new arkmap.LngLat(-73.9876, 40.7661);
const ne = new arkmap.LngLat(-73.9397, 40.8002);
const llb = new arkmap.LngLatBounds(sw, ne);
llb.setNorthEast([-73.9397, 42.8002]);
```

#### `setSouthWest(sw)`
设置边界框的西南角。

**参数列表：**

sw\<LngLatLike> 描述边界框西南角的类LngLatLike对象。

**返回值：**

自身

**实例：**
```js
const sw = new arkmap.LngLat(-73.9876, 40.7661);
const ne = new arkmap.LngLat(-73.9397, 40.8002);
const llb = new arkmap.LngLatBounds(sw, ne);
llb.setSouthWest([-73.9876, 40.2661]);
```

#### `extend(obj)`
扩展边界以包括给定的`LngLatLike`或`LngLatBoundsLike`。

**参数列表：**

obj\<LngLatLike | LngLatBoundsLike> 要扩展到的对象。

**返回值：**

自身

**实例：**
```js
const sw = new arkmap.LngLat(-73.9876, 40.7661);
const ne = new arkmap.LngLat(-73.9397, 40.8002);
const llb = new arkmap.LngLatBounds(sw, ne);
llb.extend([-72.9876, 42.2661]);
```
#### `getCenter()`
返回中心点。

**返回值：**

中心点的LngLat对象。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getCenter(); // = LngLat {lng: -73.96365, lat: 40.78315}
```

#### `getSouthWest()`
返回西南角。

**返回值：**

西南角的LngLat对象。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getSouthWest(); // LngLat {lng: -73.9876, lat: 40.7661}
```

#### `getSouthEast()`
返回东南角。

**返回值：**

东南角的LngLat对象。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getSouthEast(); // LngLat {lng: -73.9397, lat: 40.7661}
```

#### `getNorthEast()`
返回东北角。

**返回值：**

东北角的LngLat对象。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getNorthEast(); // LngLat {lng: -73.9397, lat: 40.8002}
```

#### `getNorthWest()`
返回西北角。

**返回值：**

西北角的LngLat对象。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getNorthWest(); // LngLat {lng: -73.9876, lat: 40.8002}
```

#### `getWest()`
返回边界框的西边缘。

**返回值：**

number 西边缘。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getWest(); // -73.9876
```

#### `getSouth()`
返回边界框的南边缘。

**返回值：**

number 南边缘。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getSouth(); // 40.7661
```

#### `getEast()`
返回边界框的东边缘。

**返回值：**

number 东边缘。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getEast(); // -73.9397
```

#### `getNorth()`
返回边界框的北边缘。

**返回值：**

number 北边缘。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getNorth(); // 40.8002
```

#### `toArray()`
返回表示为数组的边界框。

**返回值：**

表示边界框的数组。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toArray(); // = [[-73.9876, 40.7661], [-73.9397, 40.8002]]
```

#### `toString()`
返回表示为字符串的边界框。

**返回值：**

表示边界框的字符串。

**实例：**
```js
const llb = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toString(); // = "LngLatBounds(LngLat(-73.9876, 40.7661), LngLat(-73.9397, 40.8002))"
```

#### `isEmpty()`
检查边界框是否为空。

**返回值：**

表示边界框是否为空的布尔值。

**实例：**
```js
const llb = new arkmap.LngLatBounds();
llb.isEmpty(); // true
llb.setNorthEast([-73.9876, 40.7661]);
llb.setSouthWest([-73.9397, 40.8002]);
llb.isEmpty(); // false
```

#### `contains(lngLat)`
检查坐标是否位于边界框内部。

**参数列表：**

lnglat\<LngLatLike> 需要检查的坐标。

**返回值：**

表示边界框是否包含坐标的布尔值。

**实例：**
```js
const llb = new arkmap.LngLatBounds(
  new arkmap.LngLat(-73.9876, 40.7661),
  new arkmap.LngLat(-73.9397, 40.8002)
);
const ll = new arkmap.LngLat(-73.9567, 40.7789);
console.log(llb.contains(ll)); // = true
```

## LngLatBoundsLike
`LngLatBounds`对象、[sw，ne]顺序的`LngLatLike`对象数组或[west，south，east，north]顺序的数字数组。

以下示例都属于`LngLatBoundsLike`:
```js
const v1 = new arkmap.LngLatBounds(
  new arkmap.LngLat(-73.9876, 40.7661),
  new arkmap.LngLat(-73.9397, 40.8002)
);
const v2 = new arkmap.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
const v3 = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
```

## LngLatLike
`LngLat`对象、[lng, lat]的数组，或具有lng和lat或lon和lat属性的对象。

以下示例都属于`LngLatLike`:
```js
const v1 = new arkmap.LngLat(-122.420679, 37.772537);
const v2 = [-122.420679, 37.772537];
const v3 = {lng: -122.420679, lat: 37.772537};
```

## MercatorCoordinate
表示对象在墨卡托投影坐标系下的墨卡托坐标。`MercatorCoordinate`使用web mercator投影(EPSG:3857)。墨卡托坐标(0，0，0)是墨卡托世界的西北角，而墨卡托坐标(1，1，0)是东南角。
```ts
new MercatorCoordinate(x: number, y: number, z: number)
```

### 参数

*x\<number>*: x分量。

*y\<number>*: y分量。

*z\<number>*: (default 0) z分量。

```js
const nullIsland = new arkmap.MercatorCoordinate(0.5, 0.5, 0);
```
### 静态方法
#### `fromLngLat(lngLatLike, altitude)`
将`LngLat`投影到墨卡托坐标。

**参数列表：**

lngLatLike\<LngLatLike> 需要被投影的坐标。

altitude\<number> (default 0) 高度。

**返回值：**

MercatorCoordinate 墨卡托坐标。

**实例：**
```js
const coord = arkmap.MercatorCoordinate.fromLngLat({lng: 0, lat: 0}, 0);
console.log(coord); // MercatorCoordinate(0.5, 0.5, 0)
```
### 实例方法
#### `toLngLat()`
将墨卡托坐标转换为`LngLat`。

**返回值：**

LngLat 坐标。

**实例：**
```js
const coord = new arkmap.MercatorCoordinate(0.5, 0.5, 0);
const lngLat = coord.toLngLat(); // LngLat(0, 0)
```

#### `toAltitude()`
返回坐标的高度（以米为单位）。

**返回值：**

高度。

**实例：**
```js
const coord = new arkmap.MercatorCoordinate(0, 0, 0.02);
coord.toAltitude(); // 6914.281956295339
```

#### `meterInMecatorCoordinateUnits()`
返回该纬度上1米的距离。

**返回值：**

以墨卡托坐标单位表示的1米距离

**示例：**
```js
// 计算一个墨卡托坐标往西150米后的新的墨卡托坐标
const coord = new arkmap.MercatorCoordinate(0.5, 0.25, 0);
const offsetInMeters = 150;
const offsetInMercatorCoordinateUnits = offsetInMeters * coord.meterInMercatorCoordinateUnits();
const westCoord = new arkmap.MercatorCoordinate(coord.x - offsetInMercatorCoordinateUnits, coord.y, coord.z);
```

## Point
点几何体对象，其x和y属性以像素表示屏幕坐标。
```js
const point = new arkmap.Point(-77, 38);
```

## PointLike
以像素表示x和y屏幕坐标的点或两个数字的数组。

以下示例都属于`PointLike`:
```js
const p1 = new arkmap.Point(-77, 38);
const p2 = [-77, 38];
```