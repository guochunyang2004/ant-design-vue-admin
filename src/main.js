import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
//import "ant-design-vue/dist/antd.less"
//import Button from 'ant-design-vue/lib/button'
import { Button, Layout, Icon, Drawer, Radio, Menu, Form, Input, Select } from 'ant-design-vue'
import Authorized from './components/Authorized'
//import "ant-design-vue/lib/button/style"
import Auth from './components/directives/auth'

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
Vue.component('Authorized', Authorized);
Vue.use(Auth);

//图标地址：https://www.iconfont.cn/
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1154049_w87h4oeytph.js", // 在 iconfont.cn 上生成
});
Vue.component("IconFont",IconFont);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
