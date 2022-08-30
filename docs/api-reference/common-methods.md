# 公用方法

## `loadObj(url)`
用于3D模型资源的导入，目前只支持`.obj`类型的3D模型。

**参数列表：**

*url\<string>* 3D模型资源的地址。

**返回值：**

一个`Promise`对象，`resolve`后传递3D模型OBJ对象。

**示例：**
```js
const obj = map.loadObj('Eiffel Tower.obj');
```