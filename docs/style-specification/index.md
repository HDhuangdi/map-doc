# style-specification

地图样式是定义地图视觉外观的JSON对象，其中包括要绘制的数据、绘制的顺序以及绘制时如何设置数据的样式。本规范定义并描述了这些属性。

## Root

根级属性指定地图的图层、瓦片资源和其他资源，以及设置相机位置的默认值。

## layers
地图将按此数组的顺序进行图层绘制。

```json
"layers": [
  {
    "id": "water",
    "source": "mapbox-streets",
    "source-layer": "water",
    "type": "fill",
    "paint": {
      "fill-color": "#00ffff"
    }
  }
]
```