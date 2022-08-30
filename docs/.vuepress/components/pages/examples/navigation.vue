<template>
  <div class="container">
    <div id="map-container"></div>
    <button @click="clear">清除路线</button>
    <div class="tips">
      <p v-show="!start">请选择起始点</p>
      <p v-show="start && !end">请选择结束点</p>
      <p v-show="start && end">当前路程： {{distance.toFixed(3)}} km</p>
    </div>
  </div>
</template>

<script>
import arkmap from "ark-map";
import { point } from "@turf/helpers";
import distance from "@turf/distance";
import "ark-map/dist/ark-map.css";
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
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 14,
      center: [120.20595, 30.25128],
      pitch: 0,
      bearing: 0,
      style,
      hash: false,
      antialias: true,
      devicePixelRatio: 2,
    });
    this.map.on("map.ready", () => {
      this.addRoutePoints();
      this.registerEvents();
    });
  },
  methods: {
    // 添加路网提示点
    addRoutePoints() {
      let source;
      if (this.routePointsSourceCache) {
        source = this.routePointsSourceCache;
      } else {
        const points = [];
        routeNetwork.features.forEach((feature) => {
          feature.geometry.coordinates.forEach((coord) => {
            points.push({
              geometry: {
                coordinates: coord,
                type: "Point",
              },
              type: "Feature",
              properties: { coord },
            });
          });
        });
        const pointJson = {
          type: "FeatureCollection",
          features: points,
        };
        source = {
          type: "geojson",
          data: pointJson,
          generateId: true,
        };
      }

      this.map.addSource("nav-point", source);
      this.map.addLayer({
        id: "nav-points",
        type: "circle",
        source: "nav-point",
        paint: {
          "circle-radius": {
            stops: [
              [10, 0],
              [14, 5],
              [16, 15],
            ],
          },
          // 如果 feature-state == 1 则为红色，否则为白色
          "circle-color": [
            "case",
            ["==", ["feature-state", "opa"], null],
            "#fff",
            ["==", ["feature-state", "opa"], 1],
            "#F1401E",
            "#fff",
          ],
          "circle-opacity": ["number", ["feature-state", "opa"], 0.1],
        },
      });
    },
    // 注册鼠标事件
    registerEvents() {
      this.map.on("mousemove", (e) => {
        if (this.hasLine) return;
        if (this.hovered) {
          this.map.setFeatureState(this.hovered, {
            opa: 0.1,
          });
        }
      });
      this.map.on("mousemove", "nav-points", (e) => {
        if (this.hasLine) return;
        const features = this.map.queryRenderedFeatures(e.point, {
          layers: ["nav-points"],
        });
        const feature = features[0];
        if (feature.layer.paint["circle-radius"] > 0) {
          this.map.setFeatureState(feature, {
            opa: 1,
          });
        }
        this.hovered = feature;
      });
      this.map.on("click", "nav-points", this.chosePoint.bind(this));
    },
    // 鼠标点击选择路网点
    chosePoint(e) {
      if (this.hasLine) return;
      const features = this.map.queryRenderedFeatures(e.point, {
        layers: ["nav-points"],
      });
      const feature = features[0];
      const coord = JSON.parse(feature.properties.coord);
      let points = [];
      if (this.start && !this.end) {
        this.end = {
          feat: feature,
          coord,
        };
        points = [
          {
            geometry: {
              coordinates: coord,
              type: "Point",
            },
            type: "Feature",
            properties: { coord },
          },
          {
            geometry: {
              coordinates: this.start.coord,
              type: "Point",
            },
            type: "Feature",
            properties: { coord },
          },
        ];
      }
      if (!this.start && !this.end) {
        this.start = {
          feat: feature,
          coord,
        };
        points = [
          {
            geometry: {
              coordinates: coord,
              type: "Point",
            },
            type: "Feature",
            properties: { coord },
          },
        ];
      }
      this.removeLineLayer();
      const source = {
        type: "FeatureCollection",
        features: points,
      };
      this.addLineLayer(source);
      this.hasLine = this.start && this.end;
    },
    // 添加导航路线
    addLineLayer(source) {
      this.map.addSource("two-point-source", {
        type: "geojson",
        data: source,
        generateId: true,
      });
      this.map.addLayer({
        id: "two-point",
        type: "circle",
        source: "two-point-source",
        paint: {
          "circle-radius": 10,
          "circle-color": "#F1401E",
        },
      });
      if (this.start && this.end) {
        if (this.map.getLayer("nav-points")) {
          this.map.removeLayer("nav-points");
          this.map.removeSource("nav-point");
        }
        const navigation = new arkmap.Navigation(routeNetwork);
        const way = navigation.findWay(this.start.coord, this.end.coord);
        this.calcDistance(way);
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
                coordinates: way,
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
      }
    },
    // 移除导航路线
    removeLineLayer() {
      if (this.map.getLayer("two-point")) {
        this.map.removeLayer("two-point");
        this.map.removeSource("two-point-source");
      }
      if (this.map.getLayer("nav-line")) {
        this.map.removeLayer("nav-line");
        this.map.removeSource("nav-path");
      }
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
      this.removeLineLayer();
      this.hasLine = false;
      this.start = null;
      this.end = null;
      this.addRoutePoints();
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
    background-color: #363B46;
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
