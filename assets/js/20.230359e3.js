(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{231:function(t,n,s){},235:function(t,n,s){"use strict";s.d(n,"a",(function(){return i})),s.d(n,"b",(function(){return a}));const i=t=>new Promise(n=>{const s=new Image;s.src=t,s.onload=()=>n({image:s,src:t})}),a=async t=>{const n=new Array(t.length),s=new Map;t.forEach((t,a)=>{n[a]=i(t),s.set(t,"")});(await Promise.all(n)).forEach(t=>{s.set(t.src,t.image)});const a=[];for(const t of s.keys()){const n=s.get(t);a.push(n)}return a}},295:function(t,n,s){},351:function(t,n,s){"use strict";s(295)},445:function(t,n,s){"use strict";s.r(n);var i=s(233),a=s.n(i),e=(s(231),s(234)),o=s(235),c={data:()=>({map:null}),mounted(){this.map=new a.a.Map({container:"map-container",zoom:10.26,center:[120.1569,30.2204],pitch:38,style:e.a,hash:!1,antialias:!0,vignetting:{enable:!0,lightHeight:170,strength:2},devicePixelRatio:2}),this.map.on("map.ready",()=>{this.addBuildings()})},methods:{async addBuildings(){const t=await Object(o.b)([s(240),s(241),s(242),s(243),s(244),s(245)]);this.map.addbuildings({textures:t,roofcolor:"auto"})},focus(){this.map.once("click",this.map.unfocus),this.map.once("wheel",this.map.unfocus),this.map.focus({center:[120.20853164716578,30.25113591444385],zoom:15.5,pitch:47,lightOptions:{enable:!1,duration:300,height:60}},()=>{console.log("聚焦动画结束")})}},beforeDestroy(){this.map&&this.map.destroy()}},r=(s(351),s(13)),u=Object(r.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{attrs:{id:"map-container"}}),this._v(" "),t("button",{on:{click:this.focus}},[this._v("聚焦")])])}),[],!1,null,"55a894a3",null);n.default=u.exports}}]);