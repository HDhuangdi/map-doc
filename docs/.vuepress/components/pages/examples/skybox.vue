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
      zoom: 11,
      center: [120.1693, 30.3025],
      pitch: 85,
      style,
      hash: false,
    });
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
    this.map.on("map.ready", () => {
      this.addSkyBox();
    });
  },
  methods: {
    async addSkyBox() {
      const { image } = await resolveImage(require("docs/assets/images/sky.png"));
      this.map.addSkyBox({
        textures: [
          image, // 右
          image, // 左
          image, // 上
          image, // 下
          image, // 前
          image, // 后
        ],
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
