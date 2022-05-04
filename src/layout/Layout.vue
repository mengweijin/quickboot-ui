<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <el-container>
      <el-header> <Header/> </el-header>

       <!-- <router-view/> -->
        <el-container>
            <el-aside width="210px">
                <!-- <GoodsTypeTree/> -->
            </el-aside>
            <el-main>
                    <!-- <Goods/> -->
            </el-main>
        </el-container>

      <el-footer>
         <Footer/> 
      </el-footer>
    </el-container>
</template>

<script>
export default {
  name: 'Layout'
}
</script>