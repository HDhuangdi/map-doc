<template>
  <div id="map-container"></div>
</template>

<script>
import arkmap from "@ark-org/map";

import style from "./styles/hzwaterit-screen.js";

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
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
    });
  },
  methods: {
    addBuildings() {
      this.map.addBuildings({
        layerId: "building-layer",
        minzoom: 10,
        opacity: 1,
        sourceLayer: "building_3d",
        heightField: "height",
        before: "border_china",
        buildingColor: "#8BA8C8",
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
