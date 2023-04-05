export default {
  themeConfig: {
    base: "/t1/",
    nav: [
      {
        text: "导航栏1",
        link: "/pages/menu-bar/",
      },
      {
        text: "导航栏2",
        link: "/pages/sidebar/html",
      },
    ],
    sidebar: {
      "/pages/sidebar/": [
        {
          text: "侧边栏",
          items: [
            {
              text: "html",
              link: "/pages/sidebar/html",
            },
            {
              text: "CSS",
              link: "/pages/sidebar/css",
            },
          ],
        },
      ],
    },
  },
};
