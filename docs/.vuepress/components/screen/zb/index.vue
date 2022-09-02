<template>
  <div class="main">
    <div class="header">重大活动安保指挥</div>
    <div id="map"></div>
    <Bottom></Bottom>
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "../style.js";
import Bottom from "./bottom.vue";
import Left from "./left.vue";
import Right from "./right.vue";
import { adapteSize, resolveImages } from "../utils";

export default {
  components: { Bottom, Left, Right },
  data: () => ({
    map: null,
  }),
  mounted() {
    adapteSize();
    this.map = new arkmap.Map({
      devicePixelRatio: 2,
      container: "map",
      zoom: 13.14,
      center: [120.18885, 30.20573],
      pitch: 66,
      bearing: -18.4,
      style,
      hash: true,
      antialias: true,
      fixedZoom: true,
      qualityPreset: "low",
      vignetting: {
        enable: false,
      },
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
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
        textures,
        layerId: "bbbbbb",
        activeZoom: 12.9,
        removeZoom: 7,
        opacity: 1,
        sourceLayer: "building",
        heightField: "render_height",
        before: "poi-railway-zh",
        buildingColor: "#fff",
        mixinStrength: 4,
        roofcolor: "#0b65bb",
        light: {
          color: "#0885F4",
          strength: 1.3,
        },
      });
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less">
// html,body,
#app,
.theme-container,
.page,
.theme-default-content {
  margin: 0 !important;
  padding: 0 !important;
  height: 100% !important;
  width: 100% !important;
  max-width: none !important;
}
</style>
<style lang="less" scoped>
@font-face {
  font-family: "kuhei";
  src: url("~docs/assets/fonts/kuhei.ttf");
}
@font-face {
  font-family: "number";
  src: url("~docs/assets/fonts/DS-DIGIB.ttf");
}
.main {
  margin-top: 0 !important;
  position: relative;
  height: 100%;
  width: 100%;
  .header {
    position: relative;
    z-index: 2;
    height: 92px;
    font-family: kuhei;
    background-image: url(./images/title.png);
    color: rgb(255, 183, 92);
    font-size: 38px;
    font-weight: 400;
    text-align: center;
    line-height: 92px;
  }
  #map {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
