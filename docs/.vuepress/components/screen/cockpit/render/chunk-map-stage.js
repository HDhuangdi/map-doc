import arkmap from '@ark-org/map';
import '@ark-org/map/dist/index.css';
import * as THREE from 'three';

import wallImage from '../assets/images/wall.png';

import 上城区 from '../assets/images/上城区.png';
import 临安区 from '../assets/images/临安区.png';
import 临平区 from '../assets/images/临平区.png';
import 余杭区 from '../assets/images/余杭区.png';
import 富阳区 from '../assets/images/富阳区.png';
import 建德市 from '../assets/images/建德市.png';
import 拱墅区 from '../assets/images/拱墅区.png';
import 桐庐县 from '../assets/images/桐庐县.png';
import 淳安县 from '../assets/images/淳安县.png';
import 滨江区 from '../assets/images/滨江区.png';
import 萧山区 from '../assets/images/萧山区.png';
import 西湖区 from '../assets/images/西湖区.png';
import 钱塘区 from '../assets/images/钱塘区.png';
import hangzhouChildrenJSON from '../assets/json/hangzhou_child.json';
import hangzhouChildrenBorderJSON from '../assets/json/hangzhou_child_border.json';

import { MAP_CHUNK_HEIGHT, STREAMER_ALTITUDE } from './constants';

const mapChunkTextures = [
  { name: '上城区', texture: 上城区 },
  { name: '临安区', texture: 临安区 },
  { name: '临平区', texture: 临平区 },
  { name: '余杭区', texture: 余杭区 },
  { name: '富阳区', texture: 富阳区 },
  { name: '建德市', texture: 建德市 },
  { name: '拱墅区', texture: 拱墅区 },
  { name: '桐庐县', texture: 桐庐县 },
  { name: '淳安县', texture: 淳安县 },
  { name: '滨江区', texture: 滨江区 },
  { name: '萧山区', texture: 萧山区 },
  { name: '西湖区', texture: 西湖区 },
  { name: '钱塘区', texture: 萧山区 },
];

const textureConfig = [
  {
    name: '上城区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '临安区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '临平区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '余杭区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '富阳区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '建德市',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '拱墅区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '桐庐县',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '淳安县',
    repeatParam: [0.0003, 0.0004],
    offsetParam: [0.8, -0.1],
  },
  {
    name: '滨江区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '萧山区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '西湖区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
  {
    name: '钱塘区',
    repeatParam: [0.0004, 0.0004],
    offsetParam: [0.2, 0],
  },
];

export const resolveImage = (src) => new Promise((resolve) => {
  const image = new Image();
  image.src = src;
  image.onload = () => resolve({ image, src });
});

export const resolveImages = async (resources) => {
  const promiseArr = new Array(resources.length);
  resources.forEach((src, index) => {
    promiseArr[index] = resolveImage(src);
  });

  const resArr = await Promise.all(promiseArr);
  return resArr.map((item) => item.image);
};

export default class ChunkMapStage {
  convertLnglatToWorld;

  eventCenter;

  word;

  wall;

  activeHoverChunk = { chunkMesh: null, border: null };

  activeClickChunk = { chunkMesh: null, border: null };

  map;

  unfocusHandler;

  isFocusView = false;

  renderClazz;

  constructor(renderClazz) {
    this.renderClazz = renderClazz;
  }

  onAdd(map, renderer, world, scene, camera) {
    this.map = map;
    // map.on('click', (e) => {
    //   console.log(e.lngLat.lng + ',' + e.lngLat.lat);
    // });
    this.word = world;
    this.convertLnglatToWorld = arkmap.CustomStageUtils.convertLnglatToWorld;
    this.eventCenter = new arkmap.CustomStageUtils.StageMouseEvent(map, camera, scene);
    // this.map.stage.objectsManager.renderTR.texture.encoding = THREE.sRGBEncoding;

    this.addMesh();
    this.addLight();
  }

  addMesh() {
    const highLights = [
      '建德市',
      '富阳区',
      '西湖区',
      '拱墅区',
      '临安区',
      '上城区',
      '滨江区',
      '钱塘区',
    ];
    const textureLoader = new THREE.TextureLoader();
    const g = new THREE.Group();
    const altitude = this.convertLnglatToWorld([0, 0, MAP_CHUNK_HEIGHT]).z;
    const maskAltitude = this.convertLnglatToWorld([0, 0, MAP_CHUNK_HEIGHT + 100]).z;

    for (const feature of hangzhouChildrenJSON.features) {
      const chunkGroup = new THREE.Group();
      g.add(chunkGroup);

      const shp = new THREE.Shape();
      let isFirst = true;
      for (const lnglat of feature.geometry.coordinates[0][0]) {
        const pos = this.convertLnglatToWorld([lnglat[0], lnglat[1]]);
        if (isFirst) {
          isFirst = false;
          shp.moveTo(pos.x, pos.y);
        } else {
          shp.lineTo(pos.x, pos.y);
        }
      }

      const maskGeo = new THREE.ExtrudeGeometry(shp, {
        depth: 0,
      });
      const maskMat = new THREE.MeshBasicMaterial({
        color: '#13BEE8',
        opacity: 0.55,
        transparent: true,
      });
      const mask = new THREE.Mesh(maskGeo, maskMat);
      mask.position.z = maskAltitude;
      mask.name = 'mask';
      mask.visible = false;
      chunkGroup.add(mask);

      if (~highLights.indexOf(feature.properties.name)) {
        const highLightMaskGeo = new THREE.ExtrudeGeometry(shp, {
          depth: 0,
        });
        const highLightMaskMat = new THREE.MeshBasicMaterial({
          color: '#13BEE8',
          opacity: 0.55,
          transparent: true,
        });
        const highLightMask = new THREE.Mesh(highLightMaskGeo, highLightMaskMat);
        highLightMask.position.z = maskAltitude;
        highLightMask.name = 'mask';
        chunkGroup.add(highLightMask);
      }

      const image = mapChunkTextures.find((t) => t.name === feature.properties.name)?.texture;
      const texture = textureLoader.load(image);
      texture.needsUpdate = true;

      const config = textureConfig.find((c) => c.name === feature.properties.name);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(config.repeatParam[0], config.repeatParam[1]);
      texture.offset.set(config.offsetParam[0], config.offsetParam[1]);

      const chunkGeo = new THREE.ExtrudeGeometry(shp, {
        depth: altitude,
      });
      const chunkMat = new THREE.MeshBasicMaterial({ color: '#001D34', opacity: 0.7 });
      const chunk = new THREE.Mesh(chunkGeo, chunkMat);
      chunk.name = feature.properties.name;
      chunk.center = feature.properties.center;
      chunk.maskMesh = mask;
      chunkGroup.add(chunk);
    }
    this.word.add(g);

    const names = [
      '上城区',
      '拱墅区',
      '西湖区',
      '滨江区',
      '萧山区',
      '余杭区',
      '富阳区',
      '临安区',
      '钱塘区',
      '临平区',
      '桐庐县',
      '淳安县',
      '建德市',
    ];
    this.eventCenter.onHover(g, (e, intersects) => {
      if (intersects.length) {
        let firstOfChunk;
        for (const intersect of intersects) {
          if (~names.indexOf(intersect.object.name)) {
            firstOfChunk = intersect.object;
            break;
          }
        }
        this.hoverHandler(firstOfChunk);
      }
    });
    this.eventCenter.onClick(g, (e, intersects) => {
      if (intersects.length) {
        let firstOfChunk;
        for (const intersect of intersects) {
          if (~names.indexOf(intersect.object.name)) {
            firstOfChunk = intersect.object;
            break;
          }
        }
        this.clickHandler(firstOfChunk);
      }
    });
  }

  hoverHandler(mesh) {
    if (!mesh) return;
    const name = mesh.name;
    if (this.activeClickChunk.chunkMesh && this.activeClickChunk.chunkMesh.name === name) return;
    const prevHoverChunk = this.activeHoverChunk;

    if (
      prevHoverChunk.chunkMesh
      && (!this.activeClickChunk.chunkMesh
        || this.activeHoverChunk.chunkMesh.name !== this.activeClickChunk.chunkMesh.name)
    ) {
      this.activeHoverChunk.chunkMesh.maskMesh.visible = false;
    }
    mesh.maskMesh.visible = true;
    if (!this.activeHoverChunk.border) {
      const border = this.addChunkBorder(name);
      this.activeHoverChunk.border = border;
      this.activeHoverChunk.border.name = name;
      this.activeHoverChunk.border.changeStatic(true);
    }
    if (this.activeHoverChunk.border && this.activeHoverChunk.border.name !== name) {
      this.map.removeStreamer(this.activeHoverChunk.border);
      const border = this.addChunkBorder(name);
      this.activeHoverChunk.border = border;
      this.activeHoverChunk.border.name = name;
      this.activeHoverChunk.border.changeStatic(true);
    }
    this.activeHoverChunk.chunkMesh = mesh;
  }

  clickHandler(mesh) {
    if (!mesh) return;
    const name = mesh.name;
    if (this.activeClickChunk.chunkMesh) {
      this.activeClickChunk.chunkMesh.maskMesh.visible = false;
    }
    mesh.maskMesh.visible = true;
    if (!this.activeClickChunk.border) {
      const border = this.addChunkBorder(name);
      this.activeClickChunk.border = border;
      this.activeClickChunk.border.name = name;
      this.activeClickChunk.border.changeStatic(true);
    }
    if (this.activeClickChunk.border && this.activeClickChunk.border.name !== name) {
      this.map.removeStreamer(this.activeClickChunk.border);
      const border = this.addChunkBorder(name);
      this.activeClickChunk.border = border;
      this.activeClickChunk.border.name = name;
      this.activeClickChunk.border.changeStatic(true);
    }
    this.activeClickChunk.chunkMesh = mesh;

    this.focus(mesh);
  }

  async addChunkWall(chunk) {
    const json = hangzhouChildrenBorderJSON.features.find(
      (feature) => feature.properties.name === chunk.name,
    );

    const { image } = await resolveImage(wallImage);
    this.wall = this.map.addWall({
      path: json.geometry.coordinates[0],
      color: '#A5EBFF',
      opacity: 1.2,
      height: 5000,
      flowSpeed: 1,
      flowTexture: image,
      altitude: MAP_CHUNK_HEIGHT,
    });
    this.wall.name = chunk.name;
  }

  focus(chunk) {
    if (this.isFocusView) return;
    this.isFocusView = true;
    this.addChunkWall(chunk);
    this.unfocusHandler = () => {
      this.unfocus();
    };
    this.renderClazz.removeOriginWaterLayer();
    const feature = hangzhouChildrenJSON.features.find(feature => feature.properties.name === chunk.name);
    this.map.focus(
      {
        zoom: feature.properties.zoom || 11.4,
        pitch: feature.properties.pitch || 42,
        bearing: feature.properties.bearing || 0,
        center: feature.properties.center,
        rotation: false,
      },
      () => {
        this.map.once('click', this.unfocusHandler);
      },
    );
  }

  unfocus() {
    this.isFocusView = false;
    this.map.unfocus();
    if (this.activeClickChunk.chunkMesh) {
      this.activeClickChunk.chunkMesh.maskMesh.visible = false;
      this.map.removeStreamer(this.activeClickChunk.border);
      this.activeClickChunk = { chunkMesh: null, border: null };
    }
    if (this.activeHoverChunk.chunkMesh) {
      this.activeHoverChunk.chunkMesh.maskMesh.visible = false;
      this.map.removeStreamer(this.activeHoverChunk.border);
      this.activeHoverChunk = { chunkMesh: null, border: null };
    }
    this.map.removeWall(this.wall);
    this.wall = null;
  }

  addChunkBorder(name) {
    const featureFound = hangzhouChildrenBorderJSON.features.find(
      (feature) => feature.properties.name === name,
    );
    featureFound.geometry.coordinates.forEach((line) => {
      line.forEach((coord) => {
        coord[2] = STREAMER_ALTITUDE;
      });
    });
    const featureCollection = {
      type: 'FeatureCollection',
      features: [featureFound],
    };

    return this.map.addStreamer(featureCollection, {
      lineColor: '#2EDEFD',
      blurRadius: 10,
      blurStrength: 1,
      lineWidth: 5,
      length: 5,
      speed: 2,
    });
  }

  addLight() {
    // const lightCoord1 = [120.13659072284258, 30.614131776399233];
    // const pLight1 = new THREE.PointLight('#fff', 1);
    // const pos1 = this.convertLnglatToWorld([lightCoord1[0], lightCoord1[1], 100000]);
    // pLight1.position.copy(pos1.straight);
    // this.word.add(pLight1);

    const aLight = new THREE.AmbientLight('#fff', 0.4);
    this.word.add(aLight);
  }

  render() {}

  destroy() {}
}
