module.exports = {
  baseUrl: './',
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 80, // 服务端口
    https: false,
    hotOnly: false,
    proxy: {
         '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
          target: 'http://127.0.0.1:8080', //访问数据的计算机域名
          ws: true, // 是否启用websockets
          changeOrigin: true, //改变源
          pathRewrite: { 
            '^/api': 'http://127.0.0.1:8080' //路径重写 
          }
      }
    },
    disableHostCheck: true
}
}