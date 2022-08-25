(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{344:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"构造配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造配置"}},[t._v("#")]),t._v(" 构造配置")]),t._v(" "),s("p",[s("code",[t._v("Map")]),t._v("对象代表你页面上的地图。你以编程方式更改地图的方法和属性，并在用户与其交互时触发事件。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("qualityPreset")])]),t._v(" "),s("td",[t._v("'high'")]),t._v(" "),s("td",[t._v("画面质量预设。可选值：low（低质量）, hgih（高质量）")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("antialias")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("开启抗锯齿")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("bearing")])]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("地图旋转角度。如果在构造函数中没有指定，地图会从样式对象中寻找，如果还没有找到，就赋值为0")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("bearingSnap")])]),t._v(" "),s("td",[t._v("7")]),t._v(" "),s("td",[t._v("地图旋转角度矫正阈值。假如设置为7，则用户将地图旋转到正北"),s("code",[t._v("bearing: ±7")]),t._v("时，地图会自动归正为正北"),s("code",[t._v("bearing:0")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("pitch")])]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("地图的俯仰角")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("pitchWithRotate")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("开启拖拽改变俯仰角")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("zoom")])]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("地图缩放值")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("scrollZoom")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("开启滚动改变缩放值")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("bounds")])]),t._v(" "),s("td",[t._v("LngLatBoundsLike")]),t._v(" "),s("td",[t._v("地图的初始边界。如果指定了边界，它将覆盖"),s("code",[t._v("center")]),t._v("和"),s("code",[t._v("zoom")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("center")])]),t._v(" "),s("td",[t._v("[0, 0]")]),t._v(" "),s("td",[t._v("地图的初始经纬度。如果构造函数选项中没有指定"),s("code",[t._v("center")]),t._v("，地图将在样式对象中寻找它")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("container")])]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[t._v("地图容器。可以为HTML元素，也可以是元素id")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("cooperativeGestures")])]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("开启按住ctrl或者⌘才能进行缩放")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("doubleClickZoom")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("开启双击缩放")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("dragPan")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("开启拖动平移")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("dragRotate")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("开启拖动旋转")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("fadeDuration")])]),t._v(" "),s("td",[t._v("300")]),t._v(" "),s("td",[t._v("控制标签碰撞的淡入/淡出动画的持续时间（毫秒）")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("hash")])]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("开启url hash来存储地图视角信息，比如"),s("code",[t._v("http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("interactive")])]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("如果为"),s("code",[t._v("false")]),t._v("，则地图上不会监听鼠标、触摸或键盘事件，因此不会对交互做出响应")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("maxBounds")])]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("如果设置，地图的视角将被约束到给定的边界")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("maxPitch")])]),t._v(" "),s("td",[t._v("85")]),t._v(" "),s("td",[t._v("最大俯仰角")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("maxZoom")])]),t._v(" "),s("td",[t._v("22")]),t._v(" "),s("td",[t._v("最大缩放值")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("minPitch")])]),t._v(" "),s("td",[t._v("85")]),t._v(" "),s("td",[t._v("最小俯仰角")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("minZoom")])]),t._v(" "),s("td",[t._v("22")]),t._v(" "),s("td",[t._v("最小缩放值")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("style")])]),t._v(" "),s("td",[t._v("{}")]),t._v(" "),s("td",[t._v("样式对象，详见"),s("RouterLink",{attrs:{to:"/style-specification/"}},[t._v("样式规范")])],1)]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("vignetting")])]),t._v(" "),s("td",[t._v("{"),s("br"),t._v("enable: false, "),s("br"),t._v("lightHeight: 250, "),s("br"),t._v("lightColor: 0xffffff, "),s("br"),t._v("strength: 2"),s("br"),t._v("}")]),t._v(" "),s("td",[t._v("暗角配置"),s("br"),t._v("enable: 是否启用，lightHeight: 光源高度，lightColor:光源颜色，strength: 光源强度")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("devicePixelRatio")])]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("物理屏幕解析度")])])])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("demo-block",{scopedSlots:t._u([{key:"source",fn:function(){return[s("pages-api-reference-map")]},proxy:!0},{key:"sourceCode",fn:function(){return[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map-container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" arkmap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ark-map"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ark-map/dist/ark-map.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" style "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./map-style.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("arkmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"map-container"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("zoom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("center")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.1693")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.3025")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pitch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hash")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("antialias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devicePixelRatio")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeDestroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("less"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#map-container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]},proxy:!0}])},[s("p",[t._v("在离开页面时，需要调用"),s("code",[t._v("map.destroy()")]),t._v(" 销毁地图")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);