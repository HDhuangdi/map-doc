import { TILE_SRC, GLYPHS_SRC } from "docs/config";

export default {
  version: 8,
  name: "ARK MAP STYLE",
  metadata: {},
  sources: {
    composite: {
      type: "vector",
      attribution: "&copy; hzwaterit",
      maxzoom: 14,
      minzoom: 0,
      tiles: [TILE_SRC],
    },
  },
  sprite: "",
  glyphs: GLYPHS_SRC,
  light: {
    anchor: "map",
    color: "#D9DBDB",
    intensity: 0,
    position: [10, 90, 70],
  },
  layers: [
    // 底色、海洋色
    {
      id: "background",
      type: "background",
      layout: { visibility: "visible" },
      paint: { "background-color": "#444444" },
    },
    // 陆地
    {
      id: "land",
      type: "fill",
      source: "composite",
      "source-layer": "land",
      filter: ["all"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#1A1A1A" },
    },
    // 水域
    {
      id: "water",
      type: "fill",
      source: "composite",
      "source-layer": "water_area",
      filter: ["all"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#444444" },
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
        "line-color": "#444444",
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
        "line-color": "#444444",
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
        "line-color": "#444",
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
        "line-color": "#444",
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
        "line-color": "#444",
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
        "line-color": "#444",
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
        "line-color": "#444",
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
        "line-color": "#444",
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
        "line-color": "#444",
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
        "line-color": "#444",
        "line-opacity": {
          stops: [
            [6, 0.3],
            [10, 0.3],
            [20, 0.7],
          ],
        },
      },
    }
  ],
  id: "dark-cut",
  attribution: "&copy; CUT composite&copy; OpenStreetMap contributors",
  description: "CUT composite",
  owner: "CUT",
};
