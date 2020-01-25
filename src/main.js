import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import "ant-design-vue/dist/antd.less"
//import Button from 'ant-design-vue/lib/button'
import { Button, Layout, Icon, Drawer, Radio, Menu } from 'ant-design-vue'
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
Vue.component('Authorized', Authorized);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
