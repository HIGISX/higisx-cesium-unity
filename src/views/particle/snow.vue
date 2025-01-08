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
    <iframe id="myiframe" src="http://192.168.3.179:3001/read-vue.html?key=ex_10_2_2&id=thirdParty/quickearth/extrusion" frameborder="0"></iframe>
  </div>
  <div>

  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  z-index: 100;
}
#myiframe {
  width: 1480px;
  height: 985px;
}
</style>
