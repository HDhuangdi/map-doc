# 公用方法

## `loadObj(url)`
用于`.obj`类型的3D模型资源的导入

**方法签名：**
```typescript
function loadObj(src: string): Promise<any>;
```

**参数列表：**

*url\<string>* 3D模型资源的地址。

**返回值：**

一个`Promise`对象，`resolve`后传递3D模型OBJ对象。

**示例：**
```js
const obj = map.loadObj('Eiffel Tower.obj');
```

## `loadGLTF(url)`
用于`.glb`或者`.gltf`类型的3D模型资源的导入

**方法签名：**
```typescript
function loadGLTF(src: string): Promise<any>
```

**参数列表：**

*url\<string>* 3D模型资源的地址。

**返回值：**

一个`Promise`对象，`resolve`后传递3D模型GLTF对象。

**示例：**
```js
const glb = map.loadGLTF('Eiffel Tower.glb');
```