<template>
  <div class="panel">
    <navbar />
    <Nuxt />
  </div>
</template>
<script>
import navbar from '@/components/Navigation/navbar.vue'
export default {
  components:{
    navbar
  }
}
</script>

<style>
html{
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
.panel{
  margin: 0;
  padding: 0; 
}
</style>
