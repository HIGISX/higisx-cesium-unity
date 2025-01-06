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
          title: "cloud",
          activePath: "/particle/snow",
          // activePath: "/particle/snow",
        },
      },


      {
        path: "rain",
        name: "particle_rain",
        component: () => import("@/views/particle/cloudAndSky.vue"),
        meta: {
          title: "cloudAndSky",
          activePath: "/particle/rain",
        },
      },

      {
        path: "fog",
        name: "particle_fog",
        component: () => import("@/views/particle/aqi.vue"),
        meta: {
          title: "aqi",
          activePath: "/particle/fog",
        },
      },


      {
        path: "district",
        name: "particle_district",
        component: () => import("@/views/particle/district.vue"),
        meta: {
          title: "district",
          activePath: "/particle/district",
        },
      },
      {
        path: "district",
        name: "particle_district",
        component: () => import("@/views/particle/district.vue"),
        meta: {
          title: "district",
          activePath: "/particle/district",
        },
      },
    ],
  },
  {
    path: "/camera",
    component: EmptyRouterView,
    meta: {
      title: "森林圈层",
    },
    children: [
      {
        path: "addSymbolsBatch",
        name: "camera_addSymbolsBatch",
        component: () => import("@/views/particle/addSymbolsBatch.vue"),
        meta: {
          title: "addSymbolsBatch",
          activePath: "/camera/addSymbolsBatch",
        },
      },

      {
        path: "volumeCloud",
        name: "camera_volumeCloud",
        component: () => import("@/views/particle/volumeCloud.vue"),
        meta: {
          title: "volumeCloud.vue",
          activePath: "/camera/volumeCloud",
        },
      },
      {
        path: "fly",
        name: "camera_fly",
        component: () => import("@/views/camera/fly.vue"),
        meta: {
          title: "林下地形",
          activePath: "/camera/fly",
        },
      },
      {
        path: "fly",
        name: "camera_fly",
        component: () => import("@/views/camera/fly.vue"),
        meta: {
          title: "森林高度",
          activePath: "/camera/fly",
        },
      },
      {
        path: "fly",
        name: "camera_fly",
        component: () => import("@/views/camera/fly.vue"),
        meta: {
          title: "生物量",
          activePath: "/camera/fly",
        },
      },
    ],

  },
  {
    path: "/mark",
    component: EmptyRouterView,
    meta: {
      title: "海洋圈层",
    },
    children: [
      {
        path: "primitive",
        name: "mark_primitive",
        component: () => import("@/views/particle/canvasWind.vue"),
        meta: {
          title: "canvasWind",
          activePath: "/mark/primitive",
        },
      },
      {
        path: "windParticle",
        name: "mark_windParticle",
        component: () => import("@/views/particle/windParticle.vue"),
        meta: {
          title: "windParticle",
          activePath: "/mark/windParticle",
        },
      },
      // windParticle
      {
        path: "combine",
        name: "mark_combine",
        component: () => import("@/views/mark/combine.vue"),
        meta: {
          title: "海表二维流场",
          activePath: "/mark/combine",
        },
      },
      {
        path: "combine",
        name: "mark_combine",
        component: () => import("@/views/mark/combine.vue"),
        meta: {
          title: "海面高度",
          activePath: "/mark/combine",
        },
      },
      {
        path: "combine",
        name: "mark_combine",
        component: () => import("@/views/mark/combine.vue"),
        meta: {
          title: "内波振幅",
          activePath: "/mark/combine",
        },
      },
    ],
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
          title: "geologicBodyExplode",
          activePath: "/renderServe/geologicBodyExplode",
        },
      },
      {
        path: "3dtiles",
        name: "renderServe_3dtiles",
        component: () => import("@/views/renderServe/3dtiles.vue"),
        meta: {
          title: "磁性体",
          activePath: "/renderServe/3dtiles",
        },
      },
      {
        path: "3dtiles",
        name: "renderServe_3dtiles",
        component: () => import("@/views/renderServe/3dtiles.vue"),
        meta: {
          title: "三维电阻率",
          activePath: "/renderServe/3dtiles",
        },
      },
    ],
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
          title: "switchGlobeMod",
          activePath: "/ice/switchGlobeMod",
        },
      },
      ]
  },
  // {
  //   path: "/material",
  //   component: EmptyRouterView,
  //   meta: {
  //     title: "材质",
  //   },
  //   children: [
  //     {
  //       path: "highlightRoad",
  //       name: "material_highlightRoad",
  //       component: () => import("@/views/material/highlightRoad.vue"),
  //       meta: {
  //         title: "道路闪烁",
  //         activePath: "/material/highlightRoad",
  //       },
  //     },
  //     {
  //       path: "throughRoad",
  //       name: "material_throughRoad",
  //       component: () => import("@/views/material/throughRoad.vue"),
  //       meta: {
  //         title: "道路穿梭",
  //         activePath: "/material/throughRoad",
  //       },
  //     },
  //     {
  //       path: "radiant",
  //       name: "material_radiant",
  //       component: () => import("@/views/material/radiant.vue"),
  //       meta: {
  //         title: "辐射圈",
  //         activePath: "/material/radiant",
  //       },
  //     },
  //     {
  //       path: "diffuse",
  //       name: "material_diffuse",
  //       component: () => import("@/views/material/diffuse.vue"),
  //       meta: {
  //         title: "圆扩散",
  //         activePath: "/material/diffuse",
  //       },
  //     },
  //     {
  //       path: "colorLayer",
  //       name: "material_colorLayer",
  //       component: () => import("@/views/material/colorLayer.vue"),
  //       meta: {
  //         title: "四色图",
  //         activePath: "/material/colorLayer",
  //       },
  //     },
  //     {
  //       path: "water",
  //       name: "material_water",
  //       component: () => import("@/views/material/water.vue"),
  //       meta: {
  //         title: "流动水面",
  //         activePath: "/material/water",
  //       },
  //     },
  //     {
  //       path: "skybox",
  //       name: "material_skybox",
  //       component: () => import("@/views/material/skybox.vue"),
  //       meta: {
  //         title: "天空盒",
  //         activePath: "/material/skybox",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/geometry",
  //   component: EmptyRouterView,
  //   meta: {
  //     title: "几何",
  //   },
  //   children: [
  //     {
  //       path: "entities",
  //       name: "geometry_entities",
  //       component: () => import("@/views/geometry/entities.vue"),
  //       meta: {
  //         title: "基本要素",
  //         activePath: "/geometry/entities",
  //       },
  //     },
  //     {
  //       path: "measure",
  //       name: "geometry_measure",
  //       component: () => import("@/views/geometry/measure.vue"),
  //       meta: {
  //         title: "量测",
  //         activePath: "/geometry/measure",
  //       },
  //     },
  //     {
  //       path: "draw",
  //       name: "geometry_draw",
  //       component: () => import("@/views/geometry/draw.vue"),
  //       meta: {
  //         title: "绘制",
  //         activePath: "/geometry/draw",
  //       },
  //     },
  //     {
  //       path: "arrow",
  //       name: "geometry_arrow",
  //       component: () => import("@/views/geometry/arrow.vue"),
  //       meta: {
  //         title: "态势图",
  //         activePath: "/geometry/arrow",
  //       },
  //     },
  //     {
  //       path: "terrainFlat",
  //       name: "geometry_terrainFlat",
  //       component: () => import("@/views/geometry/TerrainFlat.vue"),
  //       meta: {
  //         title: "地形压平",
  //         activePath: "/geometry/TerrainFlat",
  //       },
  //     },
  //     {
  //       path: "modelFlat",
  //       name: "geometry_modelFlat",
  //       component: () => import("@/views/geometry/ModelFlat.vue"),
  //       meta: {
  //         title: "模型压平",
  //         activePath: "/geometry/ModelFlat",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/scene",
  //   component: EmptyRouterView,
  //   meta: {
  //     title: "场景",
  //   },
  //   children: [
  //     {
  //       path: "waterFlood",
  //       name: "scene_waterFlood",
  //       component: () => import("@/views/scene/waterFlood.vue"),
  //       meta: {
  //         title: "水淹模拟",
  //         activePath: "/scene/waterFlood",
  //       },
  //     },
  //     {
  //       path: "heatMap",
  //       name: "scene_heatMap",
  //       component: () => import("@/views/scene/heatMap.vue"),
  //       meta: {
  //         title: "热力图",
  //         activePath: "/scene/heatMap",
  //       },
  //     },
  //     {
  //       path: "timeLine",
  //       name: "scene_timeLine",
  //       component: () => import("@/views/scene/timeLine.vue"),
  //       meta: {
  //         title: "时间轴",
  //         activePath: "/scene/timeLine",
  //       },
  //     },
  //     {
  //       path: "maskReverseSelect",
  //       name: "scene_maskReverseSelect",
  //       component: () => import("@/views/scene/maskReverseSelect.vue"),
  //       meta: {
  //         title: "遮罩反选",
  //         activePath: "/scene/maskReverseSelect",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/analysis",
  //   component: EmptyRouterView,
  //   meta: {
  //     title: "分析",
  //   },
  //   children: [
  //     {
  //       path: "skyLine",
  //       name: "analysis_skyLine",
  //       component: () => import("@/views/analysis/skyLine.vue"),
  //       meta: {
  //         title: "天际线分析",
  //         activePath: "/analysis/skyLine",
  //       },
  //     },
  //     {
  //       path: "elevation",
  //       name: "analysis_elevation",
  //       component: () => import("@/views/analysis/elevation.vue"),
  //       meta: {
  //         title: "高程（限高）分析",
  //         activePath: "/analysis/elevation",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/highClass",
  //   component: EmptyRouterView,
  //   meta: {
  //     title: "高级功能",
  //   },
  //   children: [
  //     {
  //       path: "dynamicWater",
  //       name: "highClass_dynamicWater",
  //       component: () => import("@/views/highClass/dynamicWater.vue"),
  //       meta: {
  //         title: "动态网格水",
  //         activePath: "/highClass/dynamicWater",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/lowCode",
  //   component: EmptyRouterView,
  //   meta: {
  //     title: "低代码平台",
  //   },
  //   children: [
  //     {
  //       path: "set",
  //       name: "lowCode_set",
  //       component: () => import("@/views/lowCode/lowCode.vue"),
  //       meta: {
  //         title: "配置",
  //         activePath: "/lowCode/set",
  //       },
  //     },
  //   ],
  // },
];

export default routes;
