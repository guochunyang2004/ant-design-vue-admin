<template>
  <div style="width: 256px">
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      mode="inline"
      :theme="theme"
     
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query})"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{item.meta.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
  /*
   * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
   * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
   * */
  import SubMenu from './SubMenu';
  import {check} from '../utils/auth'
  export default {
    props: {
      theme: {
        type: String,
        default: 'dark'
      },
      // collapsed: {
      //   type: Boolean,
      //   default: false
      // }
    },
    components: {
      'sub-menu': SubMenu,
    },
    watch: {
      '$route.path': function(val) {
        this.selectedKeys = this.selectedKeysMap[val]
        this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
        // console.log('selectedKeys',this.selectedKeys)
        // console.log('openKeys',this.openKeys)
      },
      // collapsed(val) {
      //   if (val) {
      //     this.cacheOpenKeys = this.openKeys;
      //     this.openKeys = [];
      //   } else {
      //     this.openKeys = this.cacheOpenKeys;
      //   }
      // },
    },
    data() {
      this.selectedKeysMap = {}
      this.openKeysMap = {}
      //获取路由
      const menuData = this.getMenuData(this.$router.options.routes);
      return {
        menuData,
        collapsed: false,
        selectedKeys: this.selectedKeysMap[this.$route.path],
        openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path],
      };
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
      // getMenuData(routes) {
      //   const menuData = [];
      //   routes.forEach(item =>{
      //     if (item.name && !item.hideInMenu) {
      //       const newItem = { ...item };
      //       delete newItem.children;
      //       if (item.children && !item.hideChildrenInMenu) {
      //         newItem.children = this.getMenuData(item.children)
      //       }
      //       menuData.push(newItem)
      //     } else if (
      //       !item.hideInMenu && 
      //       !item.hideChildrenInMenu && 
      //       item.children 
      //     ){
      //       menuData.push(...this.getMenuData(item.children));
      //     }

      //   });
      //   return menuData;
      // }
      getMenuData(routes = [], parentKeys = [], selectedKey) {//parentKeys选中父级菜单
        const menuData = [];
        for(let item of routes) {
          if (item.meta && item.meta.authority && !check(item.meta.authority)
          ) {
            break;
          }
          if (item.name && !item.hideInMenu) {//添加当前节点
            //console.log('forEach1',item.path,menuData.length)
            this.openKeysMap[item.path] = parentKeys;
            this.selectedKeysMap[item.path] = [ selectedKey || item.path ]
            const newItem = { ...item };
            delete newItem.children;
            if (item.children && !item.hideChildrenInMenu) {
              //console.log('forEach2',item.path,menuData.length)
              newItem.children = this.getMenuData(item.children,[...parentKeys, item.path]);
            }
            else {
              //console.log('forEach3',item.path,menuData.length)
              this.getMenuData(
                item.children, 
                selectedKey ? parentKeys:[...parentKeys, item.path],
                selectedKey || item.path
              );
            }
            menuData.push(newItem);
          } else if (
            !item.hideInMenu && 
            !item.hideChildrenInMenu
            && item.children) {//添加子节点        
              menuData.push(...this.getMenuData(item.children, [...parentKeys, item.path]));
          }
        }
        return menuData;
      }
    },
  };
</script>
