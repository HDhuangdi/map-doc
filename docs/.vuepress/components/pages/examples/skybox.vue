<template>
  <div id="map-container"></div>
</template>

<script>
import mapboxgl from "comments-map";
import "comments-map/dist/mapbox-gl.css";
import style from "./style.js";
import { resolveImage } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new mapboxgl.Map({
      container: "map-container",
      zoom: 11,
      center: [120.1693, 30.3025],
      pitch: 85,
      style,
      hash: false,
      antialias: true,
    });
    this.map.on("map.ready", () => {
      this.addSkyBox();
    });
  },
  methods: {
    async addSkyBox() {
      const { image } = await resolveImage(require("./images/sky.jpg"));
      this.map.addSkyBox({
        textures: [
          image, // 右
          image, // 左
          image, // 上
          image, // 下
          image, // 前
          image, // 后
        ],
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
