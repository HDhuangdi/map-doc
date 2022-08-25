<template>
  <div id="map-container2"></div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "./style.js";
import { resolveImages } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container2",
      zoom: 13.14,
      center: [120.18885, 30.20573],
      pitch: 66,
      bearing: -18.4,
      style,
      hash: false,
      antialias: true,
      devicePixelRatio: 2
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
        roofcolor: "#0b65bb",
        sourceLayer: "building",
        before: "poi-railway-zh",
        heightField: "render_height",
        buildingColor: "#fff",
        mixinStrength: 4,
        light: {
          color: "#0885F4",
          strength: 1.3
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
#map-container2 {
  height: 500px;
}
</style>
