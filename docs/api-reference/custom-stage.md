# custom-stage

自定义拓展图层是由ARK MAP 提供基础API、对象，由开发者自己在地图场景中添加任意物体、自由实现逻辑的功能。

要使用自定义拓展图层，首先需要具备[three.js](https://threejs.org/docs/index.html#manual/zh/introduction/Installation)的知识，因为three.js各个版本之间破坏性改动较多，版本之间兼容性较差，这里推荐three.js的版本为[R132](https://www.npmjs.com/package/three/v/0.132.2)，或者使用本引擎自带的基于three.js定制的库[@ark-org/three](https://www.npmjs.com/package/@ark-org/three)。

## 使用
自定义拓展图层需要实现以下接口：

```typescript
interface ICustomStage {
  id: string;
  type?: 'normal' | 'bloom',
  bloomRadius?: number,
  bloomStrength?: number,
  bloomThreshold?: number,
  onAdd: (
    map?: Map,
    renderer?: THREE.WebGLRenderer,
    world?: THREE.Group,
    scene?: THREE.Scene,
    camera?: THREE.Camera,
    offscreenTexture?: THREE.Texture
  ) => void;
  onResize?: () => void
  render?: (delta: number) => void;
  destroy?: () => void;
}
```

## 接口成员

### `id`

图层的唯一标识

### `type`

标志该自定义拓展图层的类型

### `bloomRadius`

`bloom`图层专用，辉光的半径参数

### `bloomStrength`

`bloom`图层专用，辉光的强度参数

### `bloomThreshold`

`bloom`图层专用，辉光产生的阈值

### `onAdd(map, renderer, world, scene, camera, offscreenTexture)`

当地图引擎将当前图层加入场景中是会调用的方法，其中每个参数均为 three.js 的内部对象，如果你还不熟悉 three.js，请点击[这里](https://threejs.org/docs/index.html#manual/zh/introduction/Installation)进行学习。

### `onResize()`

地图引擎会在每次容器变化时会调用的方法。

### `render(delta)`

地图引擎在每次渲染都会调用的方法，参数`delta`表示和上一次渲染直接间隔的时间。

### `destroy()`

该图层销毁后会调用的方法。

## 普通拓展层
普通拓展层的`type`为空或者`"normal"`。普通拓展层使用three.js API，可以在地图场景中添加任意物件、动画等，适用大部分的定制场景。

### 示例

<demo-block>
::: slot source
<pages-api-reference-custom-stage></pages-api-reference-custom-stage>
:::


在离开页面时，需要调用`map.destroy()` 销毁地图

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/api-reference/custom-stage.vue
:::

</demo-block>

## 辉光拓展层
辉光拓展层的`type`为`"bloom"`。辉光拓展层是在普通拓展层的基础上添加了辉光效果，通过不同的参数调整，对高光面产生自定义的辉光特效。

### 示例

<demo-block>
::: slot source
<pages-api-reference-bloom-custom-stage></pages-api-reference-bloom-custom-stage>
:::


在离开页面时，需要调用`map.destroy()` 销毁地图

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/api-reference/bloom-custom-stage.vue
:::

</demo-block>