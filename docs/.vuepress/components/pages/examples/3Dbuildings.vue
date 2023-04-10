<template>
  <div id="map-container"></div>
</template>

<script>
import arkmap from "@ark-org/map";

import style from "./style.js";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    const modifiedStyle = style
    delete modifiedStyle.light
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 14.97,
      center: [120.21798, 30.20305],
      pitch: 52,
      bearing: -27.8,
      style: modifiedStyle,
      hash: false,
      passiveRendering: true,
    });
    this.map.on("map.ready", () => {
      this.addBuildings();
    });
  },
  methods: {
    addBuildings() {
      this.map.addLayer({
        id: "roof",
        type: "line",
        source: "composite",
        "source-layer": "building_3d",
        paint: {
          "line-altitude": ["get", "height"],
          "line-color": "#fff",
          "line-width": 0.5,
          "line-opacity": 0.1,
        },
      });
      this.map.addBuildings({
        layerId: "bbbbbb",
        activeZoom: 12.9,
        removeZoom: 7,
        opacity: 1,
        sourceLayer: "building_3d",
        heightField: "height",
        before: "place_city_name",
        buildingColor: ["rgba(255, 255, 255, 0.8)", "rgba(53, 77, 127, 0.8)"],
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
  height: 500px;
}
</style>
