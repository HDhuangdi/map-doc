(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{231:function(t,e,a){},236:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i}));const o="https://nssa.dbappsecurity.com.cn:40012/tiles/{z}/{x}/{y}.pbf?ak=999d505c2d83bfaade9a79f21a57104e4ab122703539cf9e61ae35cbb01de8cfc1bce8cc715104c0b00b23c2669eaa49",i="https://nssa.dbappsecurity.com.cn:40012/fonts/{fontstack}/{range}.pbf"},277:function(t,e,a){},322:function(t,e,a){"use strict";a(277)},355:function(t,e,a){"use strict";a.r(e);var o=a(232),i=a.n(o),l=(a(231),a(236)),r={version:8,name:"DARK BLUE CUT",metadata:{"mapbox:autocomposite":!1,"mapbox:type":"template","maputnik:renderer":"mbgljs","maptiles:version":"3.x"},sources:{composite:{type:"vector",attribution:"&copy; DBappSecurity",maxzoom:14,minzoom:0,tiles:[l.b]}},sprite:"",glyphs:l.a,light:{anchor:"map",color:"#fff",intensity:.6,position:[10,90,45]},layers:[{id:"background",type:"background",layout:{visibility:"visible"},paint:{"background-color":"rgba(2, 13, 35, 1)"}},{id:"water shadow",type:"fill",source:"composite","source-layer":"water",filter:["all"],layout:{visibility:"none"},paint:{"fill-color":"#0a151e","fill-translate":{base:1.2,stops:[[7,[0,0]],[16,[-1,-1]]]},"fill-translate-anchor":"viewport","fill-opacity":1}},{id:"water",type:"fill",source:"composite","source-layer":"water",filter:["all"],layout:{visibility:"visible"},paint:{"fill-color":"rgba(11, 44, 67, 1)"}},{id:"landcover_ice_shelf",type:"fill",source:"composite","source-layer":"landcover",maxzoom:8,filter:["all",["==","$type","Polygon"],["==","subclass","ice_shelf"]],layout:{visibility:"visible"},paint:{"fill-color":"rgb(12,12,12)","fill-opacity":.7}},{id:"landcover_glacier",type:"fill",source:"composite","source-layer":"landcover",maxzoom:8,filter:["all",["==","$type","Polygon"],["==","subclass","glacier"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(7, 24, 40, 1)","fill-opacity":{base:1,stops:[[0,1],[8,.5]]}}},{id:"landcover_aerodrome",type:"fill",source:"composite","source-layer":"aeroway",minzoom:10,filter:["all",["==","$type","Polygon"],["==","class","aerodrome"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(24, 54, 69, 0.15)"}},{id:"landuse_residential",type:"fill",source:"composite","source-layer":"landuse",maxzoom:9,filter:["all",["==","$type","Polygon"],["==","class","residential"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(10, 24, 52, 1)","fill-opacity":.4}},{id:"landcover_grass",type:"fill",source:"composite","source-layer":"landcover",minzoom:10,filter:["all",["==","$type","Polygon"],["==","class","grass"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(4, 44, 4, 0.93)","fill-outline-color":"hsla(0, 0%, 0%, 0)","fill-antialias":!0,"fill-opacity":.2}},{id:"landcover_wood",type:"fill",source:"composite","source-layer":"landcover",minzoom:10,filter:["all",["==","$type","Polygon"],["==","class","wood"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(8, 15, 34, 1)","fill-outline-color":"hsla(0, 0%, 0%, 0)","fill-antialias":!0,"fill-opacity":.1}},{id:"landuse_sub_parks",type:"fill",source:"composite","source-layer":"landcover",minzoom:0,filter:["all",["==","subclass","park"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(3, 38, 3, 0.8)","fill-opacity":.15}},{id:"landuse_park",type:"fill",source:"composite","source-layer":"landuse",filter:["all",["==","$type","Polygon"],["==","class","park"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(44, 44, 44, 1)"}},{id:"waterway",type:"line",source:"composite","source-layer":"waterway",filter:["==","$type","LineString"],layout:{visibility:"none"},paint:{"line-color":"rgb(27 ,27 ,29)"}},{id:"water_name",type:"symbol",source:"composite","source-layer":"water_name",filter:["==","$type","LineString"],layout:{"text-field":"{name:latin}\n{name:nonlatin}","symbol-placement":"line","text-rotation-alignment":"map","symbol-spacing":500,"text-font":["Metropolis Medium Italic","Noto Sans Italic"],"text-size":12,visibility:"visible"},paint:{"text-color":"hsla(0, 0%, 0%, 0.7)","text-halo-color":"hsl(0, 0%, 27%)"}},{id:"residential",type:"fill",source:"composite","source-layer":"landuse",minzoom:12,maxzoom:24,filter:["all",["==","$type","Polygon"],["==","class","residential"]],layout:{visibility:"visible"},paint:{"fill-color":"rgba(21, 32, 61, 1)","fill-outline-color":"hsla(0, 0%, 0%, 0)","fill-antialias":!0,"fill-opacity":{stops:[[13,.1],[18,.2]]}}},{id:"building",type:"fill",source:"composite","source-layer":"building",minzoom:12,maxzoom:24,filter:["==","$type","Polygon"],layout:{visibility:"visible"},paint:{"fill-color":"rgba(22, 38, 63, 1)","fill-outline-color":"hsla(0, 0%, 0%, 0)","fill-antialias":!0,"fill-opacity":{stops:[[13,.1],[18,.4]]}}},{id:"aeroway-taxiway",type:"fill",metadata:{"mapbox:group":"1444849345966.4436"},source:"composite","source-layer":"aeroway",minzoom:11,filter:["all",["==","class","aerodrome"],["==","$type","Polygon"]],layout:{visibility:"none"},paint:{"fill-color":"#101520"}},{id:"aeroway-runway-casing",type:"line",metadata:{"mapbox:group":"1444849345966.4436"},source:"composite","source-layer":"aeroway",minzoom:11,filter:["all",["in","class","runway"]],layout:{"line-cap":"round","line-join":"round",visibility:"none"},paint:{"line-color":"rgba(60,60,60,0.8)","line-width":{base:1.5,stops:[[11,5],[17,55]]},"line-opacity":1}},{id:"aeroway-area",type:"fill",metadata:{"mapbox:group":"1444849345966.4436"},source:"composite","source-layer":"aeroway",minzoom:4,filter:["all",["==","$type","Polygon"],["in","class","runway","taxiway"]],layout:{visibility:"visible"},paint:{"fill-opacity":1,"fill-color":"rgba(16, 21, 32, 1)"}},{id:"aeroway-runway",type:"line",metadata:{"mapbox:group":"1444849345966.4436"},source:"composite","source-layer":"aeroway",minzoom:11,filter:["all",["in","class","runway"],["==","$type","LineString"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-color":"rgba(64, 81, 120, 1)","line-width":{base:1.5,stops:[[9,1],[18,80]]}}},{id:"highway_path",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:13,filter:["all",["==","$type","LineString"],["==","class","path"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible","line-miter-limit":2},paint:{"line-color":{stops:[[12,"rgba(66, 82, 120, 1)"],[20,"rgba(49, 83, 106, 1)"]]},"line-width":{base:1.2,stops:[[14,.6],[16,4],[20,18]]},"line-opacity":{stops:[[10,.1],[20,.2]]}}},{id:"highway_minor-minor",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:10,filter:["all",["==","$type","LineString"],["in","class","minor"],["!=","structure","tunnel"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[12,.5],[16,8],[18,16]]},"line-color":"rgba(33, 54, 75,1)","line-opacity":{base:1,stops:[[0,0],[10,.4],[22,.5]]}}},{id:"highway_minor-track",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:11,filter:["all",["==","$type","LineString"],["in","class","track","service"],["!=","structure","tunnel"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[14,.5],[18,6]]},"line-color":"rgba(77, 97, 114, 0.77)","line-opacity":{base:1,stops:[[0,0],[11,.3],[22,.5]]}}},{id:"highway_minor",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:8,filter:["all",["==","$type","LineString"],["in","class","track"],["!=","structure","tunnel"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[12.5,.5],[14,2],[18,18]]},"line-color":"rgba(45, 46, 56, 1)","line-opacity":{base:1,stops:[[0,0],[10,.4],[22,.65]]}}},{id:"highway_major_casing",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:11,filter:["all",["!in","structure","bridge","tunnel"],["in","class","secondary","tertiary"]],layout:{"line-cap":"butt","line-join":"miter",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[5,.75],[16,2]]},"line-dasharray":[3,3],"line-gap-width":{base:1.5,stops:[[5,.75],[18,32]]},"line-color":"rgba(83, 82, 82, 1)","line-opacity":0}},{id:"highway_major_inner",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:11,filter:["all",["==","$type","LineString"],["in","class","primary","secondary","tertiary","trunk"]],layout:{"line-cap":"round","line-join":"round",visibility:"none"},paint:{"line-width":{base:1.5,stops:[[5,.55],[18,22]]},"line-color":"rgba(62, 102, 122, 0.65)","line-blur":0,"line-dasharray":[1,0],"line-opacity":.6}},{id:"highway_major_tunnel-line",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["==","brunnel","tunnel"],["!=","subclass","subway"],["in","class","primary"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-dasharray":[2,3],"line-width":{base:1,stops:[[11,.55],[16,2.5]]},"line-opacity":{base:1,stops:[[9,.3],[16,.9]]},"line-color":"rgba(123, 135, 155, 1)"}},{id:"highway_major_tunnel",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["==","brunnel","tunnel"],["!=","subclass","subway"],["in","class","primary"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[8,.4],[10,1.55],[18,20]]},"line-color":"rgba(58, 71, 83, 1)","line-opacity":{base:1,stops:[[8,.2],[10,.4],[22,.7]]}}},{id:"highway_major_subtle",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["in","class","secondary","tertiary"],["!=","structure","tunnel"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[6,.2],[12,.95],[16,8],[20,38]]},"line-color":{stops:[[6,"rgba(12, 32, 50, 1)"],[12,"rgba(13, 34, 48, 0.93)"],[14,"rgba(17, 40, 56, 0.93)"]]},"line-opacity":{base:1,stops:[[0,0],[6,.2],[22,.95]]}}},{id:"highway_major_secondary",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["in","class","secondary"]],layout:{"line-cap":"round","line-join":"round",visibility:"none"},paint:{"line-width":{base:1.5,stops:[[6,.3],[10,.55],[18,18]]},"line-color":"#152434","line-opacity":{base:1,stops:[[0,0],[6,.3],[22,.55]]}}},{id:"highway_major_11",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:12,filter:["all",["==","$type","LineString"],["in","class","primary"],["!has","brunnel"],["!has","ramp"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[6,.2],[10,.6],[14,6]]},"line-color":{stops:[[6,"rgba(21, 46, 62, 0.9)"],[10,"rgba(33, 65, 83, 0.9)"]]},"line-opacity":{stops:[[6,.1],[12,.5]]}}},{id:"highway_major_primary",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:8,maxzoom:24,filter:["all",["==","$type","LineString"],["in","class","primary","rail"],["!=","brunnel","tunnel"],["<=","ramp",0]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[8,.4],[10,1.75],[16,12],[20,38]]},"line-color":"rgba(25, 49, 62, 0.86)","line-opacity":{base:1,stops:[[8,.3],[10,.4],[22,.7]]}}},{id:"highway_major_ramp",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["in","class","primary","path"],["!=","brunnel","tunnel"],[">","ramp",0]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[8,.2],[10,.75],[18,8]]},"line-color":"rgba(43, 70, 91, 0.9)","line-opacity":{base:1,stops:[[8,.1],[10,.2],[22,.5]]}}},{id:"highway_major_trunk",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["==","class","trunk"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[5,.1],[9,.8],[18,14]]},"line-color":"rgba(22, 45, 67, 1)","line-opacity":.6}},{id:"highway_motorway_casing",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,filter:["all",["==","$type","LineString"],["==","class","motorway"]],layout:{"line-cap":"butt","line-join":"miter",visibility:"none"},paint:{"line-color":"rgba(60,60,60,0.8)","line-width":{base:1.4,stops:[[5.8,0],[6,3],[20,40]]},"line-dasharray":[2,0],"line-opacity":1}},{id:"highway_motorway_ramp",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["==","class","motorway"],["==","ramp",1]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[5,.25],[18,16]]},"line-color":{stops:[[7,"rgba(13, 36, 62, 1)"],[10,"rgba(27, 50, 77, 1)"],[14,"rgba(29, 55, 87,1)"]]},"line-opacity":{stops:[[6,.3],[10,.3],[20,.7]]}}},{id:"highway_motorway_inner",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:6,maxzoom:24,filter:["all",["==","$type","LineString"],["==","class","motorway"],["!=","ramp",1]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[5,.55],[12,4],[16,16],[20,58]]},"line-color":{stops:[[7,"rgba(13, 36, 62, 1)"],[10,"rgba(27, 50, 77, 1)"],[14,"rgba(29, 55, 87,1)"]]},"line-opacity":{stops:[[6,.3],[11,.6],[14,.8]]}}},{id:"highway_motorway_subtle",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:3,maxzoom:7,filter:["all",["==","$type","LineString"],["==","class","motorway"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-width":{base:1.5,stops:[[4,.1],[6,.55]]},"line-color":"rgba(32, 50, 73, 1)","line-opacity":{stops:[[4,.1],[6,.4]]}}},{id:"railway_transit",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:16,filter:["all",["==","$type","LineString"],["all",["==","class","transit"],["!in","brunnel","tunnel"]]],layout:{visibility:"visible","line-join":"round"},paint:{"line-color":"rgba(26, 34, 45, 0.76)","line-width":3}},{id:"railway_transit_dashline",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:16,filter:["all",["==","$type","LineString"],["all",["==","class","transit"],["!in","brunnel","tunnel"]]],layout:{visibility:"visible","line-join":"round"},paint:{"line-color":"rgba(62, 75, 90, 0.76)","line-width":2,"line-dasharray":[3,3]}},{id:"railway_minor",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:16,filter:["all",["==","$type","LineString"],["all",["==","class","rail"],["has","service"]]],layout:{visibility:"none","line-join":"round"},paint:{"line-color":"rgb(35,35,35)","line-width":3}},{id:"railway_minor_dashline",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:16,filter:["all",["==","$type","LineString"],["all",["==","class","rail"],["has","service"]]],layout:{visibility:"none","line-join":"round"},paint:{"line-color":"rgb(12,12,12)","line-width":2,"line-dasharray":[3,3]}},{id:"railway",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:13,filter:["all",["==","$type","LineString"],["==","class","rail"],["!has","service"]],layout:{visibility:"none","line-join":"round"},paint:{"line-width":{base:1.3,stops:[[16,2],[20,4]]},"line-color":"rgba(33, 46, 61, 0.5)"}},{id:"railway_dashline",type:"line",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation",minzoom:13,filter:["all",["==","$type","LineString"],["==","class","rail"],["!has","service"]],layout:{visibility:"none","line-join":"round"},paint:{"line-color":"rgba(10, 12, 18, 0.62)","line-width":{base:1.3,stops:[[16,1],[20,3]]},"line-dasharray":[3,3]}},{id:"highway_name_other",type:"symbol",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation_name",minzoom:14,maxzoom:24,filter:["all",["!=","class","motorway"],["==","$type","LineString"]],layout:{"text-size":{stops:[[14,9],[17,15],[20,28]]},"text-max-angle":2,"text-transform":"uppercase","symbol-spacing":550,"text-font":["Metropolis Regular","Noto Sans Regular"],"symbol-placement":"line",visibility:"visible","text-rotation-alignment":"map","text-pitch-alignment":"viewport","text-field":"{name:nonlatin}","text-justify":"center","text-anchor":"center","text-padding":{stops:[[15,1],[17,18],[20,150]]},"text-line-height":.21,"icon-padding":2,"icon-rotate":0,"text-keep-upright":!0,"text-letter-spacing":{stops:[[9,.1],[16,.2],[20,.3]]},"text-max-width":10},paint:{"text-color":{stops:[[13,"rgba(82, 111, 145, 1)"],[14,"rgba(147, 172, 209, 1)"],[16,"rgba(102, 139, 180, 1)"]]},"text-translate":[0,0],"text-halo-color":"rgba(15, 37, 65, 1)","text-halo-width":1,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.6],[15,.9],[18,.8]]}}},{id:"highway_name_motorway",type:"symbol",metadata:{"mapbox:group":"b6371a3f2f5a9932464fa3867530a2e5"},source:"composite","source-layer":"transportation_name",filter:["all",["==","$type","LineString"],["==","class","motorway"]],layout:{"text-size":10,"symbol-spacing":350,"text-font":["Metropolis Light","Noto Sans Regular"],"symbol-placement":"line",visibility:"none","text-rotation-alignment":"viewport","text-pitch-alignment":"viewport","text-field":"{ref}"},paint:{"text-color":"hsl(0, 0%, 37%)","text-translate":[0,2]}},{id:"boundary_district",type:"line",metadata:{"mapbox:group":"a14c9607bc7954ba1df7205bf660433f"},source:"composite","source-layer":"boundary",minzoom:3,filter:["all",["==","maritime",0],[">","admin_level",5]],layout:{visibility:"none","line-cap":"round","line-join":"round"},paint:{"line-dasharray":[2,2],"line-width":{base:1,stops:[[9,.65],[16,3.5]]},"line-opacity":{base:1,stops:[[9,.1],[16,.9]]},"line-color":"rgba(144, 168, 203, 1)"}},{id:"boundary_city",type:"line",metadata:{"mapbox:group":"a14c9607bc7954ba1df7205bf660433f"},source:"composite","source-layer":"boundary",minzoom:7,filter:["all",["==","maritime",0],[">=","admin_level",4],["<=","admin_level",5]],layout:{visibility:"visible","line-cap":"round","line-join":"round"},paint:{"line-dasharray":{stops:[[6,[10,5]],[10,[4,2]]]},"line-width":{base:1,stops:[[7,.5],[9,1.5],[16,3.5]]},"line-opacity":{base:1,stops:[[7,.7],[16,.9]]},"line-color":{stops:[[6,"rgba(144, 168, 203, 0.73)"],[10,"rgba(144, 168, 203, 0.82)"]]}}},{id:"boundary_state",type:"line",metadata:{"mapbox:group":"a14c9607bc7954ba1df7205bf660433f"},source:"composite","source-layer":"boundary",minzoom:3,filter:["all",["==","maritime",0],[">=","admin_level",3],["<=","admin_level",4]],layout:{visibility:"visible","line-cap":"round","line-join":"round"},paint:{"line-dasharray":{stops:[[6,[10,5]],[10,[4,2]]]},"line-width":{base:1,stops:[[3,1],[5,1.5],[12,3],[13,2.5]]},"line-opacity":{base:1,stops:[[3,.3],[5,.4],[6,.7]]},"line-color":{stops:[[3,"rgba(21, 40, 62, 1)"],[5,"rgba(89, 119, 153, 1)"]]}}},{id:"boundary_country",type:"line",metadata:{"mapbox:group":"a14c9607bc7954ba1df7205bf660433f"},source:"composite","source-layer":"boundary",filter:["all",["==","admin_level",2],["!=","maritime",1]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-color":{stops:[[1,"rgba(37, 58, 83, 0.91)"],[10,"rgba(57, 84, 118, 0.91)"]]},"line-width":{base:1.1,stops:[[0,.5],[6,3],[16,6]]},"line-blur":{base:1,stops:[[0,.2],[22,1]]},"line-opacity":1}},{id:"boundary_country_china_r",type:"line",metadata:{"mapbox:group":"a14c9607bc7954ba1df7205bf660433f"},source:"composite","source-layer":"boundary",filter:["all",["==","admin_level",2],["!=","maritime",1],["==","adm0_right","China"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-color":"rgba(93, 124, 164, 0.91)","line-width":{base:1.1,stops:[[0,1],[3,2],[6,7],[16,28]]},"line-blur":{base:1,stops:[[0,.2],[22,1]]},"line-opacity":.8}},{id:"boundary_country_china_l",type:"line",metadata:{"mapbox:group":"a14c9607bc7954ba1df7205bf660433f"},source:"composite","source-layer":"boundary",filter:["all",["==","admin_level",2],["!=","maritime",1],["==","adm0_left","China"]],layout:{"line-cap":"round","line-join":"round",visibility:"visible"},paint:{"line-color":"rgba(93, 124, 164, 1)","line-width":{base:1.1,stops:[[0,1],[3,2],[6,7],[16,28]]},"line-blur":{base:1,stops:[[0,.2],[22,1]]},"line-opacity":.8}},{id:"boundary-water",type:"line",source:"composite","source-layer":"boundary",filter:["all",["in","admin_level",2,4],["==","maritime",1]],layout:{"line-cap":"round","line-join":"round",visibility:"none"},paint:{"line-color":"rgba(154, 189, 214, 1)","line-width":{base:1,stops:[[0,.6],[4,1.4],[5,2],[12,8]]},"line-opacity":{stops:[[6,.6],[10,1]]}}},{id:"place_other",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",maxzoom:14,filter:["all",["==","$type","Point"],["in","class","island","hamlet","isolated_dwelling","neighbourhood"]],layout:{"text-size":10,"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"center",visibility:"visible","text-offset":[.5,0],"text-anchor":"center","text-field":"{name:nonlatin}"},paint:{"text-color":"rgba(144, 170, 199, 1)","text-halo-color":"rgba(20, 29, 55, 0.8)","text-halo-width":1,"text-halo-blur":1}},{id:"place_suburb",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",maxzoom:15,filter:["all",["==","$type","Point"],["==","class","suburb"]],layout:{"text-size":{stops:[[8,9],[12,11],[15,14]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"center",visibility:"visible","text-offset":[.5,0],"text-anchor":"center","text-field":"{name:zh}","text-padding":20},paint:{"text-color":"rgba(108, 137, 170, 1)","text-halo-color":"rgba(20, 29, 55, 0.95)","text-halo-width":1,"text-halo-blur":1,"text-opacity":{stops:[[6,.76],[13,1]]}}},{id:"place_village",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",minzoom:10,maxzoom:14,filter:["all",["==","$type","Point"],["==","class","village"]],layout:{"text-size":10,"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"left",visibility:"visible","text-offset":[.5,.2],"icon-size":.4,"text-anchor":"left","text-field":"{name:nonlatin}"},paint:{"text-color":"rgba(125, 149, 176, 0.89)","text-halo-color":"rgba(20, 29, 55, 0.9)","text-halo-width":1,"text-halo-blur":1,"icon-opacity":.7}},{id:"place_town",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",minzoom:11,maxzoom:15,filter:["all",["==","$type","Point"],["==","class","town"]],layout:{"text-size":{stops:[[10,11],[16,15]]},"icon-image":{base:1,stops:[[0,"circle-11"],[9,""]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"left",visibility:"visible","text-offset":[.5,.2],"icon-size":.4,"text-anchor":{base:1,stops:[[0,"left"],[8,"center"]]},"text-field":"{name:nonlatin}","symbol-spacing":550},paint:{"text-color":{stops:[[6,"rgba(84, 101, 135, 0.8)"],[10,"rgba(144, 170, 199, 0.8)"],[11,"rgba(153, 174, 197, 0.8)"]]},"text-halo-color":"rgba(20, 29, 55, 0.8)","text-halo-width":1,"text-halo-blur":1,"icon-opacity":.7,"text-opacity":{stops:[[8,.2],[11,.6],[16,1]]}}},{id:"place_district",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",minzoom:10,maxzoom:14,filter:["all",["==","$type","Point"],["==","class","city"],[">","rank",9]],layout:{"text-size":{stops:[[5,9],[11,15],[14,15]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"center",visibility:"visible","text-offset":[.5,.2],"text-anchor":{base:1,stops:[[0,"center"],[1,"center"]]},"text-field":"{name:zh}","text-max-width":10,"text-padding":20,"symbol-spacing":350},paint:{"text-color":"rgba(151, 179, 209, 1)","text-halo-color":"rgba(20, 29, 55, 0.8)","text-halo-width":1,"text-halo-blur":1}},{id:"place_city",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",minzoom:7,maxzoom:14,filter:["all",["==","$type","Point"],["==","class","city"],[">","rank",9],["<=","rank",11]],layout:{"text-size":{stops:[[7,9],[11,13],[14,16]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"center",visibility:"visible","text-offset":[.5,.2],"text-anchor":{base:1,stops:[[0,"center"],[1,"center"]]},"text-field":"{name:zh}","text-max-width":10,"text-padding":20,"symbol-spacing":350},paint:{"text-color":{stops:[[7,"rgba(126, 150, 180, 0.8)"],[10,"rgba(170, 191, 219, 0.8)"]]},"text-halo-color":"rgba(9, 17, 37, 0.8)","text-halo-width":1,"text-halo-blur":1}},{id:"place_city_medium",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",minzoom:0,maxzoom:14,filter:["all",["==","$type","Point"],["==","class","city"],[">","rank",3],["<=","rank",9]],layout:{"text-size":{stops:[[5,12],[11,15],[14,18]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"center",visibility:"visible","text-offset":[.5,.2],"text-anchor":{base:1,stops:[[0,"center"],[1,"center"]]},"text-field":"{name:zh}","text-max-width":10,"text-padding":20,"symbol-spacing":350},paint:{"text-color":"rgba(167, 190, 215, 0.8)","text-halo-color":"rgba(20, 29, 55, 0.8)","text-halo-width":1,"text-halo-blur":1}},{id:"place_city_large",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",maxzoom:12,filter:["all",["==","$type","Point"],["<=","rank",3],["==","class","city"]],layout:{"text-size":{stops:[[3,11],[10,20]]},"icon-image":{base:1,stops:[[0,"circle-11"],[9,""]]},"text-transform":"uppercase","text-font":["Metropolis Regular","Noto Sans Regular"],"text-justify":"left",visibility:"visible","text-offset":[.5,.2],"icon-size":.4,"text-anchor":{base:1,stops:[[0,"left"],[8,"center"]]},"text-field":"{name:zh}","text-padding":2,"text-line-height":1.2},paint:{"text-color":"rgba(157, 178, 198, 1)","text-halo-color":"rgba(20, 29, 55, 1)","text-halo-width":1,"text-halo-blur":1,"icon-opacity":.7,"text-opacity":{stops:[[3,.6],[6,1]]}}},{id:"place_state",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",maxzoom:12,filter:["all",["==","$type","Point"],["==","class","state"]],layout:{visibility:"visible","text-field":"{name:zh}","text-font":["Metropolis Regular","Noto Sans Regular"],"text-transform":"uppercase","text-size":{stops:[[4,12],[6,18],[9,20]]}},paint:{"text-color":"rgba(142, 175, 207, 0.8)","text-halo-color":"rgba(20, 29, 55, 0.8)","text-halo-width":1,"text-halo-blur":1}},{id:"place_country_other",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",maxzoom:8,filter:["all",["==","$type","Point"],["==","class","country"],["!has","iso_a2"]],layout:{visibility:"visible","text-field":"{name:zh}","text-font":["Metropolis Light Italic","Noto Sans Italic"],"text-transform":"uppercase","text-size":{base:1,stops:[[0,10],[8,22]]}},paint:{"text-halo-width":1.4,"text-halo-color":"rgba(20, 29, 55, 0.8)","text-color":"rgba(107, 139, 170, 0.8)"}},{id:"place_country_minor",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",maxzoom:8,filter:["all",["==","$type","Point"],["==","class","country"],[">=","rank",2],["has","iso_a2"]],layout:{visibility:"visible","text-field":"{name:zh}","text-font":["Metropolis Regular","Noto Sans Regular"],"text-transform":"uppercase","text-size":{base:1,stops:[[0,10],[6,12]]}},paint:{"text-halo-width":1.4,"text-halo-color":"rgba(20, 29, 55, 0.8)","text-color":"rgba(73, 112, 144, 0.8)"}},{id:"place_country_major",type:"symbol",metadata:{"mapbox:group":"101da9f13b64a08fa4b6ac1168e89e5f"},source:"composite","source-layer":"place",maxzoom:4,filter:["all",["==","$type","Point"],["<=","rank",1],["==","class","country"],["has","iso_a2"]],layout:{visibility:"visible","text-field":"{name:zh}","text-font":["Metropolis Regular","Noto Sans Regular"],"text-transform":"uppercase","text-size":{base:1.4,stops:[[0,8],[2,14],[3,16],[5,22]]},"text-max-width":6.25,"text-anchor":"center"},paint:{"text-halo-width":1.4,"text-halo-color":"rgba(20, 29, 55, 1)","text-color":"rgba(157, 187, 217, 1)"}},{id:"poi-level-3",type:"symbol",source:"composite","source-layer":"poi",minzoom:16,filter:["all",["==","$type","Point"],[">=","rank",25],["!has","name:zh"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:nonlatin}","text-offset":[0,.6],"text-size":{stops:[[14,7],[16,10]]},"text-max-width":9,visibility:"visible"},paint:{"text-color":{stops:[[13,"rgba(52, 76, 103, 0.76)"],[14,"rgba(103, 128, 164, 0.96)"],[16,"rgba(74, 103, 135, 0.96)"]]},"text-translate":[0,0],"text-halo-color":"rgba(11, 16, 22, 0.5)","text-halo-width":1,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.4],[15,.7],[18,.9]]}}},{id:"poi-level-3-zh",type:"symbol",source:"composite","source-layer":"poi",minzoom:16,filter:["all",["==","$type","Point"],[">=","rank",25],["has","name:zh"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:zh}","text-offset":[0,.6],"text-size":{stops:[[14,7],[16,10]]},"text-max-width":9,visibility:"visible"},paint:{"text-color":{stops:[[13,"rgba(52, 76, 103, 0.76)"],[14,"rgba(103, 128, 164, 0.96)"],[16,"rgba(74, 103, 135, 0.96)"]]},"text-translate":[0,0],"text-halo-color":"rgba(11, 16, 22, 0.5)","text-halo-width":1,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.1],[15,.3],[18,.5]]}}},{id:"poi-level-2",type:"symbol",source:"composite","source-layer":"poi",minzoom:15,filter:["all",["==","$type","Point"],["<=","rank",24],[">=","rank",15],["!has","name:zh"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:nonlatin}","text-offset":[0,.6],"text-size":{stops:[[14,7],[16,13]]},"text-max-width":9,visibility:"visible","text-rotation-alignment":"auto","text-pitch-alignment":"auto"},paint:{"text-color":{stops:[[13,"rgba(52, 76, 103, 0.76)"],[14,"rgba(103, 128, 164, 0.96)"],[16,"rgba(74, 103, 135, 0.96)"]]},"text-translate":[0,0],"text-halo-color":"rgba(11, 16, 22, 0.5)","text-halo-width":1,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.1],[15,.5],[18,.7]]}}},{id:"poi-level-2-zh",type:"symbol",source:"composite","source-layer":"poi",minzoom:15,filter:["all",["==","$type","Point"],["<=","rank",24],[">=","rank",15],["has","name:zh"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:zh}","text-offset":[0,.6],"text-size":{stops:[[14,7],[16,10]]},"text-max-width":9,visibility:"visible"},paint:{"text-color":{stops:[[13,"rgba(52, 76, 103, 0.76)"],[14,"rgba(103, 128, 164, 0.96)"],[16,"rgba(74, 103, 135, 0.96)"]]},"text-translate":[0,0],"text-halo-color":"rgba(11, 16, 22, 0.5)","text-halo-width":1,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.1],[15,.3],[18,.5]]}}},{id:"building-3d",type:"fill-extrusion",source:"composite","source-layer":"building",minzoom:11,layout:{visibility:"none"},paint:{"fill-extrusion-color":{stops:[[14,"rgba(86, 111, 135, 1)"],[15,"rgba(181, 211, 230, 0.87)"]]},"fill-extrusion-height":{property:"render_height",type:"identity"},"fill-extrusion-base":{property:"render_min_height",type:"identity"},"fill-extrusion-opacity":{stops:[[9,1],[11,.8],[15,.95]]}}},{id:"poi-level-1",type:"symbol",source:"composite","source-layer":"poi",minzoom:14,filter:["all",["==","$type","Point"],["<=","rank",14],["has","name"],["!has","name:zh"],["!=","class","bicycle_rental"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:nonlatin}","text-offset":[0,.6],"text-size":{stops:[[14,7],[16,14],[18,16]]},"text-max-width":9,visibility:"visible"},paint:{"text-color":{stops:[[13,"rgba(78, 108, 147, 1)"],[14,"rgba(163, 181, 204, 1)"],[16,"rgba(151, 176, 204, 1)"]]},"text-translate":[0,0],"text-halo-color":"rgba(116, 127, 138, 1)","text-halo-width":0,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.1],[15,.3],[18,.5]]}}},{id:"poi-level-1-zh",type:"symbol",source:"composite","source-layer":"poi",minzoom:14,filter:["all",["==","$type","Point"],["<=","rank",14],["has","name"],["has","name:zh"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:zh}","text-offset":[0,.6],"text-size":{stops:[[14,9],[16,12],[18,18]]},"text-max-width":9,visibility:"visible","text-rotation-alignment":"auto","text-pitch-alignment":"auto"},paint:{"text-color":{stops:[[13,"rgba(52, 76, 103, 0.76)"],[14,"rgba(146, 165, 191, 0.96)"],[16,"rgba(131, 154, 179, 0.96)"]]},"text-translate":[0,0],"text-halo-color":"rgba(116, 127, 138, 0.64)","text-halo-width":0,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.4],[15,.7],[18,.9]]}}},{id:"poi-railway",type:"symbol",source:"composite","source-layer":"poi",minzoom:13,maxzoom:24,filter:["all",["==","$type","Point"],["has","name"],["==","class","railway"],["==","subclass","station"],["!has","name:zh"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:nonlatin}","text-offset":[0,.6],"text-size":12,"text-max-width":9,"icon-optional":!1,"icon-ignore-placement":!1,"icon-allow-overlap":!1,"text-ignore-placement":!1,"text-allow-overlap":!1,"text-optional":!0,visibility:"none"},paint:{"text-color":{stops:[[13,"rgba(52, 76, 103, 0.76)"],[14,"rgba(103, 128, 164, 0.96)"],[16,"rgba(74, 103, 135, 0.96)"]]},"text-translate":[0,0],"text-halo-color":"rgba(11, 16, 22, 0.5)","text-halo-width":1,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.4],[15,.7],[18,.9]]}}},{id:"poi-railway-zh",type:"symbol",source:"composite","source-layer":"poi",minzoom:13,maxzoom:24,filter:["all",["==","$type","Point"],["has","name"],["==","class","railway"],["==","subclass","station"],["has","name:zh"]],layout:{"text-padding":2,"text-font":["Noto Sans Regular"],"text-anchor":"top","icon-image":"{class}_11","text-field":"{name:zh}","text-offset":[0,.6],"text-size":12,"text-max-width":9,"icon-optional":!1,"icon-ignore-placement":!1,"icon-allow-overlap":!1,"text-ignore-placement":!1,"text-allow-overlap":!1,"text-optional":!0,visibility:"none"},paint:{"text-color":{stops:[[13,"rgba(52, 76, 103, 0.76)"],[14,"rgba(103, 128, 164, 0.96)"],[16,"rgba(74, 103, 135, 0.96)"]]},"text-translate":[0,0],"text-halo-color":"rgba(11, 16, 22, 0.5)","text-halo-width":1,"text-halo-blur":0,"text-translate-anchor":"map","text-opacity":{stops:[[14,.4],[15,.7],[18,.9]]}}}],id:"dark-cut",attribution:"&copy; CUT composite&copy; OpenStreetMap contributors",description:"CUT composite",owner:"CUT"},n={data:()=>({map:null}),mounted(){this.map=new i.a.Map({container:"map-container",zoom:11,center:[120.1693,30.3025],pitch:0,style:r,hash:!1,antialias:!0,devicePixelRatio:2})},beforeDestroy(){this.map&&this.map.destroy()}},s=(a(322),a(13)),p=Object(s.a)(n,(function(){return(0,this._self._c)("div",{attrs:{id:"map-container"}})}),[],!1,null,"ccb47ef2",null);e.default=p.exports}}]);