<template>
  <div style="text-align:center;">
    <IconFont type="icon-icon-404" style="font-size:100px;"></IconFont>
    <div>
        <img :src="caihong" alt="" />
    </div>
    
  </div>
</template>

<script>
import caihong from '@/assets/caihong.svg';
export default {
  data() {
    return {
      caihong
    }
  }
}
</script>

<style>

</style>