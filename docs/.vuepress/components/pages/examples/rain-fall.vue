<template>
  <div id="map-container2"></div>
</template>

<script>
import arkmap from "ark-map";
import "ark-map/dist/ark-map.css";
import style from "./style.js";
import rainFall from "docs/assets/json/rain_fall.json";
import hangzhou from "docs/assets/json/hangzhou";
import turf from "turf";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

export default {
  data: () => ({
    map: null,
    pointFeats: {
      type: "FeatureCollection",
      features: [],
    },
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container2",
      zoom: 7.96,
      center: [119.617, 29.939],
      pitch: 0,
      bearing: -14.4,
      style,
      hash: false,
      antialias: false,
      qualityPreset: "low"
    });
    this.map.on("map.ready", () => {
      this.dataProcess();
      this.addBoundary();
      this.addHeatMap();
    });
  },
  methods: {
    dataProcess() {
      const polygon = turf.multiPolygon(
        hangzhou.features[0].geometry.coordinates
      );
      rainFall.DS.forEach((item, index) => {
        const row = Math.floor(index / rainFall.lonCount);
        const col = index % rainFall.lonCount;

        const lng = rainFall.startLon + col * rainFall.lonStep;
        const lat = rainFall.startLat + row * rainFall.latStep;
        const point = turf.point([lng, lat]);
        if (booleanPointInPolygon(point, polygon)) {
          const feature = {
            geometry: {
              coordinates: [lng, lat],
              type: "Point",
            },
            type: "Feature",
            properties: {
              value: item,
            },
          };
          this.pointFeats.features.push(feature);
        }
      });
    },
    addBoundary() {
      this.map.addSource("hangzhou", {
        type: "geojson",
        data: hangzhou,
      });
      this.map.addLayer({
        id: "boundary_hangzhou",
        type: "line",
        source: "hangzhou",
        maxzoom: 21,
        layout: {
          visibility: "visible",
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-width": 1,
          "line-opacity": 0.9,
          "line-color": "red",
        },
      });
    },
    addHeatMap() {
      this.map.addSource("pointFeats", {
        type: "geojson",
        data: this.pointFeats,
      });
      this.map.addLayer({
        id: "virus-heatmap",
        type: "heatmap",
        source: "pointFeats",
        maxzoom: 21,
        layout: {
          visibility: "visible",
        },
        paint: {
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "value"],
            0,
            0,
            2,
            1,
          ],
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 1,
            1, 1,
            2, 1,
            3, 1,
            4, 1,
            5, 1,
            6, 2,
            7, 2,
            8, 4,
            9, 5,
            10, 6,
            11, 7,
            12, 8,
            13, 5,
            14, 5,
          ],
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(0, 0, 0, 0)",
            0.25,
            "#B8FEFA",
            0.5,
            "#56DCFA",
            0.75,
            "#56B8FC",
            1,
            "#5597FB",
          ],
          "heatmap-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 1,
            1, 1,
            2, 2,
            3, 3,
            4, 3,
            5, 4,
            6, 4,
            7, 5,
            8, 7,
            9, 15,
            10, 28,
            11, 50,
            12, 100,
            13, 300,
            14, 600,
          ],
          "heatmap-opacity": 0.3,
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
#map-container2 {
  height: 500px;
}
</style>
