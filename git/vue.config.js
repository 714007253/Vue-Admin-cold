module.exports = {
    css: {
        loaderOptions: {
            sass: {
                implementation: require('sass'), // This line must in sass option
            },
        },
    },
    devServer: {
        host: '',
        port: 8080,
        publicPath: '/',
        proxy: {
            "/api": {
                target: 'hhttps://result.eolinker.com/vdbA4v80a1766b2b736b7bda77b87b46a14406f2732a182?uri=',
                // target: 'http://121.41.231.182/',
                // http://121.41.231.182  Cold interface
                ws: true,
                changOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap'
        }
    }
}