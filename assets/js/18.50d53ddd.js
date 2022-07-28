(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{243:function(t,e,o){"use strict";e.a={version:8,name:"Navigation",sources:{composite:{attribution:"&copy; DAS-Security",minzoom:0,maxzoom:15,tiles:["http://10.50.2.89:8848/tile/{z}/{x}/{y}.pbf"],type:"vector"}},glyphs:"https://camap.91ctf.com/fonts/{fontstack}/{range}.pbf",light:{anchor:"map",color:"white",intensity:.7,position:[10,90,45]},layers:[{id:"background",type:"background",layout:{visibility:"visible"},paint:{"background-color":"rgba(11, 44, 67, 1)"}},{id:"land",type:"fill",layout:{},paint:{"fill-color":"rgba(2, 13, 35, 1)"},"source-layer":"land",source:"composite"},{id:"water",type:"fill",source:"composite","source-layer":"water_area",layout:{},paint:{"fill-color":"rgba(11, 44, 67, 1)"}},{id:"waterway",type:"line",source:"composite","source-layer":"water_ways",filter:["==","$type","LineString"],paint:{"line-color":"rgb(27 ,27 ,29)"}},{id:"china_boundary",type:"line",source:"composite","source-layer":"china_boundary",layout:{"line-cap":"round","line-join":"round",visibility:"visible"},maxzoom:3,paint:{"line-color":{stops:[[1,"rgba(37, 58, 83, 0.91)"],[10,"rgba(57, 84, 118, 0.91)"]]},"line-width":{base:1.1,stops:[[0,.5],[6,3],[16,6]]},"line-blur":{base:1,stops:[[0,.2],[22,1]]},"line-opacity":1}},{id:"boundary_state",type:"line",source:"composite","source-layer":"province_boundary",minzoom:3,layout:{visibility:"visible","line-cap":"round","line-join":"round"},paint:{"line-dasharray":{stops:[[6,[10,5]],[10,[4,2]]]},"line-width":{base:1,stops:[[7,.5],[9,1.5],[16,3.5]]},"line-opacity":{base:1,stops:[[7,.7],[16,.9]]},"line-color":{stops:[[6,"rgba(144, 168, 203, 0.73)"],[10,"rgba(144, 168, 203, 0.82)"]]}}},{minzoom:5,layout:{"line-cap":["step",["zoom"],"butt",8,"round"],"line-join":["step",["zoom"],"miter",8,"round"]},filter:["all",["==","fclass","motorway"]],type:"line",source:"composite",id:"motorway-navigation",paint:{"line-width":{base:1.5,stops:[[14,.5],[18,6]]},"line-color":"rgba(77, 97, 114, 0.77)","line-opacity":{base:1,stops:[[0,0],[11,.3],[22,.5]]}},"source-layer":"roads"},{id:"motorway-label",type:"symbol",source:"composite","source-layer":"roads",minzoom:9,filter:["all",["==","fclass","motorway"]],layout:{"text-size":{stops:[[9,11],[10,12],[12,13]]},"text-font":["Metropolis Light","Noto Sans Regular"],"text-field":["get","name"],"text-padding":{base:20,stops:[[10,20],[11,40],[12,100],[13,100],[14,100]]}},paint:{"text-color":"rgba(153, 174, 197, 1)","text-halo-color":"rgba(20, 29, 55, 1)","text-halo-width":1,"text-halo-blur":1}},{minzoom:7,layout:{"line-cap":["step",["zoom"],"butt",11,"round"],"line-join":["step",["zoom"],"miter",11,"round"]},filter:["all",["==",["get","fclass"],"primary"],["==",["geometry-type"],"LineString"]],type:"line",source:"composite",id:"road-primary",paint:{"line-width":{base:1.5,stops:[[8,.4],[10,1.75],[16,12],[20,38]]},"line-color":"rgba(25, 49, 62, 0.86)","line-opacity":{base:1,stops:[[8,.3],[10,.4],[22,.7]]}},"source-layer":"roads"},{id:"primary-tunnel-line",type:"line",source:"composite","source-layer":"roads",minzoom:7,filter:["all",["==",["geometry-type"],"LineString"],["==",["get","tunnel"],"T"],["==",["get","fclass"],"primary"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-dasharray":[2,3],"line-width":{base:1,stops:[[11,.55],[16,2.5]]},"line-opacity":{base:1,stops:[[9,.3],[16,.9]]},"line-color":"rgba(123, 135, 155, 1)"}},{id:"primary-tunnel",type:"line",source:"composite","source-layer":"roads",minzoom:7,filter:["all",["==",["geometry-type"],"LineString"],["==",["get","tunnel"],"T"],["==",["get","fclass"],"primary"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[8,.4],[10,1.55],[18,20]]},"line-color":"rgba(58, 71, 83, 1)","line-opacity":{base:1,stops:[[8,.2],[10,.4],[22,.7]]}}},{id:"highway_major_secondary",type:"line",source:"composite","source-layer":"roads",minzoom:10,maxzoom:24,filter:["all",["==",["get","fclass"],"secondary"],["==",["geometry-type"],"LineString"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":{base:1.5,stops:[[6,.3],[10,.55],[18,18]]},"line-color":"#152434","line-opacity":{base:1,stops:[[0,0],[6,.3],[22,.55]]}}},{id:"ways",type:"line",source:"composite","source-layer":"roads",minzoom:11,maxzoom:24,filter:["all",["!=",["get","fclass"],"secondary"],["!=",["get","fclass"],"motorway"],["!=",["get","fclass"],"primary"],["==",["geometry-type"],"LineString"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-width":{base:1.5,stops:[[6,.3],[10,.55],[18,18]]},"line-color":"#152434","line-opacity":.2}},{id:"primary-label",type:"symbol",source:"composite","source-layer":"roads",minzoom:10,maxzoom:24,filter:["all",["==",["get","fclass"],"primary"]],layout:{"text-size":{base:10,stops:[[10,10],[11,11],[12,12],[13,13],[14,14]]},"text-font":["Metropolis Light","Noto Sans Regular"],"text-rotation-alignment":"viewport","text-pitch-alignment":"viewport","text-padding":{base:15,stops:[[10,15],[11,15],[12,15],[13,20],[14,20]]},"text-field":["get","name"]},paint:{"text-color":"rgba(153, 174, 197, 1)","text-halo-color":"rgba(20, 29, 55, 1)","text-halo-width":1,"text-halo-blur":1,"text-opacity":{base:.4,stops:[[11,.4],[12,.6],[13,1]]}}},{id:"secondary-label",type:"symbol",source:"composite","source-layer":"roads",minzoom:12,maxzoom:24,filter:["all",["==",["get","fclass"],"secondary"]],layout:{"text-size":{base:9,stops:[[13,10],[14,11],[15,12]]},"text-font":["Metropolis Light","Noto Sans Regular"],"text-rotation-alignment":"viewport","text-pitch-alignment":"viewport","text-padding":20,"text-field":["get","name"]},paint:{"text-color":"rgba(153, 174, 197, 0.8)","text-halo-color":"rgba(20, 29, 55, 0.8)","text-halo-width":1,"text-halo-blur":1,"text-opacity":{base:.3,stops:[[12,.4],[13,.6],[14,1]]}}},{id:"ways-label",type:"symbol",source:"composite","source-layer":"roads",minzoom:14,maxzoom:24,filter:["any",["==",["get","fclass"],"tertiary"],["==",["get","fclass"],"footway"],["==",["get","fclass"],"pedestrian"],["==",["get","fclass"],"unclassified"]],layout:{"text-size":10,"text-font":["Metropolis Light","Noto Sans Regular"],"text-rotation-alignment":"viewport","text-pitch-alignment":"viewport","text-field":["get","name"],"text-padding":20},paint:{"text-color":"hsl(0, 0%, 37%)","text-translate":[0,2]}},{layout:{"text-size":{stops:[[4,12],[6,18],[9,20]]},"text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"center",visibility:"visible","text-field":["get","name"]},minzoom:3,maxzoom:12,type:"symbol",source:"composite",id:"province-label",paint:{"text-color":{stops:[[7,"rgba(126, 150, 180, 0.8)"],[10,"rgba(170, 191, 219, 0.8)"]]},"text-halo-color":"rgba(9, 17, 37, 0.8)","text-halo-width":1,"text-halo-blur":1},"source-layer":"province_point"},{id:"city-label",type:"symbol",source:"composite","source-layer":"places",minzoom:6,maxzoom:14,filter:["all",["==","fclass","city"]],layout:{"text-size":{stops:[[7,9],[11,16],[14,18]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"center",visibility:"visible","text-offset":[.5,.2],"text-anchor":{base:1,stops:[[0,"center"],[1,"center"]]},"text-field":["get","name"],"text-max-width":10,"text-padding":30,"symbol-spacing":350},paint:{"text-color":{stops:[[7,"rgba(126, 150, 180, 0.8)"],[10,"rgba(170, 191, 219, 0.8)"]]},"text-halo-color":"rgba(9, 17, 37, 0.8)","text-halo-width":1,"text-halo-blur":1}},{id:"town-label",type:"symbol",source:"composite","source-layer":"places",minzoom:9,maxzoom:14,filter:["all",["!=","fclass","city"]],layout:{"text-size":{stops:[[5,12],[9,8],[16,15]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"left",visibility:"visible","text-anchor":{base:1,stops:[[0,"left"],[8,"center"]]},"text-padding":30,"text-field":["get","name"],"symbol-spacing":550},paint:{"text-color":{stops:[[6,"rgba(84, 101, 135, 0.8)"],[10,"rgba(144, 170, 199, 0.8)"],[11,"rgba(153, 174, 197, 0.8)"]]},"text-halo-color":"rgba(20, 29, 55, 0.8)","text-halo-width":1,"text-halo-blur":1,"text-opacity":{base:.8,stops:[[10,.8],[11,.3]]}}},{id:"water-label",type:"symbol",source:"composite","source-layer":"water_area",minzoom:6,maxzoom:14,filter:["all",["==",["get","fclass"],"water"]],layout:{"text-size":{stops:[[5,12],[9,8],[16,15]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"left",visibility:"visible","text-anchor":{base:1,stops:[[0,"left"],[8,"center"]]},"text-padding":30,"text-field":["get","name"],"symbol-spacing":550},paint:{"text-color":{stops:[[6,"rgba(84, 101, 135, 1)"],[10,"rgba(144, 170, 199, 1)"],[11,"rgba(153, 174, 197, 1)"]]},"text-halo-color":"rgba(20, 29, 55, 1)","text-halo-width":1,"text-halo-blur":1,"text-opacity":{base:.8,stops:[[6,.8],[10,.5],[11,.5]]}}},{id:"water-label2",type:"symbol",source:"composite","source-layer":"water_area",minzoom:9,maxzoom:14,layout:{"text-size":{stops:[[5,12],[9,8],[16,15]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"left",visibility:"visible","text-anchor":{base:1,stops:[[0,"left"],[8,"center"]]},"text-padding":30,"text-field":["get","name"],"symbol-spacing":550},paint:{"text-color":{stops:[[6,"rgba(84, 101, 135, 1)"],[10,"rgba(144, 170, 199, 1)"],[11,"rgba(153, 174, 197, 1)"]]},"text-halo-color":"rgba(20, 29, 55, 1)","text-halo-width":1,"text-halo-blur":1,"text-opacity":{base:.8,stops:[[6,.8],[10,.5],[11,.5]]}}}]}},275:function(t,e,o){},317:function(t,e,o){"use strict";o(275)},340:function(t,e,o){"use strict";o.r(e);var a=o(233),i=o.n(a),s=(o(231),o(243)),l=o(258),r={data:()=>({map:null}),mounted(){this.map=new i.a.Map({container:"map-container",zoom:15,center:[120.10603,30.13324],pitch:61,bearing:-17.6,style:s.a,hash:!1,antialias:!0,fixedZoom:!0}),this.map.on("map.ready",()=>{this.addRoads()})},methods:{addRoads(){this.map.addSource("hangzhou_motorway",{type:"geojson",data:l}),this.map.addLayer({id:"hangzhou_motorway_layer",type:"line",source:"hangzhou_motorway",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#7DF9A6","line-width":{stops:[[10,2],[15,10]]},"line-opacity":.6,"line-blur":{stops:[[10,2],[15,4]]}}}),this.map.addLayer({id:"hangzhou_motorway_layer2",type:"line",source:"hangzhou_motorway",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#fff","line-width":1,"line-opacity":1,"line-blur":0}})}},beforeDestroy(){this.map&&this.map.destroy()}},n=(o(317),o(13)),p=Object(n.a)(r,(function(){return(0,this._self._c)("div",{attrs:{id:"map-container"}})}),[],!1,null,"0c602c9a",null);e.default=p.exports}}]);