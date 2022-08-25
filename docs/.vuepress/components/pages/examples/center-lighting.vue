<template>
  <div id="map-container"></div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "./style.js";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 11,
      center: [120.1693, 30.3025],
      pitch: 0,
      style,
      hash: false,
      antialias: true,
      devicePixelRatio: 2,
      vignetting: {
        enable: true,
        lightHeight: 70,
        strength: 4
      },
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
