module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                bypass(req,res) {
                    if (req.headers.accept.indexOf("html") !== -1) {
                        console.log("Skipping proxy from browser request.");
                        return "/index.html";
                    } else {
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