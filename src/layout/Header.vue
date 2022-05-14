<template>
  <div>
    <el-menu router mode="horizontal">
      <el-menu-item><img src="/logo.png" style="height: var(--el-menu-item-height);"></el-menu-item>
      <el-menu-item v-bind:index="'/goodsType'">商品类型管理</el-menu-item>
      <el-menu-item v-bind:index="'/'">库存管理</el-menu-item>
      <el-menu-item v-bind:index="'/stock-in'">入库管理</el-menu-item>
      <el-menu-item v-bind:index="'/stock-out'">出库管理</el-menu-item>
      <el-menu-item v-bind:index="''" disabled>月利润分析</el-menu-item>
      <el-menu-item v-bind:index="''" disabled>兑换记录</el-menu-item>
      <el-menu-item v-bind:index="''" disabled>售后记录</el-menu-item>
      <el-menu-item v-bind:index="''" disabled>会员管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
  --el-menu-text-color: #D2D2D2;
  --el-menu-bg-color: #393D49;
  --el-menu-hover-text-color: #5FB878;
  --el-menu-hover-bg-color: #393D49;
  --el-menu-active-color: #1E9FFF;
}

img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
</style>