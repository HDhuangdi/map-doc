<template>
  <div id="map-container"></div>
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
      container: "map-container",
      zoom: 16,
      center: [120.20768, 30.25281],
      pitch: 53,
      bearing: -8.6,
      style,
      hash: false,
      antialias: true,
      devicePixelRatio: 2,
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
      this.lightup();
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
        roofcolor: "auto",
        sourceLayer: "building_3d",
        heightField: "height",
        before: "place_city_name",
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
