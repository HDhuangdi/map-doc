(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{238:function(t,a,n){},300:function(t,a,n){},356:function(t,a,n){"use strict";n(300)},451:function(t,a,n){"use strict";n.r(a);var e=n(239),i=n.n(e),o=(n(238),n(241)),s={data:()=>({map:null}),mounted(){this.map=new i.a.Map({container:"map-container",zoom:1.11,center:[23.2,12.6],pitch:60,style:o.a,hash:!1,antialias:!0,devicePixelRatio:2}),this.map.on("map.ready",()=>{this.addFlyLine()})},methods:{addFlyLine(){this.map.addFlyLine({src:[-79.493023,36.471726],dest:[120.20853164716578,30.25113591444385],lineColor:"#FB5431",backgroundColor:"#FB5431",backgroundOpacity:.5,size:5,altitude:6e6,points:1e4})}},beforeDestroy(){this.map&&this.map.destroy()}},c=(n(356),n(13)),d=Object(c.a)(s,(function(){return(0,this._self._c)("div",{attrs:{id:"map-container"}})}),[],!1,null,"ced55a32",null);a.default=d.exports}}]);