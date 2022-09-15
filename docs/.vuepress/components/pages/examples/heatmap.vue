<template>
  <div id="map-container1"></div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "./style.js";
import json from "docs/assets/json/heatmap.json";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container1",
      zoom: 2.31,
      center: [110.61, 37.23],
      pitch: 16,
      bearing: -8.8,
      style,
      hash: false,
      antialias: true,
      devicePixelRatio: 2,
    });
    this.map.on("map.ready", () => {
      this.map.addSource("heatmap-data", { type: "geojson", data: json });
      this.addHeatMap();
    });
  },
  methods: {
    addHeatMap() {
      this.map.addLayer({
        id: "virus-heatmap",
        type: "heatmap",
        source: "heatmap-data",
        maxzoom: 21,
        layout: {
          visibility: "visible",
        },
        paint: {
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "new_diagnosis"],
            0,
            0,
            1000,
            1,
          ],
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            3,
            9,
            5,
          ],
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(0, 0, 0, 0)",
            0.1,
            "#927903",
            0.15,
            "#ffd403",
            1,
            "red",
          ],
          "heatmap-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            2,
            1,
            4,
            2,
            8,
            3,
            16,
            4,
            16,
            5,
            16,
            6,
            16,
            7,
            16,
            8,
            16,
            9,
            32,
            10,
            64,
            11,
            128,
            12,
            256,
            13,
            512,
            14,
            1024,
          ],
          "heatmap-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            1,
            1,
            1,
            2,
            1,
            3,
            1,
            4,
            1,
            5,
            1,
            6,
            1,
            7,
            1,
            8,
            1,
            9,
            1,
            10,
            1,
            11,
            0.7,
            12,
            0.6,
            13,
            0.4,
            14,
            0.3,
          ],
        },
      });
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
#map-container1 {
  height: 500px;
}
</style>
