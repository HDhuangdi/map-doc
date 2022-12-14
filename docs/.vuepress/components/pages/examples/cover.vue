<template>
  <div id="map-container2"></div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "./style.js";
import { resolveImage } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container2",
      zoom: 13.25,
      center: [120.19731, 30.24484],
      pitch: 65,
      bearing: -60.8,
      style,
      hash: false,
      antialias: true,
    });
    this.map.on("map.ready", () => {
      this.addSkyBox();
      this.addFlyLine();
      this.addCover();
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
    addFlyLine() {
      this.map.addFlyLine({
        src: [120.18, 30.22],
        dest: [120.20987317259807, 30.25286609745055],
        lineColor: "#FB5431",
        backgroundColor: "#000",
        backgroundOpacity: 0,
        size: 10,
        altitude: 2000,
        points: 1000,
      });
    },
    addCover() {
      let sw = new arkmap.LngLat(120.20699429436985, 30.24897095608023);
      let ne = new arkmap.LngLat(120.20987317259807, 30.25286609745055);
      const bounds = new arkmap.LngLatBounds(sw, ne);
      this.map.addCover({
        bounds,
        coverOpacity: 0.8,
        scanOpacity: 1,
        scanWidthFactor: 0.2,
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
