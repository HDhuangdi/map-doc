<template>
  <div class="container" ref="root">
    <div id="map-container2"></div>
  </div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css"
import { resolveImage } from "./utils";

import style from "./style.js";
import routeNetwork from "docs/assets/json/hangzhou_route_network.js";

export default {
  data: () => ({
    map: null,
    navigation: null,
    modelId: "",
  }),
  mounted() {
    this.navigation = new arkmap.Navigation(routeNetwork);
    this.map = new arkmap.Map({
      container: "map-container2",
      zoom: 12.39,
      center: [120.15125, 30.31249],
      pitch: 60,
      bearing: -37.6,
      style,
      hash: false,
    });
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
    this.map.on("map.ready", async () => {
      await this.initModel();
      this.pathMoving();
    });
  },
  methods: {
    async initModel() {
      const baseURL = process.env.NODE_ENV === "development" ? "" : "/map-doc";
      const van = await arkmap.loadObj(baseURL + "/map-doc/objs/van.obj");
      const { image } = await resolveImage(
        require("docs/assets/images/van.jpg")
      );
      this.modelId = this.map.add3DModel(van, {
        color: "#fff",
        texture: image,
        rotation: [
          {
            axis: "x",
            angle: Math.PI / 2,
          },
        ],
        scale: 7,
        altitude: 20,
      });
    },
    async pathMoving() {
      const { path } = await this.navigation.findWayFuzzy(
        [120.15534550456039, 30.297456327338125],
        [120.17147272012966, 30.33740368186757]
      );
      const pm = this.map.pathMoving(this.modelId, {
        path,
        speed: 540,
      });
      pm.changeStatus(true);
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  position: relative;
  height: 100%;
  min-height: 500px;
}
#map-container2 {
  height: 100%;
  min-height: 500px;
}
</style>
