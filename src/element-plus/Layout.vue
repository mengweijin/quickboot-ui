<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import ElASide from './ElASide.vue'
</script>

<template>
  <el-container>
      <el-header> <Header/> </el-header>
        <el-container>
          <ElASide/>
          <el-main>
            <!-- <Goods/> --> 
          </el-main>
        </el-container>
      <el-footer> <Footer/> </el-footer>
    </el-container>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
