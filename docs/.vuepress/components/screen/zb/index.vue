<template>
  <div class="main">
    <div class="header">重大活动安保</div>
    <div id="map"></div>
    <Bottom></Bottom>
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import arkmap from "@ark-org/map";

import style from "../style.js";
import Bottom from "./bottom.vue";
import Left from "./left.vue";
import Right from "./right.vue";
import roads from "./roads";
import units from "./units";
import { adapteSize, resolveImages } from "../utils";

export default {
  components: { Bottom, Left, Right },
  data: () => ({
    map: null,
  }),
  mounted() {
    adapteSize();
    this.map = new arkmap.Map({
      container: "map",
      zoom: 13.14,
      center: [120.18885, 30.20573],
      pitch: 66,
      bearing: -18.4,
      style,
      hash: false,
      antialias: false,
      qualityPreset: "high",
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
      this.addStreamers();
      this.addMarkers();
    });
    this.map.on("click", (e) => {
      console.log(e);
    });
  },
  methods: {
    async addBuildings() {
      const textures = await resolveImages([
        require("docs/assets/images/building9.png"),
        require("docs/assets/images/building10.png"),
        require("docs/assets/images/building11.png"),
        require("docs/assets/images/building12.png"),
        require("docs/assets/images/building13.png"),
        require("docs/assets/images/building14.png"),
      ]);
      this.map.addBuildings({
        maxzoom: 22,
        textures,
        layerId: "bbbbbb",
        opacity: 1,
        sourceLayer: "building_3d",
        heightField: "height",
        before: "border_china",
        buildingColor: "#fff",
        mixinStrength: 1.5,
        roofcolor: "#21414B",
        vignetting: true,
        light: {
          color: "#0885F4",
          strength: 1.3,
        },
      });
    },
    addStreamers() {
      this.map.addStreamer(roads, {
        lineColor: "#0098FF",
        blurRadius: 10,
        blurStrength: 3,
        length: 0.5,
        minLength: 1000,
        lineWidth: 2,
        speed: 0.5
      });
    },
    async addMarkers() {
      const bases = await resolveImages([
        require("./images/base.png"),
        require("./images/base_danger.png"),
      ]);
      units.forEach((unit) => {
        this.map.addMarker({
          id: "markerTest",
          header: {
            fragment: `
              <p>${unit.name}</p>
              <img src=${
                unit.type === "danger"
                  ? require("./images/marker_icon_danger.png")
                  : require("./images/marker_icon.png")
              } />
            `,
            style: {
              color: "#fff",
              "text-align": "center",
            },
          },
          body: {
            width: 1.5,
            color: unit.type === "danger" ? "red" : "#FFB557",
            depthTest: true,
          },
          base: {
            image: unit.type === "danger" ? bases[1] : bases[0],
            depthTest: true,
          },
          coord: unit.lnglat,
          doublePrecision: true,
          height: 400,
          onclick: (e) => {
            console.log(e);
          },
        });
      });
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

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
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 !important;
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
