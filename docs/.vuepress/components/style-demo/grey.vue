<template>
  <div id="map-container" ref="root"></div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css";

import style from "./styles/grey.js";

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
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
    this.map.on("map.ready", () => {
      this.addBuildings();
    });
  },
  methods: {
    addBuildings() {
      this.map.addBuildings({
        layerId: "building-layer",
        minzoom: 15.5,
        opacity: 1,
        sourceLayer: "building_3d",
        heightField: "height",
        before: "pois_other",
        buildingColor: "rgb(236, 236, 234)",
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
