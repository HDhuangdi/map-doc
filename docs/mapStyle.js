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
          paint: { "background-color": "#1D2F26" },
      },
      //大陆
      {
          id: "land",
          type: "fill",
          layout: {},
          paint: { "fill-color": "#000000" },
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
              "fill-color": "#1D2F26",
          },
      },
      // 河流、江
      {
          id: "waterway",
          type: "line",
          source: "composite",
          "source-layer": "water_ways",
          filter: ["==", "$type", "LineString"],
          paint: { "line-color": "#1D2F26" },
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
              "line-color": "#5A7B6A",
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
                      [10, 0.8],
                      [16, 12],
                      [20, 38],
                  ],
              },
              "line-color": "#537363",
              "line-opacity": {
                  base: 1,
                  stops: [
                      [8, 0.3],
                      [10, 0.3],
                      [11, 0.3],
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
              "line-color": "#537363",
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
              "line-color": "#2C3E35",
              "line-opacity": 0.2,
          },
      },
  ],
};
