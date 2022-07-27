# 公用类

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

camera.position = mapboxgl.MercatorCoordinate.fromLngLat(position, altitude);
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
const ll = new mapboxgl.LngLat(-123.9749, 40.7736);
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
const ll = mapboxgl.LngLat.convert(arr);
console.log(ll);   // = LngLat {lng: -73.9749, lat: 40.7736}
```

### 实例方法
#### `warp()`
返回一个新的`LngLat`对象，其经度被转换到范围-180~180。

**返回值：**

新的`LngLat`对象。

**实例：**
```js
const ll = new mapboxgl.LngLat(286.0251, 40.7736);
const wrapped = ll.wrap();
console.log(wrapped.lng); // = -73.9749
```

#### `toArray()`
返回包含两个数字坐标的数组。

**返回值：**

坐标数组。

**实例：**
```js
const ll = new mapboxgl.LngLat(-73.9749, 40.7736);
ll.toArray(); // = [-73.9749, 40.7736]
```

#### `toString()`
返回字符串坐标。

**返回值：**

格式为"LngLat(lng，lat)"的字符串。

**实例：**
```js
const ll = new mapboxgl.LngLat(-73.9749, 40.7736);
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
const newYork = new mapboxgl.LngLat(-74.0060, 40.7128);
const losAngeles = new mapboxgl.LngLat(-118.2437, 34.0522);
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
const ll = new mapboxgl.LngLat(-73.9749, 40.7736);
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
const sw = new mapboxgl.LngLat(-73.9876, 40.7661);
const ne = new mapboxgl.LngLat(-73.9397, 40.8002);
const llb = new mapboxgl.LngLatBounds(sw, ne);
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
const llb = mapboxgl.LngLatBounds.convert(arr);
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
const sw = new mapboxgl.LngLat(-73.9876, 40.7661);
const ne = new mapboxgl.LngLat(-73.9397, 40.8002);
const llb = new mapboxgl.LngLatBounds(sw, ne);
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
const sw = new mapboxgl.LngLat(-73.9876, 40.7661);
const ne = new mapboxgl.LngLat(-73.9397, 40.8002);
const llb = new mapboxgl.LngLatBounds(sw, ne);
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
const sw = new mapboxgl.LngLat(-73.9876, 40.7661);
const ne = new mapboxgl.LngLat(-73.9397, 40.8002);
const llb = new mapboxgl.LngLatBounds(sw, ne);
llb.extend([-72.9876, 42.2661]);
```
#### `getCenter()`
返回中心点。

**返回值：**

中心点的LngLat对象。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getCenter(); // = LngLat {lng: -73.96365, lat: 40.78315}
```

#### `getSouthWest()`
返回西南角。

**返回值：**

西南角的LngLat对象。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getSouthWest(); // LngLat {lng: -73.9876, lat: 40.7661}
```

#### `getSouthEast()`
返回东南角。

**返回值：**

东南角的LngLat对象。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getSouthEast(); // LngLat {lng: -73.9397, lat: 40.7661}
```

#### `getNorthEast()`
返回东北角。

**返回值：**

东北角的LngLat对象。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getNorthEast(); // LngLat {lng: -73.9397, lat: 40.8002}
```

#### `getNorthWest()`
返回西北角。

**返回值：**

西北角的LngLat对象。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getNorthWest(); // LngLat {lng: -73.9876, lat: 40.8002}
```

#### `getWest()`
返回边界框的西边缘。

**返回值：**

number 西边缘。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getWest(); // -73.9876
```

#### `getSouth()`
返回边界框的南边缘。

**返回值：**

number 南边缘。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getSouth(); // 40.7661
```

#### `getEast()`
返回边界框的东边缘。

**返回值：**

number 东边缘。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getEast(); // -73.9397
```

#### `getNorth()`
返回边界框的北边缘。

**返回值：**

number 北边缘。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getNorth(); // 40.8002
```

#### `toArray()`
返回表示为数组的边界框。

**返回值：**

表示边界框的数组。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toArray(); // = [[-73.9876, 40.7661], [-73.9397, 40.8002]]
```

#### `toString()`
返回表示为字符串的边界框。

**返回值：**

表示边界框的字符串。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toString(); // = "LngLatBounds(LngLat(-73.9876, 40.7661), LngLat(-73.9397, 40.8002))"
```

#### `isEmpty()`
检查边界框是否为空。

**返回值：**

表示边界框是否为空的布尔值。

**实例：**
```js
const llb = new mapboxgl.LngLatBounds();
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
const llb = new mapboxgl.LngLatBounds(
  new mapboxgl.LngLat(-73.9876, 40.7661),
  new mapboxgl.LngLat(-73.9397, 40.8002)
);
const ll = new mapboxgl.LngLat(-73.9567, 40.7789);
console.log(llb.contains(ll)); // = true
```

## LngLatBoundsLike
`LngLatBounds`对象、[sw，ne]顺序的`LngLatLike`对象数组或[west，south，east，north]顺序的数字数组。

以下示例都属于`LngLatBoundsLike`:
```js
const v1 = new mapboxgl.LngLatBounds(
  new mapboxgl.LngLat(-73.9876, 40.7661),
  new mapboxgl.LngLat(-73.9397, 40.8002)
);
const v2 = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
const v3 = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
```

## LngLatLike
`LngLat`对象、[lng, lat]的数组，或具有lng和lat或lon和lat属性的对象。

以下示例都属于`LngLatLike`:
```js
const v1 = new mapboxgl.LngLat(-122.420679, 37.772537);
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
const nullIsland = new mapboxgl.MercatorCoordinate(0.5, 0.5, 0);
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
const coord = mapboxgl.MercatorCoordinate.fromLngLat({lng: 0, lat: 0}, 0);
console.log(coord); // MercatorCoordinate(0.5, 0.5, 0)
```
### 实例方法
#### `toLngLat()`
将墨卡托坐标转换为`LngLat`。

**返回值：**

LngLat 坐标。

**实例：**
```js
const coord = new mapboxgl.MercatorCoordinate(0.5, 0.5, 0);
const lngLat = coord.toLngLat(); // LngLat(0, 0)
```

#### `toAltitude()`
返回坐标的高度（以米为单位）。

**返回值：**

高度。

**实例：**
```js
const coord = new mapboxgl.MercatorCoordinate(0, 0, 0.02);
coord.toAltitude(); // 6914.281956295339
```

#### `meterInMecatorCoordinateUnits()`
返回该纬度上1米的距离。

**返回值：**

以墨卡托坐标单位表示的1米距离

**实例：**
```js
// 计算一个墨卡托坐标往西150米后的新的墨卡托坐标
const coord = new mapboxgl.MercatorCoordinate(0.5, 0.25, 0);
const offsetInMeters = 150;
const offsetInMercatorCoordinateUnits = offsetInMeters * coord.meterInMercatorCoordinateUnits();
const westCoord = new mapboxgl.MercatorCoordinate(coord.x - offsetInMercatorCoordinateUnits, coord.y, coord.z);
```

## Point
点几何体对象，其x和y属性以像素表示屏幕坐标。
```js
const point = new mapboxgl.Point(-77, 38);
```

## PointLike
以像素表示x和y屏幕坐标的点或两个数字的数组。

以下示例都属于`PointLike`:
```js
const p1 = new mapboxgl.Point(-77, 38);
const p2 = [-77, 38];
```