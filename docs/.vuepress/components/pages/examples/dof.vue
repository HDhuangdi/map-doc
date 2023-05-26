<template>
  <div class="container" ref="root">
    <div id="map-container"></div>
  </div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css"

import style from "./style.js";

let map;

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    map = new arkmap.Map({
      container: "map-container",
      zoom: 15.9,
      center: [120.168788, 30.230241],
      pitch: 71,
      bearing: 161.1,
      style,
      qualityPreset: 'high',
      hash: false,
    });
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
    map.on("map.ready", () => {
      this.addBuildings();
      this.setDOF();
    });
  },
  methods: {
    async addBuildings() {
      map.addBuildings({
        activeZoom: 12,
        removeZoom: 7,
        opacity: 1,
        sourceLayer: "building_3d",
        before: "place_city_name",
        heightField: "height",
      });
    },
    setDOF() {
      map.setDOF({
        enable: true,
        blurRadius: 4,
        near: 0.4,
        nearRange: 0.0,
        far: 0.5,
        farRange: 0.3,
      });
    }
  },

  beforeDestroy() {
    if (map) map.destroy();
  },
};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  height: 100%;
  min-height: 500px;
}
#map-container {
  height: 100%;
  min-height: 500px;
}
</style>
