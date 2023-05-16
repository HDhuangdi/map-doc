<template>
  <div id="map-container" ref="root"></div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css"

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
      passiveRendering: true
    });
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
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
            <div style="transform: translate(0, -20px)">
              <p>这是1号打点</p>
              <img src="${require('docs/assets/images/icon.png')}" />
            </div>
          `,
          style: {
            color: "#fff",
            "text-align": "center",
          },
        },
        body: {
          width: 2,
          color: "#FFB557",
        },
        base: {
          image: image,
        },
        coord: [120.20853164716578, 30.25113591444385],
        height: 500,
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
  height: 100%;
  min-height: 500px;
}
</style>
