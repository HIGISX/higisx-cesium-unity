<!--
 * @Descripttion: 
 * @Author: 笙痞
 * @Date: 2023-01-04 11:07:05
 * @LastEditors: 笙痞
 * @LastEditTime: 2023-01-04 17:59:58
-->
<script setup>

</script>
<template>
  <div class="container">
<!--    <el-button type="primary" @click="start">开始</el-button>-->
<!--    <el-button type="primary" @click="hide">停止</el-button>-->
    <iframe src="http://localhost:3001/read-vue.html?key=ex_10_1_1&id=layer-other/weather/canvasWind" frameborder="0" width="1730px" height="980px"></iframe>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  z-index: 100;
}
</style>
