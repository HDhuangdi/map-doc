<template>
  <div id="map-container"></div>
</template>

<script>
import mapboxgl from "comments-map";
import "comments-map/dist/mapbox-gl.css";
import style from "./style.js";
import { resolveImages } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new mapboxgl.Map({
      container: "map-container",
      zoom: 15,
      center: [120.18773, 30.23019],
      pitch: 61,
      bearing: -86.4,
      style,
      hash: false,
      antialias: true,
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
    });
  },
  methods: {
    async addBuildings() {
      this.map.addBuildings({
        activeZoom: 12,
        removeZoom: 7,
        opacity: 0.6,
        sourceLayer: "building",
        before: "poi-railway-zh",
        heightField: "render_height",
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
  height: 500px;
}
</style>
