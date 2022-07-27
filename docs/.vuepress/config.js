module.exports = {
  title: "地图",
  description: "新监管态势出品",
  configureWebpack: {},
  themeConfig: {
    nav: [
      { text: "教程", link: "/guide/" },
      { text: "API参考", link: "/api-reference/map" },
      { text: "样式规范", link: "/style-specification/" },
      {
        text: "样例",
        items: [
          { text: "中心高光", target:"_blank", link: "/examples/center-lighting" },
          { text: "天空盒", target:"_blank",link: "/examples/skybox" },
          { text: "空中飞线", target:"_blank",link: "/examples/flyline" },
          { text: "打点", target:"_blank",link: "/examples/point" },
          { text: "街景", target:"_blank",link: "/examples/3Dbuildings" },
          { text: "景深", target:"_blank",link: "/examples/dof" },
          { text: "雪天", target:"_blank",link: "/examples/flotsam" },
          { text: "点亮建筑", target:"_blank",link: "/examples/lightup" },
          { text: "聚焦", target:"_blank",link: "/examples/focus" },
          { text: "防护罩", target:"_blank",link: "/examples/cover" },
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
          title: "属性",
          collapsable: true,
          path: "properties",
        },
        {
          title: "实例方法",
          collapsable: true,
          path: "methods",
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
