(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{238:function(t,n,a){},240:function(t,n,a){"use strict";a.d(n,"a",(function(){return e})),a.d(n,"b",(function(){return s}));a(90);const e=t=>new Promise(n=>{const a=new Image;a.src=t,a.onload=()=>n({image:a,src:t})}),s=async t=>{const n=new Array(t.length),a=new Map;t.forEach((t,s)=>{n[s]=e(t),a.set(t,"")});(await Promise.all(n)).forEach(t=>{a.set(t.src,t.image)});const s=[];for(const t of a.keys()){const n=a.get(t);s.push(n)}return s}},263:function(t,n,a){t.exports=a.p+"assets/img/sky.154cb246.png"},317:function(t,n,a){},424:function(t,n,a){"use strict";a(317)},457:function(t,n,a){"use strict";a.r(n);var e=a(239),s=a.n(e),o=(a(238),a(241)),i=a(240),c={data:()=>({map:null}),mounted(){this.map=new s.a.Map({container:"map-container",zoom:11,center:[120.1693,30.3025],pitch:85,style:o.a,hash:!1,antialias:!0,devicePixelRatio:2}),this.map.on("map.ready",()=>{this.addSkyBox()})},methods:{async addSkyBox(){const{image:t}=await Object(i.a)(a(263));this.map.addSkyBox({textures:[t,t,t,t,t,t]})}},beforeDestroy(){this.map&&this.map.destroy()}},r=(a(424),a(13)),u=Object(r.a)(c,(function(){return(0,this._self._c)("div",{attrs:{id:"map-container"}})}),[],!1,null,"1f258e4a",null);n.default=u.exports}}]);