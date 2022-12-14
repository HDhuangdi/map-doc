<template>
  <div id="map-container"></div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "./style.js";
import { resolveImage } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 14.24,
      center: [120.20595, 30.25128],
      pitch: 62,
      bearing: -20.8,
      style,
      hash: false,
      antialias: true,
      
      staticDraw: true
    });
    this.map.on("map.ready", () => {
      this.addMarker();
    });
  },
  methods: {
    async addMarker() {
      const { image } = await resolveImage(require('docs/assets/images/base_png.png'))
      this.map.addMarker({
        id: "markerTest",
        header: {
          fragment: `
            <p>这是1号打点</p>
            <img src="${require('docs/assets/images/icon.png')}" />
          `,
          style: {
            color: "#fff",
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
          },
        },
        body: {
          color: "#FFB557",
        },
        base: {
          image: image,
        },
        coord: [120.20853164716578, 30.25113591444385],
        height: 400,
        onclick: (e) => {
          console.log(e);
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
  height: 500px;
}
</style>
