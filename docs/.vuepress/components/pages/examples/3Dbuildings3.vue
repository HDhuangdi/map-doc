<template>
  <div id="map-container3"></div>
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
      container: "map-container3",
      zoom: 13.5,
      center: [120.18478, 30.22992],
      pitch: 54,
      bearing: -86.4,
      style,
      hash: false,
      antialias: true,
      vignetting: {
        enable: true,
        lightHeight: 170,
        strength: 2,
      },
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
    });
  },
  methods: {
    async addBuildings() {
      const textures = await resolveImages([
        require("docs/assets/images/building9.png"),
        require("docs/assets/images/building10.png"),
        require("docs/assets/images/building12.png"),
        require("docs/assets/images/building11.png"),
        require("docs/assets/images/building13.png"),
        require("docs/assets/images/building14.png"),
      ]);
      this.map.addBuildings({
        textures,
        roofcolor: "#49A8E9",
        activeZoom: 12,
        removeZoom: 7,
        sourceLayer: "building",
        before: "poi-railway-zh",
        heightField: "render_height",
        buildingColor: "#fff",
        mixinStrength: 3,
      });
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
#map-container3 {
  height: 500px;
}
</style>
