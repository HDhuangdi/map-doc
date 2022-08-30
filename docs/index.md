---
navbar: false
---

<template>
  <div class="container">
    <div id="map-container"></div>
    <div class="mask"></div>
    <div class="center">
      <h1>ARK MAP</h1>
      <p>新监管态势感知出品</p>
      <div class="buttons">
        <button @click="$router.push('/api-reference/map')">配置指南</button>
        <button @click="$router.push('/guide')">快速入门</button>
      </div>
    </div>
  </div>
</template>

<script>
import "ark-map/dist/ark-map.css";
import style from "./mapStyle.js";
import geojson from "docs/assets/json/hangzhou_motorway.json";

export default {
  data: () => ({
    map: null,
    blur: 50,
    duration: 1000,
    frameId: 0,
    timer: 0
  }),
  mounted() {
    window.devicePixelRatio = 2
    import('ark-map').then(module => {
      const arkmap = module.default
      this.map = new arkmap.Map({
        container: "map-container",
        zoom: 15.7,
        center: [120.233817, 30.305606],
        pitch: 71,
        bearing: 0,
        style,
        hash: false,
        antialias: true,
        fixedZoom: true,
        devicePixelRatio: 2
      });
      this.map.on("map.ready", () => {
        this.addBuildings()
        this.addRoads();
        this.setDOF();
        this.setRotate()
        this.setBreath()
      })
    })
  },
  methods: {
    addRoads() {
      this.map.addSource("hangzhou_motorway", {
        type: "geojson",
        data: geojson,
      });
      this.map.addLayer({
        id: "hangzhou_motorway_layer",
        type: "line",
        source: "hangzhou_motorway",
        layout: {
          "line-join": "miter",
          "line-cap": "butt",
        },
        paint: {
          "line-color": "#f00",
          "line-width": 30,
          "line-opacity": 0.5,
          "line-blur": 50,
          "line-opacity-transition": {
            "duration": this.duration,
            "delay": 0
          }
        },
      }, '3d-buildings');
      this.map.addLayer({
        id: "hangzhou_motorway_layer2",
        type: "line",
        source: "hangzhou_motorway",
        layout: {
          "line-join": "miter",
          "line-cap": "butt",
        },
        paint: {
          "line-color": "#F1401E",
          "line-width": 10,
          "line-opacity": 0.2,
          "line-blur": 5,
 
        },
      }, '3d-buildings');
      this.map.addLayer({
        id: "hangzhou_motorway_layer3",
        type: "line",
        source: "hangzhou_motorway",
        layout: {
          "line-join": "miter",
          "line-cap": "butt",
        },
        paint: {
          "line-color": "#FFD372",
          "line-width": 2,
          "line-opacity": 1,
          "line-blur": 1,
        },
      }, '3d-buildings');
    },
    addBuildings() {
      this.map.addBuildings({
        activeZoom: 9,
        removeZoom: 7,
        opacity: 1,
        sourceLayer: "building",
        heightField: "render_height",
        buildingColor: "#fff",
      });
    },
    setDOF() {
      this.map.setDOF({
        enable: true,
        blurRadius: 8,
        near: 0.55,
        nearRange: 0.1,
        far: 0.65,
        farRange: 0.15,
      });
    },
    setRotate() {
      const bearing = this.map.getBearing();
      this.map.rotateTo(bearing + 0.1, { duration: 0 });
      this.frameId = requestAnimationFrame(() => this.setRotate.call(this, false));
    },
    setBreath() {
      this.blur = 1
      this.map.setPaintProperty('hangzhou_motorway_layer', 'line-opacity', this.blur)
      this.timer = setInterval(() => {
        if (this.blur === 1) {
          this.blur = 0.5
        } else {
          this.blur = 1
        }
        this.map.setPaintProperty('hangzhou_motorway_layer', 'line-opacity', this.blur)
      }, this.duration);
    }
  },
  beforeDestroy() {
    this.map.destroy()
    cancelAnimationFrame(this.frameId)
    clearInterval(this.timer)
  },
};
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 !important;
  #map-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    pointer-events: none;
    background: #000;
    opacity: 0.4;
  }
  .center {
    width: 260px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: 3;
    text-align: center;
    h1 {
      color: #fff;
      font-size: 55px;
      margin-bottom: 20px;
    }
    p{
      margin-top: 0;
      color: #fff;
      margin-bottom: 40px;
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        width: 100px;
        height: 50px;
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;
        &:first-child {
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
        }
        &:last-child {
          background: #4954E6;
          border: 1px solid #4954E6;
          color: #fff;
        }
      }
    }
  }
}
</style>
