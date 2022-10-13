<template>
  <div id="map-container"></div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "./quick-start-style.js";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 12,
      center: [120.18773, 30.23019],
      pitch: 43,
      style,
      hash: false,
      antialias: true,
      fixedZoom: true,
      devicePixelRatio: 2,
      staticDraw: true
    });
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
