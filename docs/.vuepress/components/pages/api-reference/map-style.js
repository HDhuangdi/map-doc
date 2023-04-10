import { TILE_SRC, GLYPHS_SRC } from "docs/config";

export default {
  version: 8,
  name: "DARK BLUE CUT",
  metadata: {
    "mapbox:autocomposite": false,
    "mapbox:type": "template",
    "maputnik:renderer": "mbgljs",
    "maptiles:version": "3.x",
  },
  sources: {
    composite: {
      type: "vector",
      attribution: "&copy; DBappSecurity",
      maxzoom: 14,
      minzoom: 0,
      tiles: [TILE_SRC],
    },
  },
  sprite: "",
  glyphs: GLYPHS_SRC,
  light: {
    anchor: "map",
    color: "#fff",
    intensity: 0.6,
    position: [10, 90, 45],
  },
  layers: [
    // 底色、海洋色
    {
      id: "background",
      type: "background",
      layout: { visibility: "visible" },
      paint: { "background-color": "#0B2C43" },
    },
    // 陆地
    {
      id: "land",
      type: "fill",
      source: "composite",
      "source-layer": "land",
      filter: ["all"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#020D22" },
    },
    // 水域
    {
      id: "water",
      type: "fill",
      source: "composite",
      "source-layer": "water_area",
      filter: ["all"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "rgba(11, 44, 67, 1)" },
    },
    {
      id: "landcover_grass",
      type: "fill",
      source: "composite",
      "source-layer": "grass",
      minzoom: 10,
      layout: { visibility: "visible" },
      paint: {
        "fill-color": "rgba(4, 44, 4, 0.93)",
        "fill-outline-color": "hsla(0, 0%, 0%, 0)",
        "fill-antialias": true,
        "fill-opacity": 0.2,
      },
    },
    {
      id: "building",
      type: "fill",
      metadata: {},
      source: "composite",
      "source-layer": "building_3d",
      minzoom: 14,
      layout: {},
      paint: {
        "fill-color": "rgba(22, 38, 63, 1)",
        "fill-outline-color": "hsla(0, 0%, 0%, 0)",
        "fill-antialias": true,
        "fill-opacity": {
          stops: [
            [13, 0.1],
            [18, 0.4],
          ],
        },
      },
    },
    // 高速路引路
    {
      id: "motorway_link",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 7,
      maxzoom: 24,
      filter: ["all", ["==", "fclass", "motorway_link"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-width": {
          base: 1.5,
          stops: [
            [5, 0.25],
            [18, 16],
          ],
        },
        "line-color": {
          stops: [
            [7, "rgba(13, 36, 62, 1)"],
            [10, "rgba(27, 50, 77, 1)"],
            [14, "rgba(29, 55, 87,1)"],
          ],
        },
        "line-opacity": {
          stops: [
            [6, 0.3],
            [10, 0.3],
            [20, 0.7],
          ],
        },
      },
    },
    // 高速路
    {
      id: "motorway",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 7,
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
        "line-color": {
          stops: [
            [7, "rgba(13, 36, 62, 1)"],
            [10, "rgba(27, 50, 77, 1)"],
            [14, "rgba(29, 55, 87,1)"],
          ],
        },
        "line-opacity": {
          stops: [
            [6, 0.3],
            [11, 0.6],
            [14, 0.8],
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
            [6, 0.2],
            [10, 0.6],
            [14, 6],
          ],
        },
        "line-color": {
          stops: [
            [6, "rgba(21, 46, 62, 0.9)"],
            [10, "rgba(33, 65, 83, 0.9)"],
          ],
        },
        "line-opacity": {
          stops: [
            [6, 0.1],
            [12, 0.5],
          ],
        },
      },
    },
    // 一级道路 引路
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
            [8, 0.2],
            [10, 0.75],
            [18, 8],
          ],
        },
        "line-color": "rgba(43, 70, 91, 0.9)",
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
    // 一级道路 隧道
    {
      id: "primary_tunnel_line",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "tunnel", "T"], ["==", "fclass", "primary"]],
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
      id: "primary_tunnel",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "tunnel", "T"], ["==", "fclass", "primary"]],
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
        "text-halo-color": "rgba(20, 29, 55, 1)",
        "text-color": "rgba(157, 187, 217, 1)",
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
            [6, 0.2],
            [12, 0.95],
            [16, 8],
            [20, 38],
          ],
        },
        "line-color": {
          stops: [
            [6, "rgba(12, 32, 50, 1)"],
            [12, "rgba(13, 34, 48, 0.93)"],
            [14, "rgba(17, 40, 56, 0.93)"],
          ],
        },
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
    },
    // 铁路
    {
      id: "railways",
      type: "line",
      source: "composite",
      "source-layer": "railways",
      minzoom: 8,
      maxzoom: 24,
      filter: ["all", ["==", "$type", "LineString"], ["!=", "tunnel", "T"]],
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
    },
    // 都市快速路
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
            [5, 0.1],
            [9, 0.8],
            [18, 14],
          ],
        },
        "line-color": "rgba(22, 45, 67, 1)",
        "line-opacity": 0.6,
      },
    },
    // 都市快速路 引路
    {
      id: "highway_motorway_ramp",
      type: "line",
      source: "composite",
      "source-layer": "roads",
      minzoom: 6,
      maxzoom: 24,
      filter: ["all", ["==", "fclass", "trunk_link"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      paint: {
        "line-width": {
          base: 1.5,
          stops: [
            [5, 0.25],
            [18, 16],
          ],
        },
        "line-color": {
          stops: [
            [7, "rgba(13, 36, 62, 1)"],
            [10, "rgba(27, 50, 77, 1)"],
            [14, "rgba(29, 55, 87,1)"],
          ],
        },
        "line-opacity": {
          stops: [
            [6, 0.3],
            [10, 0.3],
            [20, 0.7],
          ],
        },
      },
    },
    // 城市名称
    {
      id: "place_town_name",
      type: "symbol",
      source: "composite",
      "source-layer": "places",
      minzoom: 12,
      maxzoom: 14,
      filter: ["all", ["==", "fclass", "town"]],
      layout: {
        "text-size": 12,
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
        "text-color": "rgba(170, 191, 219, 0.8)",
        "text-halo-color": "rgba(9, 17, 37, 0.8)",
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
            [11, 13],
            [14, 16],
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
            [4, 12],
            [6, 18],
            [9, 20],
          ],
        },
      },
      paint: {
        "text-color": "rgba(142, 175, 207, 0.8)",
        "text-halo-color": "rgba(20, 29, 55, 0.8)",
        "text-halo-width": 1,
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
      filter: ["all", ["!=", "class", "motorway"]],
      layout: {
        "text-size": {
          stops: [
            [14, 9],
            [17, 15],
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
        "text-color": {
          stops: [
            [13, "rgba(82, 111, 145, 1)"],
            [14, "rgba(147, 172, 209, 1)"],
            [16, "rgba(102, 139, 180, 1)"],
          ],
        },
        "text-translate": [0, 0],
        "text-halo-color": "rgba(15, 37, 65, 1)",
        "text-halo-width": 1,
        "text-halo-blur": 0,
        "text-translate-anchor": "map",
        "text-opacity": {
          stops: [
            [14, 0.6],
            [15, 0.9],
            [18, 0.8],
          ],
        },
      },
    },
    // pois
    {
      id: "poi-level-1-zh",
      type: "symbol",
      source: "composite",
      "source-layer": "pois",
      minzoom: 15,
      layout: {
        "text-padding": 2,
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
        "text-color": {
          stops: [
            [13, "rgba(52, 76, 103, 0.76)"],
            [14, "rgba(146, 165, 191, 0.96)"],
            [16, "rgba(131, 154, 179, 0.96)"],
          ],
        },
        "text-translate": [0, 0],
        "text-halo-color": "rgba(116, 127, 138, 0.64)",
        "text-halo-width": 0,
        "text-halo-blur": 0,
        "text-translate-anchor": "map",
        "text-opacity": {
          stops: [
            [14, 0.4],
            [15, 0.7],
            [18, 0.9],
          ],
        },
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
