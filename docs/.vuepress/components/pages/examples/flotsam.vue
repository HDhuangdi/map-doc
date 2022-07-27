<template>
  <div id="map-container4"></div>
</template>

<script>
import mapboxgl from "comments-map";
import "comments-map/dist/mapbox-gl.css";
import style from "./style.js";
import { resolveImages, resolveImage } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new mapboxgl.Map({
      container: "map-container4",
      zoom: 15,
      center: [120.20911, 30.24809],
      pitch: 61,
      bearing: -20,
      style,
      antialias: true,
      minZoom: 15,
      maxZoom: 15,
      vignetting: {
        enable: true,
        lightHeight: 170,
        strength: 2,
      },
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
      this.snow();
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
      this.map.addBuildings({
        textures: textures.slice(0, 6),
        roofcolor: "#777880",
        sourceLayer: "building",
        before: "poi-railway-zh",
        heightField: "render_height",
        buildingColor: "#fff",
        mixinStrength: 3,
      });
    },
    async snow() {
      const { image } = await resolveImage(require("docs/assets/images/snow.png"));
      this.map.setFlotsam({
        coord: [120.20853164716578, 30.25113591444385],
        texture: image,
        height: 800,
        raduis: 0.0002,
        deathAge: 10,
        perSecond: 400,
        sizeRange: [10, 50],
      }); // 设置雪花
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
#map-container4 {
  height: 500px;
}
</style>
