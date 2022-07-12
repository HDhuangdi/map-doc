# 打点

通过调用`addMarker`API，打点头部可以使用html语法，底部可以配置一张贴图。

<demo-block>
::: slot source
<pages-examples-point></pages-examples-point>
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/pages/examples/point.vue
:::

</demo-block>

样式文件：
```js
export default {
  version: 8,
  name: "Navigation",
  sources: {
      composite: {
          attribution: "&copy; DAS-Security",
          minzoom: 0,
          maxzoom: 15,
          tiles: ["http://10.50.2.89:8848/tile/{z}/{x}/{y}.pbf"],
          type: "vector",
      },
  },
  glyphs: "https://camap.91ctf.com/fonts/{fontstack}/{range}.pbf",
  light: {
      anchor: "map",
      color: "white",
      intensity: 0.7,
      position: [10, 90, 45]
  },
  layers: [
      // 底色、海洋
      {
          id: "background",
          type: "background",
          layout: { visibility: "visible" },
          paint: { "background-color": "rgba(11, 44, 67, 1)" },
      },
      //大陆
      {
          id: "land",
          type: "fill",
          layout: {},
          paint: { "fill-color": "rgba(2, 13, 35, 1)" },
          "source-layer": "land",
          source: "composite",
      },
      // 水域
      {
          id: "water",
          type: "fill",
          source: "composite",
          "source-layer": "water_area",
          layout: {},
          paint: {
              "fill-color": "rgba(11, 44, 67, 1)",
          },
      },
      // 河流、江
      {
          id: "waterway",
          type: "line",
          source: "composite",
          "source-layer": "water_ways",
          filter: ["==", "$type", "LineString"],
          paint: { "line-color": "rgb(27 ,27 ,29)" },
      },
      // 国界
      {
          id: "china_boundary",
          type: "line",
          source: "composite",
          "source-layer": "china_boundary",
          layout: {
              "line-cap": "round",
              "line-join": "round",
              visibility: "visible",
          },
          maxzoom: 3,
          paint: {
              "line-color": {
                  stops: [
                      [1, "rgba(37, 58, 83, 0.91)"],
                      [10, "rgba(57, 84, 118, 0.91)"],
                  ],
              },
              "line-width": {
                  base: 1.1,
                  stops: [
                      [0, 0.5],
                      [6, 3],
                      [16, 6],
                  ],
              },
              "line-blur": {
                  base: 1,
                  stops: [
                      [0, 0.2],
                      [22, 1],
                  ],
              },
              "line-opacity": 1,
          },
      },
      // 省界
      {
          id: "boundary_state",
          type: "line",
          source: "composite",
          "source-layer": "province_boundary",
          minzoom: 3,
          layout: {
              visibility: "visible",
              "line-cap": "round",
              "line-join": "round",
          },
          paint: {
              "line-dasharray": {
                  stops: [
                      [6, [10, 5]],
                      [10, [4, 2]],
                  ],
              },
              "line-width": {
                  base: 1,
                  stops: [
                      [7, 0.5],
                      [9, 1.5],
                      [16, 3.5],
                  ],
              },
              "line-opacity": {
                  base: 1,
                  stops: [
                      [7, 0.7],
                      [16, 0.9],
                  ],
              },
              "line-color": {
                  stops: [
                      [6, "rgba(144, 168, 203, 0.73)"],
                      [10, "rgba(144, 168, 203, 0.82)"],
                  ],
              },
          },
      },
      // 高速路
      {
          minzoom: 5,
          layout: {
              "line-cap": ["step", ["zoom"], "butt", 8, "round"],
              "line-join": ["step", ["zoom"], "miter", 8, "round"],
          },
          filter: ["all", ["==", "fclass", "motorway"]],
          type: "line",
          source: "composite",
          id: "motorway-navigation",
          paint: {
              "line-width": {
                  base: 1.5,
                  stops: [
                      [14, 0.5],
                      [18, 6],
                  ],
              },
              "line-color": "rgba(77, 97, 114, 0.77)",
              "line-opacity": {
                  base: 1,
                  stops: [
                      [0, 0],
                      [11, 0.3],
                      [22, 0.5],
                  ],
              },
          },
          "source-layer": "roads",
      },
      // 高速路名称
      {
          id: "motorway-label",
          type: "symbol",
          source: "composite",
          "source-layer": "roads",
          minzoom: 9,
          filter: ["all", ["==", "fclass", "motorway"]],
          layout: {
              "text-size": {
                  stops: [
                      [9, 11],
                      [10, 12],
                      [12, 13],
                  ],
              },
              "text-font": ["Metropolis Light", "Noto Sans Regular"],
              "text-field": ["get", "name"],
              "text-padding": {
                  base: 20,
                  stops: [
                      [10, 20],
                      [11, 40],
                      [12, 100],
                      [13, 100],
                      [14, 100],
                  ],
              },
          },
          paint: {
              "text-color": "rgba(153, 174, 197, 1)",
              "text-halo-color": "rgba(20, 29, 55, 1)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
          },
      },
      // 主要道路
      {
          minzoom: 7,
          layout: {
              "line-cap": ["step", ["zoom"], "butt", 11, "round"],
              "line-join": ["step", ["zoom"], "miter", 11, "round"],
          },
          filter: [
              "all",
              ["==", ["get", "fclass"], "primary"],
              ["==", ["geometry-type"], "LineString"],
          ],
          type: "line",
          source: "composite",
          id: "road-primary",
          paint: {
              "line-width": {
                  base: 1.5,
                  stops: [
                      [8, 0.4],
                      [10, 1.75],
                      [16, 12],
                      [20, 38],
                  ],
              },
              "line-color": "rgba(25, 49, 62, 0.86)",
              "line-opacity": {
                  base: 1,
                  stops: [
                      [8, 0.3],
                      [10, 0.4],
                      [22, 0.7],
                  ],
              },
          },
          "source-layer": "roads",
      },
      // 主要道路隧道
      {
          id: "primary-tunnel-line",
          type: "line",
          source: "composite",
          "source-layer": "roads",
          minzoom: 7,
          filter: [
              "all",
              ["==", ["geometry-type"], "LineString"],
              ["==", ["get", "tunnel"], "T"],
              ["==", ["get", "fclass"], "primary"],
          ],
          layout: {
              "line-cap": "round",
              "line-join": "round",
              visibility: "visible",
          },
          paint: {
              "line-dasharray": [2, 3],
              "line-width": {
                  base: 1,
                  stops: [
                      [11, 0.55],
                      [16, 2.5],
                  ],
              },
              "line-opacity": {
                  base: 1,
                  stops: [
                      [9, 0.3],
                      [16, 0.9],
                  ],
              },
              "line-color": "rgba(123, 135, 155, 1)",
          },
      },
      {
          id: "primary-tunnel",
          type: "line",
          source: "composite",
          "source-layer": "roads",
          minzoom: 7,
          filter: [
              "all",
              ["==", ["geometry-type"], "LineString"],
              ["==", ["get", "tunnel"], "T"],
              ["==", ["get", "fclass"], "primary"],
          ],
          layout: {
              "line-cap": "round",
              "line-join": "round",
              visibility: "visible",
          },
          paint: {
              "line-width": {
                  base: 1.5,
                  stops: [
                      [8, 0.4],
                      [10, 1.55],
                      [18, 20],
                  ],
              },
              "line-color": "rgba(58, 71, 83, 1)",
              "line-opacity": {
                  base: 1,
                  stops: [
                      [8, 0.2],
                      [10, 0.4],
                      [22, 0.7],
                  ],
              },
          },
      },
      // 次要道路
      {
          id: "highway_major_secondary",
          type: "line",
          source: "composite",
          "source-layer": "roads",
          minzoom: 10,
          maxzoom: 24,
          filter: [
              "all",
              ["==", ["get", "fclass"], "secondary"],
              ["==", ["geometry-type"], "LineString"],
          ],
          layout: {
              "line-cap": "round",
              "line-join": "round",
          },
          paint: {
              "line-width": {
                  base: 1.5,
                  stops: [
                      [6, 0.3],
                      [10, 0.55],
                      [18, 18],
                  ],
              },
              "line-color": "#152434",
              "line-opacity": {
                  base: 1,
                  stops: [
                      [0, 0],
                      [6, 0.3],
                      [22, 0.55],
                  ],
              },
          },
      },
      // 其他道路
      {
          id: "ways",
          type: "line",
          source: "composite",
          "source-layer": "roads",
          minzoom: 11,
          maxzoom: 24,
          filter: [
              "all",
              ["!=", ["get", "fclass"], "secondary"],
              ["!=", ["get", "fclass"], "motorway"],
              ["!=", ["get", "fclass"], "primary"],
              ["==", ["geometry-type"], "LineString"],
          ],
          layout: {
              "line-cap": "round",
              "line-join": "round",
          },
          paint: {
              "line-width": {
                  base: 1.5,
                  stops: [
                      [6, 0.3],
                      [10, 0.55],
                      [18, 18],
                  ],
              },
              "line-color": "#152434",
              "line-opacity": 0.2,
          },
      },
      // 主要道路名称
      {
          id: "primary-label",
          type: "symbol",
          source: "composite",
          "source-layer": "roads",
          minzoom: 10,
          maxzoom: 24,
          filter: ["all", ["==", ["get", "fclass"], "primary"]],
          layout: {
              "text-size": {
                  base: 10,
                  stops: [
                      [10, 10],
                      [11, 11],
                      [12, 12],
                      [13, 13],
                      [14, 14],
                  ],
              },
              "text-font": ["Metropolis Light", "Noto Sans Regular"],
              "text-rotation-alignment": "viewport",
              "text-pitch-alignment": "viewport",
              "text-padding": {
                  base: 15,
                  stops: [
                      [10, 15],
                      [11, 15],
                      [12, 15],
                      [13, 20],
                      [14, 20],
                  ],
              },
              "text-field": ["get", "name"],
          },
          paint: {
              "text-color": "rgba(153, 174, 197, 1)",
              "text-halo-color": "rgba(20, 29, 55, 1)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
              "text-opacity": {
                  base: 0.4,
                  stops: [
                      [11, 0.4],
                      [12, 0.6],
                      [13, 1],
                  ],
              },
          },
      },
      // 次要道路名称
      {
          id: "secondary-label",
          type: "symbol",
          source: "composite",
          "source-layer": "roads",
          minzoom: 12,
          maxzoom: 24,
          filter: ["all", ["==", ["get", "fclass"], "secondary"]],
          layout: {
              "text-size": {
                  base: 9,
                  stops: [
                      [13, 10],
                      [14, 11],
                      [15, 12],
                  ],
              },
              "text-font": ["Metropolis Light", "Noto Sans Regular"],
              "text-rotation-alignment": "viewport",
              "text-pitch-alignment": "viewport",
              "text-padding": 20,
              "text-field": ["get", "name"],
          },
          paint: {
              "text-color": "rgba(153, 174, 197, 0.8)",
              "text-halo-color": "rgba(20, 29, 55, 0.8)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
              "text-opacity": {
                  base: 0.3,
                  stops: [
                      [12, 0.4],
                      [13, 0.6],
                      [14, 1],
                  ],
              },
          },
      },
      // 其他道路名称
      {
          id: "ways-label",
          type: "symbol",
          source: "composite",
          "source-layer": "roads",
          minzoom: 14,
          maxzoom: 24,
          filter: [
              "any",
              ["==", ["get", "fclass"], "tertiary"],
              ["==", ["get", "fclass"], "footway"],
              ["==", ["get", "fclass"], "pedestrian"],
              ["==", ["get", "fclass"], "unclassified"],
          ],
          layout: {
              "text-size": 10,
              "text-font": ["Metropolis Light", "Noto Sans Regular"],
              "text-rotation-alignment": "viewport",
              "text-pitch-alignment": "viewport",
              "text-field": ["get", "name"],
              "text-padding": 20,
          },
          paint: {
              "text-color": "hsl(0, 0%, 37%)",
              "text-translate": [0, 2],
          },
      },
      // 省名称
      {
          layout: {
              "text-size": {
                  stops: [
                      [4, 12],
                      [6, 18],
                      [9, 20],
                  ],
              },
              "text-font": ["Metropolis Regular", "Noto Sans Regular"],
              "text-justify": "center",
              visibility: "visible",
              "text-field": ["get", "name"],
          },
          minzoom: 3,
          maxzoom: 12,
          type: "symbol",
          source: "composite",
          id: "province-label",
          paint: {
              "text-color": {
                  stops: [
                      [7, "rgba(126, 150, 180, 0.8)"],
                      [10, "rgba(170, 191, 219, 0.8)"],
                  ],
              },
              "text-halo-color": "rgba(9, 17, 37, 0.8)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
          },
          "source-layer": "province_point",
      },
      // 市名称
      {
          id: "city-label",
          type: "symbol",
          source: "composite",
          "source-layer": "places",
          minzoom: 6,
          maxzoom: 14,
          filter: ["all", ["==", "fclass", "city"]],
          layout: {
              "text-size": {
                  stops: [
                      [7, 9],
                      [11, 16],
                      [14, 18],
                  ],
              },
              "text-transform": "uppercase",
              "text-font": ["Metropolis Regular", "Noto Sans Regular"],
              "text-justify": "center",
              visibility: "visible",
              "text-offset": [0.5, 0.2],
              "text-anchor": {
                  base: 1,
                  stops: [
                      [0, "center"],
                      [1, "center"],
                  ],
              },
              "text-field": ["get", "name"],
              "text-max-width": 10,
              "text-padding": 30,
              "symbol-spacing": 350,
          },
          paint: {
              "text-color": {
                  stops: [
                      [7, "rgba(126, 150, 180, 0.8)"],
                      [10, "rgba(170, 191, 219, 0.8)"],
                  ],
              },
              "text-halo-color": "rgba(9, 17, 37, 0.8)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
          },
      },
      // 镇名称
      {
          id: "town-label",
          type: "symbol",
          source: "composite",
          "source-layer": "places",
          minzoom: 9,
          maxzoom: 14,
          filter: ["all", ["!=", "fclass", "city"]],
          layout: {
              "text-size": {
                  stops: [
                      [5, 12],
                      [9, 8],
                      [16, 15],
                  ],
              },
              "text-transform": "uppercase",
              "text-font": ["Metropolis Regular", "Noto Sans Regular"],
              "text-justify": "left",
              visibility: "visible",
              "text-anchor": {
                  base: 1,
                  stops: [
                      [0, "left"],
                      [8, "center"],
                  ],
              },
              "text-padding": 30,
              "text-field": ["get", "name"],
              "symbol-spacing": 550,
          },
          paint: {
              "text-color": {
                  stops: [
                      [6, "rgba(84, 101, 135, 0.8)"],
                      [10, "rgba(144, 170, 199, 0.8)"],
                      [11, "rgba(153, 174, 197, 0.8)"],
                  ],
              },
              "text-halo-color": "rgba(20, 29, 55, 0.8)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
              "text-opacity": {
                  base: 0.8,
                  stops: [
                      [10, 0.8],
                      [11, 0.3],
                  ],
              },
          },
      },
      // 水域名称
      {
          id: "water-label",
          type: "symbol",
          source: "composite",
          "source-layer": "water_area",
          minzoom: 6,
          maxzoom: 14,
          filter: ["all", ["==", ["get", "fclass"], "water"]],
          layout: {
              "text-size": {
                  stops: [
                      [5, 12],
                      [9, 8],
                      [16, 15],
                  ],
              },
              "text-transform": "uppercase",
              "text-font": ["Metropolis Regular", "Noto Sans Regular"],
              "text-justify": "left",
              visibility: "visible",
              "text-anchor": {
                  base: 1,
                  stops: [
                      [0, "left"],
                      [8, "center"],
                  ],
              },
              "text-padding": 30,
              "text-field": ["get", "name"],
              "symbol-spacing": 550,
          },
          paint: {
              "text-color": {
                  stops: [
                      [6, "rgba(84, 101, 135, 1)"],
                      [10, "rgba(144, 170, 199, 1)"],
                      [11, "rgba(153, 174, 197, 1)"],
                  ],
              },
              "text-halo-color": "rgba(20, 29, 55, 1)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
              "text-opacity": {
                  base: 0.8,
                  stops: [
                      [6, 0.8],
                      [10, 0.5],
                      [11, 0.5],
                  ],
              },
          },
      },
      {
          id: "water-label2",
          type: "symbol",
          source: "composite",
          "source-layer": "water_area",
          minzoom: 9,
          maxzoom: 14,
          layout: {
              "text-size": {
                  stops: [
                      [5, 12],
                      [9, 8],
                      [16, 15],
                  ],
              },
              "text-transform": "uppercase",
              "text-font": ["Metropolis Regular", "Noto Sans Regular"],
              "text-justify": "left",
              visibility: "visible",
              "text-anchor": {
                  base: 1,
                  stops: [
                      [0, "left"],
                      [8, "center"],
                  ],
              },
              "text-padding": 30,
              "text-field": ["get", "name"],
              "symbol-spacing": 550,
          },
          paint: {
              "text-color": {
                  stops: [
                      [6, "rgba(84, 101, 135, 1)"],
                      [10, "rgba(144, 170, 199, 1)"],
                      [11, "rgba(153, 174, 197, 1)"],
                  ],
              },
              "text-halo-color": "rgba(20, 29, 55, 1)",
              "text-halo-width": 1,
              "text-halo-blur": 1,
              "text-opacity": {
                  base: 0.8,
                  stops: [
                      [6, 0.8],
                      [10, 0.5],
                      [11, 0.5],
                  ],
              },
          },
      },
  ],
};
```