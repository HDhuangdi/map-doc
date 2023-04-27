<template>
  <div class="container">
    <img class="header" src="./assets/images/header.png">
    <div ref="mapContainer" class="arkmap-container" />
    <div class="mask mask-left" />
    <div class="mask mask-right" />
    <Left></Left>
    <Right></Right>
    <Stat></Stat>
    <div class="controls">
      <img
        src="./assets/images/layer.png"
        alt=""
        @click="layerControlPopupVisible = !layerControlPopupVisible"
      />
      <img src="./assets/images/origin.png" alt="" @click="resetView" />
    </div>
    <div v-show="layerControlPopupVisible" class="layer-popup">
      <div class="layer-popup-header">
        <div class="layer-popup-title">
          <span>图层信息</span>
          <img src="./assets/images/popup-header.png" alt="" />
        </div>
        <img
          src="./assets/images/close.png"
          class="close"
          alt=""
          @click="layerControlPopupVisible = false"
        />
      </div>
      <div class="layer-popup-body">
        <div class="layer-item" @click="layerControl('制水厂')">
          <div>
            <img src="./assets/images/layer-icon1.png" alt="" />
            <span>点位1</span>
          </div>
          <div
            class="check-box"
            :class="{ checked: waterWorkerLayer1Visible }"
          />
        </div>
        <div class="layer-item" @click="layerControl('净水厂')">
          <div>
            <img src="./assets/images/layer-icon2.png" alt="" />
            <span>点位2</span>
          </div>

          <div
            class="check-box"
            :class="{ checked: waterWorkerLayer2Visible }"
          />
        </div>
        <div class="layer-item" @click="layerControl('泵站')">
          <div>
            <img src="./assets/images/layer-icon3.png" alt="" />
            <span>点位3</span>
          </div>

          <div
            class="check-box"
            :class="{ checked: pumpStationLayerVisible }"
          />
        </div>
        <div class="layer-item" @click="layerControl('液位点')">
          <div>
            <img src="./assets/images/layer-icon4.png" alt="" />
            <span>点位4</span>
          </div>

          <div class="check-box" :class="{ checked: pointLayerVisible }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Render from "./render/index";
import { adapteSize, resolveImages } from "../utils";
import Left from './components/left.vue'
import Right from './components/right.vue'
import Stat from './components/stat.vue'

let map;

export default {
  components: {
    Left,
    Right,
    Stat
  },
  data() {
    return {
      waterWorkerLayer1Visible: true,
      waterWorkerLayer2Visible: true,
      pumpStationLayerVisible: false,
      pointLayerVisible: false,
      layerControlPopupVisible: false
    };
  },
  mounted() {
    adapteSize();
    this.initChart();
  },
  methods: {
    initChart() {
      if (this.$refs.mapContainer) {
        map = new Render(this.$refs.mapContainer);
      }
    },
    layerControl(type) {
      switch (type) {
        case "制水厂":
          this.waterWorkerLayer1Visible = !this.waterWorkerLayer1Visible;
          map.hideMarker(type, this.waterWorkerLayer1Visible);
          break;
        case "净水厂":
          this.waterWorkerLayer2Visible = !this.waterWorkerLayer2Visible;
          map.hideMarker(type, this.waterWorkerLayer2Visible);
          break;
        case "泵站":
          this.pumpStationLayerVisible = !this.pumpStationLayerVisible;
          map.hideMarker(type, this.pumpStationLayerVisible);
          break;
        case "液位点":
          this.pointLayerVisible = !this.pointLayerVisible;
          map.hideMarker(type, this.pointLayerVisible);
          break;
        default:
          break;
      }
    },
    resetView() {
      map.resetView();
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: 优设标题黑;
  src: url(./assets/fonts/PangMenZhengDaoBiaoTiTi-1.ttf);
}
.container {
  width: 100%;
  height: 100%;
  margin-top: 0 !important;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 !important;
  .header {
    position: absolute;
    top: 0;
    z-index: 3;
  }
  .mask {
    width: 580px;
    height: 1080px;
    position: absolute;
    top: 0;
    z-index: 2;
    pointer-events: none;
  }
  .mask-left {
    left: 0;
    background: linear-gradient(
      -90deg,
      rgba(1, 7, 14, 0) 0%,
      rgba(1, 7, 14, 0.8) 51%,
      #01070e 100%
    );
  }
  .mask-right {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(1, 7, 14, 0) 0%,
      rgba(1, 7, 14, 0.8) 51%,
      #01070e 100%
    );
  }
}
.arkmap-container {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
}
.controls {
  position: absolute;
  left: 460px;
  top: 915px;
  display: flex;
  flex-direction: column;
  z-index: 4;
  img {
    width: 48px;
    cursor: pointer;
    &:last-child {
      margin-top: 12px;
    }
  }
}
.layer-popup {
  width: 320px;
  height: 172px;
  position: absolute;
  left: 522px;
  top: 790px;
  background-image: url(./assets/images/popup-bg2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 12px;
  box-sizing: border-box;
  z-index: 999;
}
.layer-popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .layer-popup-title {
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    span {
      position: relative;
      z-index: 2;
    }
    img {
      position: absolute;
      width: 120px;
      left: 0;
      bottom: 0;
    }
  }
  .close {
    cursor: pointer;
    width: 20px;
  }
}
.layer-popup-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .layer-item {
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    cursor: pointer;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
    height: 32px;
    background: linear-gradient(270deg, rgba(37, 70, 80, 0.8) 0%, #2a7b95 100%);
    border-radius: 2px;
    border: 1px solid;
    border-image: linear-gradient(
        270deg,
        rgba(66, 172, 205, 0),
        rgba(57, 166, 201, 1)
      )
      1 1;
    padding: 9px;
    box-sizing: border-box;
    img {
      width: 15px;
      font-size: 14px;
    }
    span {
      display: inline-block;
      margin-left: 8px;
      font-size: 14px;
    }
    .check-box {
      width: 12px;
      height: 12px;
      background: rgba(41, 89, 127, 0);
      border-radius: 2px;
      border: 1px solid;
      border-image: linear-gradient(
          270deg,
          rgba(167, 250, 255, 0.2),
          rgba(193, 240, 255, 0.7)
        )
        1 1;
      &.checked {
        border: 0;
        background: #2edefd;
        position: relative;
        &::after {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          content: "√";
          font-size: 10px;
          text-align: center;
          line-height: 12px;
        }
      }
    }
  }
}
</style>
