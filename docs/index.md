---
navbar: false
---

<template>
  <div class="container">
    <div id="map-container"></div>
    <div class="mask"></div>
    <div class="center">
      <h1>地图</h1>
      <p>新监管态势感知出品</p>
      <div class="buttons">
        <button>配置指南</button>
        <button @click="$router.push('/guide')">快速入门</button>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from "comments-map";
import "comments-map/dist/mapbox-gl.css";
import style from "./mapStyle.js";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new mapboxgl.Map({
      container: "map-container",
      zoom: 11,
      center: [120.0971, 30.3032],
      pitch: 0,
      style,
      hash: false,
      antialias: true,
      fixedZoom: true,
      vignetting: {
        enable: false,
      },
    });
  },
  beforeDestroy() {
    this.map.destroy()
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
    opacity: 0.3;
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
