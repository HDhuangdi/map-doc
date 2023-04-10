<template>
  <div class="container">
    <div id="map-container"></div>
    <button @click="clear">清除路线</button>
    <div class="tips">
      <p v-show="!start">请选择起始点</p>
      <p v-show="start && !end">请选择结束点</p>
      <p v-show="start && end">当前路程： {{ distance.toFixed(3) }} km</p>
    </div>
  </div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css"
import { point } from "@turf/helpers";
import distance from "@turf/distance";

import style from "./style.js";
import routeNetwork from "docs/assets/json/hangzhou_route_network.js";

export default {
  data: () => ({
    map: null,
    hovered: null,
    start: null,
    end: null,
    hasLine: false,
    routePointsSourceCache: null,
    distance: 0,
    navigation: null,
  }),
  mounted() {
    this.navigation = new arkmap.Navigation(routeNetwork);
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 14,
      center: [120.20595, 30.25128],
      pitch: 0,
      bearing: 0,
      style,
      hash: false,
      antialias: true,
      
      passiveRendering: true
    });
    this.map.on("click", this.drawPoint.bind(this));
  },
  methods: {
    drawPoint(e) {
      if (this.start && this.end) return;
      
      if (!this.start) {
        this.start = [e.lngLat.lng, e.lngLat.lat];
        this.drawMapPoint("start-point", this.start);
      } else if (!this.end) {
        this.end = [e.lngLat.lng, e.lngLat.lat];
        this.drawMapPoint("end-point", this.end);
      }

      if (this.start && this.end) {
        this.removeMapPoint("start-point");
        this.removeMapPoint("end-point");
        this.drawPath();
      }
    },
    async drawPath() {
      const res = await this.navigation.findWayFuzzy(this.start, this.end);
      this.calcDistance(res.path);
      const json = {
        type: "FeatureCollection",
        name: "path",
        crs: {
          type: "name",
          properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
        },
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: res.path,
            },
          },
        ],
      };
      this.map.addSource("nav-path", {
        type: "geojson",
        data: json,
      });
      this.map.addLayer({
        id: "nav-line",
        type: "line",
        source: "nav-path",
        layout: {
          "line-join": "miter",
          "line-cap": "butt",
        },
        paint: {
          "line-color": "#F1401E",
          "line-width": 5,
          "line-opacity": 1,
          "line-blur": 0,
        },
      });
    },
    drawMapPoint(name, coord) {
      const source = {
        type: "FeatureCollection",
        features: [
          {
            geometry: {
              coordinates: coord,
              type: "Point",
            },
            type: "Feature",
            properties: { coord },
          },
        ],
      };
      this.map.addSource(name, {
        type: "geojson",
        data: source,
        generateId: true,
      });
      this.map.addLayer({
        id: name,
        type: "circle",
        source: name,
        paint: {
          "circle-radius": 10,
          "circle-color": "#F1401E",
        },
      });
    },
    removeMapPoint(name) {
      this.map.removeLayer(name);
      this.map.removeSource(name);
    },
    calcDistance(way) {
      let acc = 0;
      for (let i = 1; i < way.length; i++) {
        const cur = way[i];
        const prev = way[i - 1];
        const point1 = point(prev);
        const point2 = point(cur);
        acc += distance(point1, point2);
      }
      this.distance = acc;
    },
    // 清除
    clear() {
      if (this.map.getLayer("nav-line")) {
        this.map.removeLayer("nav-line");
        this.map.removeSource("nav-path");
      }
      this.start = null;
      this.end = null;
      this.distance = 0;
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
  button {
    margin: 10px 0;
    width: 100px;
    height: 30px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    background: #4954e6;
    border: 1px solid #4954e6;
    color: #fff;
  }
  .tips {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 200px;
    height: 50px;
    background-color: #363b46;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 7px 6px 10px 0px rgba(0, 0, 0, 0.5);
  }
}
#map-container {
  height: 500px;
}
</style>
