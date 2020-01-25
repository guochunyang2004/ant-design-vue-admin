# ant-design-vue-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 引用插件
cnpm i antd  --save
cnpm i nprogress  --save
cnpm install --save ant-design-vue
cnpm i babel-plugin-import

cnpm install echarts --save
cnpm install resize-detector --save
//补充：
cnpm i @ant-design/icons-vue
npm install --save @ant-design/icons-vue

vscode 扩展：Ant design vue helper
# 配置
开启 JavaScript 就可以了
{
  loader: "less-loader",
  options: {
    javascriptEnabled: true
  }
}


# Git 常用操作
## 打标签
* 本地打标签
git tag -a 版本号 -m 版本说明
* 推送标签到服务器
git push origin 版本号


# npm 说明
## npm 安装模块
【npm install xxx】利用 npm 安装xxx模块到当前命令行所在目录；

【npm install -g xxx】利用npm安装全局模块xxx；

【npm install xxx】安装但不写入package.json；

【npm install xxx –save】 安装并写入package.json的”dependencies”中；

【npm install xxx –save-dev】安装并写入package.json的”devDependencies”中。

## npm 删除模块
【npm uninstall xxx】删除xxx模块；
【npm uninstall -g xxx】删除全局模块xxx；
