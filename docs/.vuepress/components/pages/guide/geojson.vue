<template>
  <div id="map-container" ref="root"></div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css"

import style from "./quick-start-style.js";
import geojson from "docs/assets/json/hangzhou_motorway.json";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 15,
      center: [120.10603, 30.13324],
      pitch: 61,
      bearing: -17.6,
      style,
      hash: false,
      passiveRendering: true
    });
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
    this.map.on("map.ready", () => {
      this.addRoads();
    });
  },
  methods: {
    addRoads() {
      this.map.addSource("hangzhou_motorway", {
        type: "geojson",
        data: geojson,
      });

      this.map.addLayer({
        id: "hangzhou_motorway_layer",
        type: "line",
        source: "hangzhou_motorway",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#7DF9A6",
          "line-width": {
            stops: [
              [10, 2],
              [15, 10]
            ],
          },
          "line-opacity": 0.6,
          "line-blur": {
            stops: [
              [10, 2],
              [15, 4]
            ],
          },
        },
      });
      this.map.addLayer({
        id: "hangzhou_motorway_layer2",
        type: "line",
        source: "hangzhou_motorway",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#fff",
          "line-width": 1,
          "line-opacity": 1,
          "line-blur": 0,
        },
      });
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
#map-container {
  height: 100%;
  min-height: 500px;
}
</style>
