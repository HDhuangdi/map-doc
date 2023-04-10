<template>
  <div id="map-container"></div>
</template>

<script>
import arkmap from "@ark-org/map";

import style from "./styles/apple-dark.js";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 11,
      center: [120.2059, 30.24757],
      pitch: 0,
      bearing: -26.2,
      style,
      hash: false,
      antialias: false,
      
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
    });
  },
  methods: {
    addBuildings() {
      this.map.addBuildings({
        layerId: "bbbbbb",
        minzoom: 15.5,
        opacity: 1,
        sourceLayer: "building_3d",
        heightField: "height",
        before: "pois_other",
        buildingColor: "rgb(75, 101, 142)",
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
