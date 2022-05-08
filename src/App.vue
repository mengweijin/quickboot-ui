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
    background-color: #393D49;
    color: #D2D2D2;
    text-align: center;
    line-height: 60px;
    height: 60px;
}
.el-aside {
    background-color: #4A5064;
    color: #333;
    /* 设置左侧 aside 高度。vh就是当前屏幕可见高度的1%。因此，100vh就等于当前浏览器的视窗高度，即浏览器内部的可视区域的高度大小。 */
    height: calc(100vh - 60px - 60px);
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
    /* 设置主体 main 高度（减去 header 和 footer 的高度） */
    height: calc(100vh - 60px - 60px);
}
.el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 60px;
}
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
/* #app,.box{
    height: 100%;
}
.el-container {
    height: 100%;
}
body > .el-container {
    margin-bottom: 60px;
} */

</style>
