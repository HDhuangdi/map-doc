<template>
  <div id="map-container"></div>
</template>

<script>
import arkmap from "@ark-org/map";

import style from "./style.js";
import { resolveImage } from "./utils";

export default {
  data: () => ({
    map: null,
  }),
  mounted() {
    this.map = new arkmap.Map({
      container: "map-container",
      zoom: 14.53,
      center: [120.20398, 30.25472],
      pitch: 68,
      bearing: 0,
      style,
      hash: true,
      antialias: true,
    });
    this.map.on("map.ready", () => {
      this.addFlame();
      this.addStars();
      this.addWaterJet();
      this.addFirefly();
    });
    this.map.on("click", (e) => {
      console.log(e);
    });
  },
  methods: {
    async addFlame() {
      const { image } = await resolveImage(
        require("docs/assets/images/smoke.png")
      );
      const emitter = this.map.getParticleEmitter({
        coord: [120.20768, 30.25281],
        altitude: 0,
        texture: image,
        particlesPerSecond: 80,
        particleDeathAge: 2,
        positionRange: {
          center: [0, 0, 0],
          radius: 0,
          phiLimit: [Math.PI / 2, Math.PI / 2],
          thetaLimit: [0, Math.PI * 2],
        },
        directionRange: {
          phiLimit: [-Math.PI / 10, Math.PI / 10],
          thetaLimit: [0, Math.PI * 2],
        },
        speedRange: [5, 6],
        sizeTween: [
          [0, 1, 2],
          [80, 150, 0],
        ],
        colorTween: [
          [0, 1.8, 2],
          ["#946000", "#FF0000", "#756400"],
        ],
        opacityTween: [
          [0, 2],
          [1, 0],
        ],
        blendMode: "NormalBlending",
        depthTest: false,
      });
      emitter.fire();
    },
    async addStars() {
      const { image } = await resolveImage(
        require("docs/assets/images/spark.png")
      );
      const emitter = this.map.getParticleEmitter({
        coord: [120.21211069738536, 30.252747960379494],
        altitude: 0,
        texture: image,
        particlesPerSecond: 400,
        particleDeathAge: 1,
        positionRange: {
          center: [0, 0, 0],
          radius: 2,
          phiLimit: [Math.PI / 2, Math.PI / 2],
          thetaLimit: [0, Math.PI * 2],
        },
        directionRange: {
          phiLimit: [-Math.PI / 10, Math.PI / 10],
          thetaLimit: [0, Math.PI * 2],
        },
        speedRange: [5, 20],
        sizeRange: [40, 50],
        color: "#000",
        colorRangeRadius: 4,
        opacityRange: [0.5, 1],
        blendMode: "AdditiveBlending",
        depthTest: true,
      });
      emitter.fire();
    },
    async addWaterJet() {
      const { image } = await resolveImage(
        require("docs/assets/images/drop.png")
      );
      const emitter = this.map.getParticleEmitter({
        coord: [120.20270585611576, 30.25260449218905],
        altitude: 0,
        texture: image,
        particlesPerSecond: 50,
        particleDeathAge: 2,
        positionRange: {
          center: [0, 0, 0],
          radius: 0,
          phiLimit: [Math.PI / 2, Math.PI / 2],
          thetaLimit: [0, Math.PI * 2],
        },
        directionRange: {
          phiLimit: [-Math.PI / 8, Math.PI / 8],
          thetaLimit: [0, Math.PI * 2],
        },
        speedRange: [8, 8],
        sizeRange: [100, 100],
        color: "#ccc",
        colorRangeRadius: 0.2,
        opacityTween: [
          [0, 2],
          [1, 0],
        ],
        blendMode: "AdditiveBlending",
        depthTest: true,
      });
      emitter.fire();
    },
    async addFirefly() {
      const { image } = await resolveImage(
        require("docs/assets/images/spark.png")
      );
      const emitter = this.map.getParticleEmitter({
        coord: [120.19567426204901, 30.252359932488773],
        altitude: 0,
        texture: image,
        particlesPerSecond: 50,
        particleDeathAge: 4,
        positionRange: {
          center: [0, 0, 0],
          radius: 10,
          phiLimit: [0, Math.PI * 2],
          thetaLimit: [0, Math.PI * 2],
        },
        directionRange: {
          phiLimit: [0, Math.PI * 2],
          thetaLimit: [0, Math.PI * 2],
        },
        speedRange: [0.4, 0.4],
        sizeRange: [20, 50],
        color: "#4DFF99",
        colorRangeRadius: 1,
        opacityTween: [
          [0, 1, 2, 4, ],
          [0, 1, 0.5, 0],
        ],
        blendMode: "NormalBlending",
        depthTest: true,
      });
      emitter.fire();
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
