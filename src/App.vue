<template>
  <div id="app">
     <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>    
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
import 'moment/locale/zh-cn';//按需加载
//import moment from 'moment';
export default {
  data() {
    return {locale: zhCN}
  },
  watch: {
    '$route.query.locale': function(val) {
      this.locale = val === 'enUS' ? enUS : zhCN; 
      //第三方库切换
      //moment.locale(val == 'enUS' ? "en" : "zh-cn")
    }
  }
}
</script>