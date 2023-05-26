<template>
  <div id="map-container1" ref="root"></div>
</template>

<script>
import arkmap from "@ark-org/map";
import "@ark-org/map/dist/index.css";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";;

import style from "./map-style.js";

const baseURL = process.env.NODE_ENV === "development" ? "" : "/map-doc";

class MyStage1 {
  constructor() {
    this.id = "my-stage1";
    this.type = "normal";
  }
  onAdd(map, renderer, world, scene, camera, offscreenTexture) {
    this.map = map;
    this.renderer = renderer;
    this.scene = scene;
    this.world = world;
    this.camera = camera;
    this.convertLnglatToWorld = arkmap.CustomStageUtils.convertLnglatToWorld;
    offscreenTexture.encoding = THREE.sRGBEncoding;
    this.initLight();
    this.initModel();
  }

  initLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.scene.add(directionalLight);
    directionalLight.position.set(1, 0, 1);
  }

  initModel() {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(baseURL + "/map-doc/draco/gltf/");
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      baseURL + "/map-doc/objs/LittlestTokyo.glb",
      (gltf) => {
        this.model = gltf.scene;
        const pos = this.convertLnglatToWorld([
          120.21432132365726, 30.25057239198013, 70,
        ]);
        this.model.position.copy(pos);
        this.model.scale.set(0.01, 0.01, 0.01);
        this.model.rotateX(Math.PI / 2);
        this.model.rotateY(Math.PI / 3 - Math.PI);
        this.world.add(this.model);

        this.mixer = new THREE.AnimationMixer(this.model);
        this.mixer.clipAction(gltf.animations[0]).play();
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );
  }

  render(delta) {
    if (!this.mixer) return;
    this.mixer.update(delta / 1000);
  }

  destroy() {
    console.log("销毁");
  }
}

export default {
  data: () => ({
    map: null,
  }),
  async mounted() {
    await this.initMap();
    this.addBuildings();
    this.addStage();
    const resizeObserver = new ResizeObserver(() => {
      this.map.resize();
    });
    resizeObserver.observe(this.$refs.root);
  },
  methods: {
    initMap() {
      return new Promise((resolve) => {
        this.map = new arkmap.Map({
          container: "map-container1",
          zoom: 16.89,
          center: [120.214268, 30.25064],
          pitch: 46,
          bearing: -16.4,
          style,
          hash: false,
          qualityPreset: "high",
          passiveRendering: false,
        });
        this.map.on("map.ready", resolve);
      });
    },
    addBuildings() {
      this.map.addBuildings({
        layerId: "building-layer",
        opacity: 1,
        sourceLayer: "building_3d",
        heightField: "height",
        before: "border_china",
        buildingColor: "#fff",
        roofcolor: "#21414B",
      });
    },
    addStage() {
      this.map.addCustomStage(new MyStage1());
    },
  },
  beforeDestroy() {
    if (this.map) this.map.destroy();
  },
};
</script>

<style lang="less" scoped>
#map-container1 {
  height: 100%;
  min-height: 500px;
}
</style>
