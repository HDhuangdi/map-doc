(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{262:function(a,o,n){},300:function(a,o,n){"use strict";n(262)},326:function(a,o,n){"use strict";n.r(o);var t=n(232),i=n.n(t),e=(n(231),n(261)),r=n(257),s={data:()=>({map:null}),mounted(){this.map=new i.a.Map({container:"map-container",zoom:15,center:[120.10603,30.13324],pitch:61,bearing:-17.6,style:e.a,hash:!1,antialias:!0,fixedZoom:!0,devicePixelRatio:2}),this.map.on("map.ready",()=>{this.addRoads()})},methods:{addRoads(){this.map.addSource("hangzhou_motorway",{type:"geojson",data:r}),this.map.addLayer({id:"hangzhou_motorway_layer",type:"line",source:"hangzhou_motorway",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#7DF9A6","line-width":{stops:[[10,2],[15,10]]},"line-opacity":.6,"line-blur":{stops:[[10,2],[15,4]]}}}),this.map.addLayer({id:"hangzhou_motorway_layer2",type:"line",source:"hangzhou_motorway",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#fff","line-width":1,"line-opacity":1,"line-blur":0}})}},beforeDestroy(){this.map&&this.map.destroy()}},d=(n(300),n(13)),l=Object(d.a)(s,(function(){return(0,this._self._c)("div",{attrs:{id:"map-container"}})}),[],!1,null,"8433f484",null);o.default=l.exports}}]);