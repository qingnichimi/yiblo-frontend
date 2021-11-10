module.exports = {
    devServer: {
      // 自动打开浏览器
      open: true,
      port: 8081,
      proxy: {
        // // detail: https://cli.vuejs.org/config/#devserver-proxy
        '/api': {
          target: `http://localhost:8080`,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }