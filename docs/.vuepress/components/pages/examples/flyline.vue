<template>
  <div id="map-container" ref="root"></div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css"

import style from "./style.js";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 1.11,
      center: [23.2, 12.6],
      pitch: 60,
      style,
      hash: false,
    });
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
    this.map.on("map.ready", () => {
      this.addFlyLine();
    });
  },
  methods: {
    addFlyLine() {
      this.map.addFlyLine({
        src: [-79.493023, 36.471726],
        dest: [120.20853164716578, 30.25113591444385],
        lineColor: "#FB5431",
        backgroundColor: "#FB5431",
        backgroundOpacity: 1,
        size: 5,
        altitude: 6000000,
        points: 10000,
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
