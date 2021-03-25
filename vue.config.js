module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        implementation: require("sass"), // This line must in sass option
      },
    },
  },
  devServer: {
    host: "",
    port: 8080,
    publicPath: "/",
    proxy: {
      "/api": {
        target:
          "https://result.eolinker.com/REByVur452d182ac514f6233d9dab0089d297517a09c58b?uri=",
        // http://121.41.231.182  Cold interface
        ws: true,
        changOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    externals: {
      AMap: "AMap",
    },
  },
};
