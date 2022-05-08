<script setup>

</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-menu, .el-menu-item, .el-sub-menu__title {
    background-color: var(--el-menu-bg-color) !important;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
}
.el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
}
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
#app,.box{
    height: 100%;
}
  .el-container {
    height: 100%;
}
body > .el-container {
    margin-bottom: 40px;
}

/* svg 字体图标默认位置偏上，无法与文字对齐，这里设置一下 */
svg {
    position: relative; 
    top: 4px;
}
</style>
