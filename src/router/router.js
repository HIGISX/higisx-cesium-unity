/*
 * @Descripttion:
 * @Author: 笙痞
 * @Date: 2022-10-13 16:54:33
 * @LastEditors: DC
 * @LastEditTime: 2025-01-01 12:04:43
 */
const EmptyRouterView = () =>
  import("@/views/routerViews/emptyRouterViews.vue");

const routes = [
  {
    path: "/particle",
    component: EmptyRouterView,
    meta: {
      title: "大气圈层",
    },
    children: [
      {
        path: "snow",
        name: "particle_snow",
        component: () => import("@/views/particle/snow.vue"),
        // component: () => import("@/views/mas3d/1.vue"),
        meta: {
          title: "区域云顶高度",
          activePath: "/particle/snow",
          // activePath: "/particle/snow",
        },
      },
      {
        path: "tempAnimation",
        name: "particle_tempAnimation",
        component: () => import("@/views/particle/tempAnimation.vue"),
        meta: {
          title: "全球云顶高度",
          activePath: "/particle/tempAnimation",
        },
      },
      {
        path: "rain",
        name: "particle_rain",
        component: () => import("@/views/particle/cloudAndSky.vue"),
        meta: {
          title: "全球云顶高度(备选方案)",
          activePath: "/particle/rain",
        },
      },

    ]
  },
  {
    path: "/camera",
    component: EmptyRouterView,
    meta: {
      title: "森林圈层",
    },
    children: [
      {
        path: "fog",
        name: "particle_fog",
        component: () => import("@/views/particle/aqi.vue"),
        meta: {
          title: "全球优势树种",
          activePath: "/particle/fog",
        },
      },
      {
        path: "point-grid",
        name: "camera_point-grid",
        component: () => import("@/views/particle/point-grid.vue"),
        meta: {
          title: "区域优势树种",
          activePath: "/camera/point-grid",
        },
      },
      // {
      //   path: "addSymbolsBatch",
      //   name: "camera_addSymbolsBatch",
      //   component: () => import("@/views/particle/addSymbolsBatch.vue"),
      //   meta: {
      //     title: "区域优势树种(备选)",
      //     activePath: "/camera/addSymbolsBatch",
      //   },
      // },
    ]

  },
  {
    path: "/mark",
    component: EmptyRouterView,
    meta: {
      title: "海洋圈层",
    },
    children: [
      {
        path: "volumeCloud",
        name: "camera_volumeCloud",
        component: () => import("@/views/particle/volumeCloud.vue"),
        meta: {
          title: "叶绿素a浓度三维结构",
          activePath: "/camera/volumeCloud",
        },
      },
      {
        path: "primitive",
        name: "mark_primitive",
        component: () => import("@/views/particle/canvasWind.vue"),
        meta: {
          title: "区域洋流",
          activePath: "/mark/primitive",
        },
      },
      {
        path: "windParticle",
        name: "mark_windParticle",
        component: () => import("@/views/particle/windParticle.vue"),
        meta: {
          title: "全球洋流",
          activePath: "/mark/windParticle",
        },
      },
      {
        path: "windParticle2",
        name: "mark_windParticle2",
        component: () => import("@/views/particle/windParticle2.vue"),
        meta: {
          title: "全球洋流2",
          activePath: "/mark/windParticle2",
        },
      },
      {
        path: "windParticle3",
        name: "mark_windParticle3",
        component: () => import("@/views/particle/windParticle3.vue"),
        meta: {
          title: "全球洋流3",
          activePath: "/mark/windParticle3",
        },
      },
    ]
  },
  {
    path: "/ice",
    // component: EmptyRouterView,
    meta: {
      title: "冰冻圈层",
    },
    children: [
      {
        path: "1",
        name: "1",
        component: () => import("@/views/particle/switchGlobeMod.vue"),
        meta: {
          title: "冰冻圈层演示",
          activePath: "/ice/switchGlobeMod",
        },
      },
      // {
      //   path: "switchGlobeMod2",
      //   name: "switchGlobeMod2",
      //   component: () => import("@/views/particle/switchGlobeMod2.vue"),
      //   meta: {
      //     title: "冰冻圈层演示(备选)",
      //     activePath: "/ice/switchGlobeMod2",
      //   },
      // },
    ]
  },
  {
    path: "/renderServe",
    component: EmptyRouterView,
    meta: {
      title: "固体地球",
    },
    children: [
      {
        path: "xyz",
        name: "renderServe_xyz",
        component: () => import("@/views/particle/geologicBodyExplode.vue"),
        meta: {
          title: "密度体",
          activePath: "/renderServe/geologicBodyExplode",
        },
      },
    ]
  },
  {
    path: "/renderServe",
    component: EmptyRouterView,
    meta: {
      title: "其他功能",
    },
    children: [
      // {
      //   path: "district",
      //   name: "particle_district",
      //   component: () => import("@/views/particle/district.vue"),
      //   meta: {
      //     title: "演示区域展示",
      //     activePath: "/particle/district",
      //   },
      // },
      {
        path: "statelliteFoot",
        name: "particle_statelliteFoot",
        component: () => import("@/views/particle/statelliteFoot.vue"),
        meta: {
          title: "卫星采样演示",
          activePath: "/particle/statelliteFoot",
        },
      },
      {
        path: "planefly",
        name: "particle_planefly",
        component: () => import("@/views/particle/planefly.vue"),
        meta: {
          title: "航空器采样演示",
          activePath: "/particle/planefly",
        },
      },
    ]
  },
  ]


export default routes;
