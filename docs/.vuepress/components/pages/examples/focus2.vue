<template>
  <div class="container">
    <div id="map-container2"></div>
    <button @click="focus">聚焦</button>
  </div>
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
      zoom: 10.26,
      center: [120.1569, 30.2204],
      pitch: 38,
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
        require("docs/assets/images/building9.png"),
        require("docs/assets/images/building10.png"),
        require("docs/assets/images/building12.png"),
        require("docs/assets/images/building11.png"),
        require("docs/assets/images/building13.png"),
        require("docs/assets/images/building14.png"),
      ]);
      this.map.addbuildings({
        textures,
        roofcolor: "auto",
      });
    },
    focus() {
      this.map.once("click", this.map.unfocus);
      this.map.once("wheel", this.map.unfocus);
      this.map.focus(
        {
          center: [120.20853164716578, 30.25113591444385],
          zoom: 15.5,
          pitch: 47,
          lightOptions: {
            enable: true,
          },
        },
        () => {
          console.log("聚焦动画结束");
        }
      );
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  button {
    margin: 10px 0;
    width: 100px;
    height: 30px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    background: #4954e6;
    border: 1px solid #4954e6;
    color: #fff;
  }
}
#map-container2 {
  height: 500px;
}
</style>
