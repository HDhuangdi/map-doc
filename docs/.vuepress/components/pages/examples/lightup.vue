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
      zoom: 16,
      center: [120.20768, 30.25281],
      pitch: 53,
      bearing: -8.6,
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
      this.lightup();
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
    lightup() {
      this.map.lightUpBuilding({
        coord: [120.20853164716578, 30.25113591444385],
        color: "yellow",
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
