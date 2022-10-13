<template>
  <div class="container">
    <div id="map-container2"></div>
  </div>
</template>

<script>
import arkmap from "ark-map";
import { resolveImage } from "./utils";
import "ark-map/dist/ark-map.css";
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
      antialias: true,
      devicePixelRatio: 2,
    });
    this.map.on("map.ready", async () => {
      await this.initModel();
      this.pathMoving();
    });
  },
  methods: {
    async initModel() {
      const van = await arkmap.loadObj("/van.obj");
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
        scale: 0.000004,
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
}
#map-container2 {
  height: 500px;
}
</style>
