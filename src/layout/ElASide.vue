<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <div class="toggle-button" @click="toggleCollapse">
      <el-icon :size="20" style="vertical-align: middle" v-show="isCollapse"><expand /></el-icon>
      <el-icon :size="20" style="vertical-align: middle" v-show="!isCollapse"><fold /></el-icon>
    </div>
    <el-menu router mode="vertical" :collapse="isCollapse" :collapse-transition="false">
      <el-sub-menu index="1">
        <template #title>
          <el-icon style="vertical-align: middle"><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
  
</template>

<script setup>
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<script>
export default {
  name: 'ElASide',
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toggle-button{
  /* 添加背景颜色 */
  background-color: #4A5064;
  /* 设置文本大小 */
  font-size:10px;
  /* 设置文本行高 */
  line-height:40px;
  /* 设置文本颜色 */
  color:#fff;
  /* 设置文本居中 */
  text-align: center;
  /* 设置文本间距 */
  letter-spacing: 0.2em;
  /* 设置鼠标悬浮变小手效果 */
  cursor:pointer;
}
.el-menu-vertical:not(.el-menu--collapse) {
  background-color: #b3c0d1;
}
</style>