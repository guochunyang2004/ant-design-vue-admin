# ant-design-vue-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
// 无mock启动
cnpm run serve:no-mock
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

### 生成打包报告

    npm run build -- --report

### 单元测试命名 监视更新

    npm run test:unit -- --watch

# 引用插件
    cnpm i antd  --save
    cnpm i nprogress  --save
    cnpm install --save ant-design-vue
    cnpm i babel-plugin-import

    cnpm install echarts --save
    cnpm install resize-detector --save
    cnpm i axios --save

    cnpm i @ant-design/icons-vue
    npm install --save @ant-design/icons-vue

    //jsx插件 https://github.com/vuejs/jsx
    cnpm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props
    //svg组件
   #此方法安装失败，尝试先卸载再安装，卸载命令：cnpm uninstall vue-svg-loader
   
   //多语言组件
   cnpm install vue-i18n --save
   
  // 
  cnpm install query-string --save

    cnpm install vue-svg-loader vue-template-compiler --save-dev

    cnpm install antd-theme-webpack-plugin --save-dev
## 开发插件
    cnpm i --save-dev cross-env

    vscode 扩展：Ant design vue helper

## 显示源码插件
      安装：cnpm i raw-loader --save-dev
      https://github.com/webpack-contrib/raw-loader
## vue 代码高亮插件
      安装：cnpm install --save vue-highlightjs
      https://github.com/metachris/vue-highlightjs
      https://highlightjs.org/
## 社区皮肤插件
      https://github.com/mzohaibqc/antd-theme-webpack-plugin

## npm 源切换
      https://github.com/Pana/nrm
      # 安装
      npm install -g nrm
      # 列表
      nrm ls
      * npm -----  https://registry.npmjs.org/
        yarn ----- https://registry.yarnpkg.com
        cnpm ----  http://r.cnpmjs.org/
        taobao --  https://registry.npm.taobao.org/
        nj ------  https://registry.nodejitsu.com/
        skimdb -- https://skimdb.npmjs.com/registry
      # 切换源
      nrm use cnpm  //switch registry to cnpm
      Registry has been set to: http://r.cnpmjs.org/

# 配置
    开启 JavaScript 就可以了
    {
      loader: "less-loader",
      options: {
        javascriptEnabled: true
      }
    }

* cli配置导出命名
    vue inspect > output.js

# 常用 loader 
* vue-loader
* babel-loader
* vue-antd-md-loader

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

# 无mock配置
* 无mock启动,windows需cross-env插件

package.json中的scripts加：

      "serve:no-mock": "cross-env MOCK=none vue-cli-service serve",

* windows需安装开发插件"cross-env"

# 重点模块
* vuex 
  store/modules/form.js

# nodejs 环境配置
···
    // 1. 安装node http://nodejs.cn/download/
    // 2. 初始化 npm init
    // 3. 安装依赖 npm i --save express
    // 4. 创建app.js（copy下述代码）
    // 5. 运行命令：node app

    // app.js
    const express = require("express");
    const app = express();

    // 设置跨域访问
    app.all("*", (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By", " 3.2.1");
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    });

    let resData = [10, 20, 30, 40, 50, 60];

    // 接口配置
    app.get("/api/dashboard/chart", (req, res) => {
      res.status(200), res.json(resData);
    });

    // 配置服务端
    let server = app.listen(3000, () => {
      let host = server.address().address;
      let port = server.address().port;

      console.log("Server running at http://%s:%s", host, port);
    });
···