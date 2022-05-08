<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import ASide from './ASide.vue'
</script>

<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header><Header/></n-layout-header>
      <n-layout has-sider>
        <n-layout-sider>
          <ASide/>
        </n-layout-sider>
        <n-layout-content>
          
        </n-layout-content>
      </n-layout>
      <n-layout-footer><Footer/></n-layout-footer>
    </n-layout>
  </n-space>

</template>

<script>
export default {
  name: 'Layout',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n-layout-sider .n-layout-sider-scroll-container {
  height: calc(100vh - 60px - 32px);
}
</style>
