<script setup>

</script>
<template>
  <div class="container">
    <!--    <el-button type="primary" @click="start">开始</el-button>-->
    <!--    <el-button type="primary" @click="hide">停止</el-button>-->
    <iframe src="http://localhost:3001/read-vue.html?key=ex_10_2_2&id=graphic/custom/fixedRoute-flight" id="myiframe"></iframe>
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
