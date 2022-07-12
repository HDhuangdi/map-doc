<template>
  <div id="map-container2"></div>
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
      container: "map-container2",
      zoom: 15,
      center: [120.18773, 30.23019],
      pitch: 61,
      bearing: -86.4,
      style,
      hash: false,
      antialias: true,
      vignetting: {
        enable: true,
        lightHeight: 170,
        strength: 2
      },
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
    });
  },
  methods: {
    async addBuildings() {
      const textures = await resolveImages([
        require("./images/building9.png"),
        require("./images/building10.png"),
        require("./images/building12.png"),
        require("./images/building11.png"),
        require("./images/building13.png"),
        require("./images/building14.png"),
      ]);
      this.map.addbuildings({
        textures,
        roofcolor: "auto",
      });
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
#map-container2 {
  height: 500px;
}
</style>
