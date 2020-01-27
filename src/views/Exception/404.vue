<template>
  <div style="text-align:center;">
    <IconFont type="icon-icon-404" style="font-size:100px;"></IconFont>
    <div>
        <!-- 非组件方式 -->
        <!-- <img :src="caihong" alt="" /> -->
        <!-- 组件方式 -->
        <Caihong style="height:100px;width:100px;"></Caihong>
    </div>
    
  </div>
</template>

<script>
/*vue.config.js配置内联svg后下面的导入不是返回字符串了
返回函数式组件 */
import Caihong from '@/assets/caihong.svg';
export default {
  components: {
    Caihong
  },
  data() {
    
  }
}
</script>

<style>

</style>