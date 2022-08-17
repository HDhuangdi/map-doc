<template>
  <div id="map-container"></div>
</template>

<script>
import mapboxgl from "comments-map";
import "comments-map/dist/mapbox-gl.css";
import style from "./style.js";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new mapboxgl.Map({
      container: "map-container",
      zoom: 1.11,
      center: [23.2, 12.6],
      pitch: 60,
      style,
      hash: false,
      antialias: true,
      devicePixelRatio: 2,
    });
    this.map.on("map.ready", () => {
      this.addFlyLine();
    });
  },
  methods: {
    addFlyLine() {
      this.map.addFlyLine({
        src: [-79.493023, 36.471726],
        dest: [120.20853164716578, 30.25113591444385],
        lineColor: "#FB5431",
        backgroundColor: "#FB5431",
        backgroundOpacity: 0.5,
        size: 5,
        altitude: 6000000,
        points: 10000,
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
