<template>
  <div class="container">
    <div id="map-container"></div>
    <button @click="focus">聚焦</button>
  </div>
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
      zoom: 15.9,
      center: [120.168788, 30.230241],
      pitch: 71,
      bearing: 161.1,
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
        opacity: 1,
        sourceLayer: "building",
        before: "poi-railway-zh",
        heightField: "render_height",
      });
    },
    setDOF() {
      this.map.setDOF({
        enable: true,
        blurRadius: 8,
        near: 0.42,
        nearRange: 0.17,
        far: 0.59,
        farRange: 0.1,
      });
    },
    focus() {
      this.setDOF();
      this.map.once("click", this.unfocus);
      this.map.once("wheel", this.unfocus);
      this.map.focus(
        {
          center: [120.20853164716578, 30.25113591444385],
          zoom: 15.5,
          pitch: 63,
          // rotation: false,
          lightOptions: {
            enable: true,
            height: 70,
          },
        },
        () => {}
      );
    },
    unfocus() {
      this.map.unfocus();
      this.map.setDOF({
        enable: false,
      });
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
#map-container {
  height: 500px;
}
</style>
