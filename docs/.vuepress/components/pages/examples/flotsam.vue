<template>
  <div id="map-container4" ref="root"></div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css"

import style from "./style.js";
import { resolveImages, resolveImage } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container4",
      zoom: 15,
      center: [120.20911, 30.24809],
      pitch: 61,
      bearing: -20,
      style,
      minZoom: 15,
      maxZoom: 15,
      qualityPreset: 'high'
    });
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize()
    });
    resizeObserver.observe(this.$refs.root);
    this.map.on("map.ready", () => {
      this.addBuildings();
      this.snow();
    });
  },
  methods: {
    async addBuildings() {
      const textures = await resolveImages([
        require("docs/assets/images/building9.png"),
        require("docs/assets/images/building10.png"),
        require("docs/assets/images/building12.png"),
        require("docs/assets/images/building11.png"),
        require("docs/assets/images/building13.png"),
        require("docs/assets/images/building14.png"),
      ]);
      this.map.addBuildings({
        textures: textures.slice(0, 6),
        roofcolor: "#777880",
        sourceLayer: "building_3d",
        before: "place_city_name",
        heightField: "height",
        buildingColor: "#fff",
        mixinStrength: 3,
      });
    },
    async snow() {
      const { image } = await resolveImage(
        require("docs/assets/images/snow.png")
      );
      this.map.setFlotsam({
        coord: [120.20853164716578, 30.25113591444385],
        texture: image,
        altitude: 500,
        raduis: 200,
        deathAge: 10,
        perSecond: 500,
        sizeRange: [10, 20],
        speedRange: [1, 2],
      }); // 设置雪花
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
#map-container4 {
  height: 100%;
  min-height: 500px;
}
</style>
