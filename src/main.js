import Vue from "vue";
import VueI18n from 'vue-i18n'
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from 'query-string'
//import "ant-design-vue/dist/antd.less"
//import Button from 'ant-design-vue/lib/button'
import { Button, Layout, Icon, Drawer, Radio, Menu, 
  Form, Input, Select, LocaleProvider, Dropdown,
  DatePicker
} from 'ant-design-vue'
import Authorized from './components/Authorized'
//import "ant-design-vue/lib/button/style"
import Auth from './components/directives/auth'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/github.css';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.component('Authorized', Authorized);
Vue.use(Auth);
Vue.use(VueI18n);
Vue.use(VueHighlightJS);//vue 代码高亮


const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN},
    enUS: { message: enUS}
  }
})

//图标地址：https://www.iconfont.cn/
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1154049_w87h4oeytph.js", // 在 iconfont.cn 上生成
});
Vue.component("IconFont",IconFont);


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
