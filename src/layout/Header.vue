<template>
  <div>
    <el-menu router mode="horizontal" background-color="#b3c0d1">
      <el-menu-item><img src="/logo.png" style="height: var(--el-menu-item-height);"></el-menu-item>
      <el-menu-item v-bind:index="'/goodsType'" style="color: #303133;">商品类型管理</el-menu-item>
      <el-menu-item v-bind:index="'/'" style="color: #303133;">库存管理</el-menu-item>
      <el-menu-item v-bind:index="'/stock-in'" style="color: #303133;">入库管理</el-menu-item>
      <el-menu-item v-bind:index="'/stock-out'" style="color: #303133;">出库管理</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>月利润分析</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>兑换记录</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>售后记录</el-menu-item>
      <el-menu-item v-bind:index="''" style="color: #303133;" disabled>会员管理</el-menu-item>
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
img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
</style>