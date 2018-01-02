var path = require('path')
module.exports = {
  // 入口
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/dev-server',
      './src/main.js'
    ],
    'babel-polyfill': 'babel-polyfill',
    vendors: ['react','react-dom']
  },
  // 出口
  output: {
    // 服务器静态资源目录
    publicPath: '/',
    // 出口文件目录
    path: path.resolve(__dirname, 'dist'),
    // 出口文件名
    filename: '[name]-[hash].js'
  },
  devtool: 'source-map',
  // 模块
  module: {
    rules: [
      {
        // 匹配所有的 .js .jsx 文件
        test: /(\.js|\.jsx)$/,
        // 忽略 node_modules 目录
        exclude: /node_modules/,
        use: {
          // 使用的loader
          loader: 'babel-loader',
          // babel-loader 的选项
          options: {
            // 预设规则
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
          test: /\.scss$/,
          loader: 'style!css!postcss!sass?outputStyle=expanded'
      }
    ]
  }
}
