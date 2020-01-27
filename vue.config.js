//主题在线编译 社区提供插件配置 https://github.com/mzohaibqc/antd-theme-webpack-plugin
 const path = require("path")
// const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

// const options = {
//   antDir: path.join(__dirname, './node_modules/ant-design-vue'),//修改目录ant-design-vue
//   stylesDir: path.join(__dirname, './src'),//修改为./src
//   varFile: path.join(__dirname, './node_modules/ant-design-vue/lib/style/themes/default.less'), //修改
//   mainLessFile: '',//path.join(__dirname, './src/styles/index.less'),
//   themeVariables: ['@primary-color'],
//   //indexFileName: 'index.html', //不用动态生成，自己管理
//   generateOnce: false,
//   //lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
//   //publicPath: "",
//   //customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
// }

// const themePlugin = new AntDesignThemePlugin(options);
// 社区提供插件配置 结束
const webpack = require('webpack');
module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A'      
                },
                javascriptEnabled: true
            }
        }
    },

    //主题在线编译 配置 https://cli.vuejs.org/zh/guide/webpack.html
    configureWebpack: {
        //plugins: [ themePlugin ]
        plugins: [ 
            // Ignore all locale files of moment.js 按需加载，全局：import 'moment/locale/zh-cn';
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) 
        ],
        //下面按需加载图标
        resolve: {
            alias: {
                "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
            }
        }
     },

    //内联svg
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
    
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()
    
        // 添加要替换的 loader
        svgRule
          .use('vue-svg-loader')
            .loader('vue-svg-loader')
    },

    //mock 拦截
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                bypass(req,res) {
                    if (req.headers.accept.indexOf("html") !== -1) {
                        console.log("Skipping proxy from browser request.");
                        return "/index.html";
                    } else if (process.env.MOCK != "none") {
                        const name = req.path
                            .split("/api/")[1]
                            .split("/")
                            .join("_");
                            //const mock = require('./mock/${name}');
                            const mock = require('./mock/'+name);
                            const result = mock(req.method);
                            //请求后删除缓存
                            delete require.cache[require.resolve('./mock/'+name)];
                            return res.send(result);
                    }
                }
            }
        }
    }
}