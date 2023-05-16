# custom-stage

自定义拓展图层。要使用自定义拓展图层，首先需要具备[three.js](https://threejs.org/docs/index.html#manual/zh/introduction/Installation)的知识，该图层需要实现以下接口：

```typescript
interface ICustomStage {
  id: String;
  onAdd: (
    map?: ArkMap,
    renderer?: THREE.WebGLRenderer,
    world?: THREE.Group,
    scene?: THREE.Scene,
    camera?: THREE.Camera
  ) => void;
  render?: (delta: number) => void;
  destroy?: () => void;
}
```

## 接口成员

### `id`

图层的唯一标识

### `onAdd(map, renderer, world, scene, camera)`

当地图引擎将当前图层加入场景中是会调用的方法，其中每个参数均为 three.js 的内部对象，如果你还不熟悉 three.js，请点击[这里](https://threejs.org/docs/index.html#manual/zh/introduction/Installation)进行学习。

### `render(delta)`

地图引擎在每次渲染都会调用的方法，参数`delta`表示和上一次渲染直接间隔的时间。

### `destroy()`

该图层销毁后会调用的方法。

## 示例

```typescript
import * as THREE from "three";
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css";
import mapStyle from "./style";

class MyStage {
  eleId: string;
  id: string
  map: arkmap.Map;

  constructor(eleId: string) {
    this.id = 'myStage'
    this.eleId = eleId;
  }

  onAdd(
    map: arkmap.Map,
    renderer?: THREE.WebGLRenderer,
    world?: THREE.Group,
    scene?: THREE.Scene,
    camera?: THREE.Camera
  ): void {
    this.map = map

    const geo = new THREE.BoxGeometry(10, 10, 10)
    const mat = new THREE.MeshBasicMetry({color: '#fff'})
    const mesh = new THREE.Mesh(geo, mat)

    const center = [120.0237, 30.8976]

    const projectedCenter = arkmap.CustomStageUtils.convertLnglatToWorld(center)
    mesh.position.copy(projectedCenter)
  }
}

const map = new arkmap.Map({
  container: 'map',
  style: mapStyle，
  center: [120, 30],
  zoom: 12
});

map.on('map.ready', () => {
  const myStage = new MyStage('map')
  map.addCustomStage(myStage)
})
```
