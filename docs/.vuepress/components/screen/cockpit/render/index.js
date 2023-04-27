import arkmap from '@ark-org/map';

import '@ark-org/map/dist/index.css';
import axios from 'axios';

import 制水厂icon from '../assets/images/制水厂.png';
import 制水厂base from '../assets/images/制水厂base.png';
import 污水厂icon from '../assets/images/污水厂.png';
import 污水厂base from '../assets/images/污水厂base.png';
import hangzhouBorderJSON from '../assets/json/hangzhou_border.json';
import originWaterPointsJSON from '../assets/json/points.json';
import waterWorkersJSON from '../assets/json/water_workers.json';
import originWaterLineJSON from '../assets/json/千岛湖引水线路.json';

import '../assets/style/index.css';

import ChunkMapStage from './chunk-map-stage';
import { MAP_CHUNK_HEIGHT, STREAMER_ALTITUDE } from './constants';
import Popup from './popup';
import style from './style';

const originView = {
  zoom: 7.72,
  center: [119.397, 30.363],
  pitch: 46,
  bearing: 0,
};

export default class Render {
  dom;

  chunkMapStage;

  waterWorkerList1 = [];

  waterWorkerList2 = [];

  map;

  markers = [];

  originWaterMakrers = [];

  originWaterLine;

  originWaterStreamer;

  constructor(dom) {
    this.dom = dom;
    window.closeMapPopup = this.closeMapPopup.bind(this);
    this.init();
  }

  initMap() {
    return new Promise((resolve) => {
      this.map = new arkmap.Map({
        container: this.dom,
        ...originView,
        style,
        hash: false,
        qualityPreset: 'high',
        staticDraw: false,
        minTileCacheSize: 10000,
        fps: 60,
      });
      this.map.on('map.ready', () => {
        resolve();
      });
    });
  }

  async init() {
    await this.initMap();
    this.initChunkMapStage();
    this.addHangZhouBorderLayer();
    this.addWaterWorkerMarkers();
    this.addOriginWaterLayer();

    this.getData();
  }

  initChunkMapStage() {
    this.chunkMapStage = new ChunkMapStage(this);
    this.map.addCustomStage(this.chunkMapStage);
  }

  addHangZhouBorderLayer() {
    this.map.addMeshLine(hangzhouBorderJSON, {
      lineWidth: 20,
      color: '#8BB2D9',
      opacity: 1,
      height: 100,
      altitude: MAP_CHUNK_HEIGHT + 300,
    });
  }

  addOriginWaterLayer() {
    originWaterPointsJSON.features.forEach((feature) => {
      const marker = this.map.addMarker({
        id: feature.properties.name,
        type: feature.properties.type,
        maxzoom: 24,
        minzoom: 7,
        header: {
          fragment: `
            <span style="transform: translate(60%, 0);display: inline-block;">${
  feature.properties.name || ''
}</span>
          `,
          style: {
            color: '#fff',
            textAlign: 'center',
          },
          scale: [
            [10, 2.6],
            [9, 2.6],
            [8, 1.5],
            [7, 1],
          ],
        },
        body: {
          show: false,
        },
        base: {
          show: false,
        },
        coord: feature.geometry.coordinates,
        altitude: MAP_CHUNK_HEIGHT + 300,
        height: 0,
      });
      this.originWaterMakrers.push(marker);
    });

    this.originWaterLine = this.map.addMeshLine(originWaterLineJSON, {
      lineWidth: 20,
      color: '#7cb1c9',
      opacity: 1,
      height: 0,
      altitude: MAP_CHUNK_HEIGHT + 500,
    });

    originWaterLineJSON.features.forEach((feature) => {
      feature.geometry.coordinates.forEach((line) => {
        line.forEach((coord) => {
          coord[2] = STREAMER_ALTITUDE;
        });
      });
    });

    this.originWaterStreamer = this.map.addStreamer(originWaterLineJSON, {
      lineColor: '#2EDEFD',
      blurRadius: 10,
      blurStrength: 2,
      lineWidth: 5,
      length: 1,
      speed: 2,
    });
  }

  removeOriginWaterLayer() {
    this.originWaterMakrers.forEach((marker) => {
      this.map.removeMarker(marker);
    });
    this.originWaterMakrers = [];
    this.map.removeMeshLine(this.originWaterLine);
    this.originWaterLine = null;
    this.map.removeStreamer(this.originWaterStreamer);
    this.originWaterStreamer = null;
  }

  addWaterWorkerMarkers() {
    waterWorkersJSON.features.forEach((feature) => {
      const icon = feature.properties.type === '制水厂' ? 制水厂icon : 污水厂icon;
      const base = feature.properties.type === '制水厂' ? 制水厂base : 污水厂base;
      const marker = this.map.addMarker({
        id: feature.properties.name,
        type: feature.properties.type,
        maxzoom: 24,
        minzoom: 8,
        header: {
          fragment: `
            <div class="marker-container">
              <div class="marker-header">
                <img src="${icon}">
                <span>${feature.properties.name}</span>
              </div>
              <img class="marker-footer" src="${base}">
            </div>
          `,
          style: {
            color: '#fff',
            textAlign: 'center',
          },
          scale: [
            [10, 1],
            [9, 0.8],
          ],
        },
        body: {
          show: false,
        },
        base: {
          show: false,
        },
        coord: feature.geometry.coordinates,
        altitude: MAP_CHUNK_HEIGHT + 300,
        height: 0,
        onclick: (e) => {
          const found = this.markers.find(
            (info) => info.marker.options.id === feature.properties.name,
          );
          const paths = e.event.composedPath();
          if (
            !found.popup
            && !paths.find((el) => el.className && ~el.className.indexOf('popup-container'))
          ) {
            found.popup = new Popup(
              found.marker,
              feature.properties,
              feature.properties.type,
              feature.properties.type === '制水厂' ? this.waterWorkerList1 : this.waterWorkerList2,
            );
          }
        },
      });
      this.markers.push({
        marker,
      });
    });
  }

  closeMapPopup(id) {
    const found = this.markers.find((e) => e.popup && e.popup.id === id);
    found.popup.close();
    delete found.popup;
  }

  resize() {
    if (this.map) this.map.resize();
  }

  hideMarker(type, value) {
    this.markers.forEach(({ marker }) => {
      if (marker.options.type === type) {
        marker.setVisible(value);
      }
    });
  }

  getData() {
    this.getWaterWorkerList1();
    this.getWaterWorkerList2();
  }

  async getWaterWorkerList1() {
    const res = await axios.post('http://172.16.70.85:8080/HZSWDD/data2Cockpit/sewageFactoryData');
    this.waterWorkerList1 = res.data.data;
  }

  async getWaterWorkerList2() {
    const res = await axios.post('http://172.16.70.85:8080/HZSWDD/data2Cockpit/waterFactoryData');
    this.waterWorkerList2 = res.data.data;
  }

  resetView() {
    if (!this.originWaterLine) {
      this.addOriginWaterLayer();
    }
    this.chunkMapStage.unfocus();
    if (this.chunkMapStage.unfocusHandler) {
      this.map.off('click', this.chunkMapStage.unfocusHandler);
    }
    this.map.flyTo({
      ...originView,
    });
  }
}
