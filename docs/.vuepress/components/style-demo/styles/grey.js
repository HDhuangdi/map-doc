import { TILE_SRC, GLYPHS_SRC } from "docs/config";

export default {
  version: 8,
  name: "apple dark",
  sources: {
    composite: {
      type: "vector",
      attribution: "&copy; hzwaterit",
      maxzoom: 14,
      minzoom: 0,
      tiles: [TILE_SRC],
    },
  },
  sprite: "https://hzwateritzx.com/static/sprite/sprite",
  glyphs: GLYPHS_SRC,
  light: {
    anchor: "map",
    color: "#fff",
    intensity: 0.3,
    position: [1, 45, 20],
  },
  layers: [
    // 底色、海洋色
    {
      id: "background",
      type: "background",
      layout: { visibility: "visible" },
      paint: { "background-color": "#2b2b2b" },
    },
    // 陆地
    {
      id: "land",
      type: "fill",
      source: "composite",
      "source-layer": "land",
      filter: ["all"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#333333" },
    },
    // 水域
    {
      id: "water",
      type: "fill",
      source: "composite",
      "source-layer": "water_area",
      filter: ["all"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#2b2b2b" },
    },
    // 其他道路
    {
      id: "other_roads",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 14,
      filter: [
        "all",
        ["!=", "fclass", "motorway"],
        ["!=", "fclass", "motorway_link"],
        ["!=", "fclass", "primary"],
        ["!=", "fclass", "primary_link"],
        ["!=", "fclass", "secondary"],
        ["!=", "fclass", "secondary_link"],
        ["!=", "fclass", "tertiary"],
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
            [14, 1.5],
            [18, 3],
          ],
        },
        "line-color": "#2b2b2b",
        "line-opacity": 1,
      },
    },
    // 二级道路
    {
      id: "secondary_tertiary_roads",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: [
        "all",
        ["in", "fclass", "secondary", "secondary_link", "tertiary"],
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
            [5, 0.55],
            [12, 3],
            [16, 13],
            [20, 40],
          ],
        },
        "line-color": "#2b2b2b",
        "line-opacity": {
          base: 1,
          stops: [
            [0, 0],
            [6, 0.2],
            [22, 0.95],
          ],
        },
      },
    },
    // 一级道路
    {
      id: "primary_roads",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "fclass", "primary"],
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
            [5, 0.55],
            [12, 3],
            [16, 13],
            [20, 40],
          ],
        },
        "line-color": "#2b2b2b",
        "line-opacity": {
          base: 1,
          stops: [
            [0, 0],
            [6, 0.2],
            [22, 0.95],
          ],
        },
      },
    },
    {
      id: "highway_major_ramp",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "fclass", "primary_link"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-width": {
          base: 1.5,
          stops: [
            [5, 0.55],
            [12, 1],
            [16, 2],
            [20, 10],
          ],
        },
        "line-color": "#2b2b2b",
        "line-opacity": {
          base: 1,
          stops: [
            [8, 0.1],
            [10, 0.2],
            [22, 0.5],
          ],
        },
      },
    },
    // 高速路
    {
      id: "motorway_base",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "fclass", "motorway"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-width": {
          base: 1.5,
          stops: [
            [5, 0],
            [12, 6],
            [16, 18],
            [20, 63],
          ],
        },
        "line-color": "#444",
        "line-opacity": 1,
      },
    },
    {
      id: "motorway",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "fclass", "motorway"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-width": {
          base: 1.5,
          stops: [
            [5, 0.55],
            [12, 4],
            [16, 16],
            [20, 58],
          ],
        },
        "line-color": "#2b2b2b",
        "line-opacity": 1,
      },
    },
    // 都市快速路
    {
      id: "highway_major_trunk_base",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "fclass", "trunk"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-width": {
          base: 1.5,
          stops: [
            [5, 0],
            [12, 6],
            [16, 18],
            [20, 63],
          ],
        },
        "line-color": "#444",
        "line-opacity": 1,
      },
    },
    {
      id: "highway_major_trunk",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "fclass", "trunk"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-width": {
          base: 1.5,
          stops: [
            [5, 0.55],
            [12, 4],
            [16, 8],
            [20, 58],
          ],
        },
        "line-color": "#2b2b2b",
        "line-opacity": 1,
      },
    },
    // 国家名称
    {
      id: "place_country_name",
      type: "symbol",
      source: "composite",
      "source-layer": "places",
      minzoom: 0,
      maxzoom: 2.5,
      filter: ["all", ["==", "fclass", "country"]],
      layout: {
        visibility: "visible",
        "text-field": ["get", "name"],
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-transform": "uppercase",
        "text-size": {
          base: 5,
          stops: [
            [0, 8],
            [2.5, 17],
          ],
        },
        "text-anchor": "center",
      },
      paint: {
        "text-halo-width": 1.4,
        "text-halo-color": "#2b2b2b",
        "text-color": "#666666",
      },
    },
    // 街道名称
    {
      id: "place_town_name",
      type: "symbol",
      source: "composite",
      "source-layer": "places",
      minzoom: 10,
      maxzoom: 14,
      filter: ["all", ["==", "fclass", "town"]],
      layout: {
        "text-size": 11,
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-justify": "center",
        visibility: "visible",
        "text-anchor": "center",
        "text-field": ["get", "name"],
        "text-max-width": 10,
        "text-padding": 20,
        "symbol-spacing": 350,
      },
      paint: {
        "text-halo-color": "#2b2b2b",
        "text-color": "#666666",
        "text-halo-width": 1,
        "text-halo-blur": 1,
      },
    },
    // 城市名称
    {
      id: "place_city_name",
      type: "symbol",
      source: "composite",
      "source-layer": "places",
      minzoom: 5,
      maxzoom: 14,
      filter: ["all", ["==", "fclass", "city"]],
      layout: {
        "text-size": {
          stops: [
            [7, 9],
            [9, 12],
            [11, 25],
            [14, 30],
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
        "text-padding": 20,
        "symbol-spacing": 350,
      },
      paint: {
        "text-halo-color": "#2b2b2b",
        "text-color": {
          stops: [
            [5, "#666666"],
            [8, "#ccc"],
          ],
        },
        "text-halo-width": 2,
        "text-halo-blur": 1,
      },
    },
    // 省名称
    {
      id: "place_province_name",
      type: "symbol",
      source: "composite",
      "source-layer": "places",
      minzoom: 2.5,
      maxzoom: 12,
      filter: ["all", ["==", "fclass", "province"]],
      layout: {
        visibility: "visible",
        "text-field": ["get", "name"],
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "text-transform": "uppercase",
        "text-allow-overlap": true,
        "text-size": {
          stops: [
            [4, 20],
            [6, 25],
            [9, 30],
          ],
        },
      },
      paint: {
        "text-halo-color": "#2b2b2b",
        "text-color": "#666666",
        "text-halo-width": 0.5,
        "text-halo-blur": 1,
      },
    },
    // 道路名称
    {
      id: "road_name",
      type: "symbol",
      source: "composite",
      "source-layer": "roads",
      minzoom: 14,
      maxzoom: 24,
      filter: ["all", ["!=", "fclass", "motorway"]],
      layout: {
        "text-size": {
          stops: [
            [14, 10],
            [17, 20],
            [20, 28],
          ],
        },
        "text-max-angle": 2,
        "text-transform": "uppercase",
        "symbol-spacing": 550,
        "text-font": ["Metropolis Regular", "Noto Sans Regular"],
        "symbol-placement": "line",
        "text-rotation-alignment": "map",
        "text-pitch-alignment": "viewport",
        "text-field": ["get", "name"],
        "text-justify": "center",
        "text-anchor": "center",
        "text-padding": {
          stops: [
            [15, 1],
            [17, 18],
            [20, 150],
          ],
        },
        "text-line-height": 0.21,
        "icon-padding": 2,
        "icon-rotate": 0,
        "text-keep-upright": true,
        "text-letter-spacing": {
          stops: [
            [9, 0.1],
            [16, 0.2],
            [20, 0.3],
          ],
        },
        "text-max-width": 10,
      },
      paint: {
        "text-halo-color": "#2b2b2b",
        "text-color": "#666666",
        "text-translate": [0, 0],
        "text-halo-width": 1,
        "text-halo-blur": 0,
        "text-translate-anchor": "map",
      },
    },
    {
      id: "water_name",
      type: "symbol",
      source: "composite",
      "source-layer": "water_area",
      minzoom: 13,
      layout: {
        "text-field": ["get", "name"],
        "text-rotation-alignment": "viewport",
        "text-padding": 50,
        "text-font": ["Metropolis Medium Italic", "Noto Sans Italic"],
        "text-size": 10,
        visibility: "visible",
      },
      paint: {
        "text-halo-color": "#2b2b2b",
        "text-color": "#666666",
      },
    },
    // pois
    {
      id: "pois_other",
      type: "symbol",
      source: "composite",
      "source-layer": "pois",
      filter: ["all", ["!=", "fclass", "hospital"]],
      minzoom: 14.5,
      layout: {
        "text-padding": {
          stops: [
            [14, 10],
            [15, 2],
          ],
        },
        "text-font": ["Noto Sans Regular"],
        "text-anchor": "top",
        "text-field": ["get", "name"],
        "text-offset": [0, 0.6],
        "text-size": {
          stops: [
            [14, 7],
            [16, 10],
            [18, 12],
          ],
        },
        "text-max-width": 9,
        visibility: "visible",
        "text-rotation-alignment": "auto",
        "text-pitch-alignment": "auto",
      },
      paint: {
        "text-translate": [0, 0],
        "text-halo-width": 1,
        "text-halo-blur": 0,
        "text-translate-anchor": "map",
        "text-halo-color": "#2b2b2b",
        "text-color": "#666666",
      },
    },
    {
      id: "hospital",
      type: "symbol",
      source: "composite",
      "source-layer": "pois",
      filter: ["all", ["==", "fclass", "hospital"]],
      minzoom: 14,
      layout: {
        "text-padding": {
          stops: [
            [14, 10],
            [15, 2],
          ],
        },
        "icon-image": "hospital-11",
        "text-font": ["Noto Sans Regular"],
        "text-anchor": "top",
        "text-field": ["get", "name"],
        "text-offset": [0, 0.8],
        "text-size": {
          stops: [
            [14, 7],
            [16, 10],
            [18, 12],
          ],
        },
        "text-max-width": 9,
        visibility: "visible",
        "text-rotation-alignment": "auto",
        "text-pitch-alignment": "auto",
      },
      paint: {
        "text-color": "rgb(179, 80, 113)",
        "text-translate": [0, 0],
        "text-halo-color": "#CBCFD3",
        "text-halo-width": 1,
        "text-halo-blur": 0,
        "text-translate-anchor": "map",
      },
    },
    // 国界
    {
      id: "border_china",
      type: "line",
      source: "composite",
      "source-layer": "border",
      filter: ["all", ["==", "fclass", "china"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-color": "rgba(93, 124, 164, 0.91)",
        "line-width": {
          base: 1.1,
          stops: [
            [0, 1],
            [3, 2],
            [6, 7],
            [16, 28],
          ],
        },
        "line-blur": {
          base: 1,
          stops: [
            [0, 0.2],
            [22, 1],
          ],
        },
        "line-opacity": 0.8,
      },
    },
  ],
  id: "dark-cut",
  attribution: "&copy; CUT composite&copy; OpenStreetMap contributors",
  description: "CUT composite",
  owner: "CUT",
};
