<!--
 * @Author: DC
 * @Date: 2025-01-01 12:02:02
 * @LastEditTime: 2025-01-01 12:08:29
 * @LastEditors: DC
 * @Description: 
 * @FilePath: /cesium-vue3-vite-github/src/views/mas3d/1.vue
 * Never lose my passion
-->
<script setup>

</script>
<template>
  <div class="container">
<!--    <el-button type="primary" @click="start">开始</el-button>-->
<!--    <el-button type="primary" @click="hide">停止</el-button>-->
    <iframe src="http://localhost:3001/read-vue.html?key=ex_10_2_2&id=thirdParty/quickearth/extrusion" width="600%" height="1000px"></iframe>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  z-index: 100;
}
</style>
