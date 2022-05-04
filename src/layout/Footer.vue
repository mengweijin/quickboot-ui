<script setup>
  const currentYear=new Date().getFullYear()
</script>

<template>
  <div>
      <span style="color: #f313b9; font-size: 20px; width: 100px; margin-right: 20px;">QuickBoot UI</span>
      <span>联系作者: </span>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1002284406&site=qq&menu=yes" style="margin-right: 20px;">
          QQ
      </a>
      The Apache License 2.0 Copyright © 2018~<span>{{currentYear}}</span> Meng Wei Jin
		  &lt;<a href="mailto:mengweijin.work@foxmail.com">mengweijin.work@foxmail.com</a>&gt;
  </div>
</template>

<script>
export default {
  name: 'Footer'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>