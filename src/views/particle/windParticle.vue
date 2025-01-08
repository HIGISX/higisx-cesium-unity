<script setup>

</script>
<template>
  <div class="container">
    <!--    <el-button type="primary" @click="start">开始</el-button>-->
    <!--    <el-button type="primary" @click="hide">停止</el-button>-->
    <iframe src="src/views/particle/examples/webgl/windParticle.html" frameborder="0" id="myiframe"></iframe>
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
