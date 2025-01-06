<script setup>

</script>
<template>
  <div class="container">
    <!--    <el-button type="primary" @click="start">开始</el-button>-->
    <!--    <el-button type="primary" @click="hide">停止</el-button>-->
    <iframe src="http://localhost:3001/read-vue.html?key=ex_10_2_2&id=graphic/custom/fixedRoute-flight" frameborder="0" width="1760px" height="980px"></iframe>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  z-index: 100;
}
</style>
