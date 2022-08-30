const resolve = path => require('path').resolve(__dirname, path)

const BASE_URL = '/map-doc/'

module.exports = {
  base: BASE_URL,
  title: "地图",
  description: "新监管态势出品",
  configureWebpack: {
    resolve: {
      alias: {
        'docs': resolve('../')     // 路径别名
      }
    }
  },
  themeConfig: {
    nav: [
      { text: "教程", link: "/guide/" },
      { text: "API参考", link: "/api-reference/map" },
      { text: "样式规范", link: "/style-specification/" },
      {
        text: "样例",
        items: [
          { text: "中心高光", target:"_blank", link: BASE_URL + "examples/center-lighting" },
          { text: "天空盒", target:"_blank",link: BASE_URL + "examples/skybox" },
          { text: "空中飞线", target:"_blank",link: BASE_URL + "examples/flyline" },
          { text: "打点", target:"_blank",link: BASE_URL + "examples/point" },
          { text: "街景", target:"_blank",link: BASE_URL + "examples/3Dbuildings" },
          { text: "景深", target:"_blank",link: BASE_URL + "examples/dof" },
          { text: "雪天", target:"_blank",link: BASE_URL + "examples/flotsam" },
          { text: "点亮建筑", target:"_blank",link: BASE_URL + "examples/lightup" },
          { text: "聚焦", target:"_blank",link: BASE_URL + "examples/focus" },
          { text: "防护罩", target:"_blank",link: BASE_URL + "examples/cover" },
          { text: "热力图", target:"_blank",link: BASE_URL + "examples/heatmap" },
          { text: "路网导航", target:"_blank",link: BASE_URL + "examples/navigation" },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "快速入门",
          collapsable: true,
          path: "./",
        },
        {
          title: "基本概念",
          collapsable: true,
          path: "basic-concepts",
        },
        {
          title: "投影",
          collapsable: true,
          path: "projections",
        },
      ],
      "/api-reference/": [
        {
          title: "构造配置",
          collapsable: true,
          path: "map",
        },
        {
          title: "实例方法",
          collapsable: true,
          path: "methods",
        },
        {
          title: "公用方法",
          collapsable: true,
          path: "common-methods",
        },
        {
          title: "公用类",
          collapsable: true,
          path: "common-class",
        },
        {
          title: "事件",
          collapsable: true,
          path: "events",
        },
      ],
    },
  },
};