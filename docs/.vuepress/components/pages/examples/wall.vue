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
      zoom: 13.68,
      center: [120.21386, 30.18575],
      pitch: 66,
      bearing: -49.9,
      style,
      hash: false,
      antialias: false,
      devicePixelRatio: 2,
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
      this.addWall();
      this.addMarker()
    });
  },
  methods: {
    addBuildings() {
      this.map.addBuildings({
        sourceLayer: "building",
        before: "poi-railway-zh",
        heightField: "render_height",
        buildingColor: "#336CBA",
      });
    },
    async addWall() {
      const { image } = await resolveImage(
        require("docs/assets/images/wall.png")
      );
      this.map.addWall({
        path: [
          [120.18407730056299, 30.17904486379676],
          [120.22901298693841, 30.17722034792368],
          [120.23041987863144, 30.19719286530882],
          [120.1836916567915, 30.192806874228083],
          [120.18407730056299, 30.17904486379676],
        ],
        color: "#fff",
        opacity: 1,
        height: 500,
        flowSpeed: 0.006,
        flowTexture: image,
      });
    },
    async addMarker() {
      this.map.addMarker({
        id: "markerTest",
        header: {
          fragment: `
            <p style="font-size: 20px; transform: translateY(30px); color: #4CFFFF">重点关注区域</p>
            <img src="${require('docs/assets/images/marker.png')}" />
          `,
          style: {
            color: "#fff",
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
          },
        },
        body: {
          show: false
        },
        base: {
          show: false
        },
        coord: [120.20662438160196, 30.186494405934937],
        altitude: 200,
        onclick: (e) => {
          console.log(e);
        },
      });
    }
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
