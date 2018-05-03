const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const webpackConfig = {
  entry: {
    app: path.resolve(__dirname, './index.js'),
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
  ],
  output: {
    filename: 'nw-vue-toast.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ]
  },
  mode: "production",
  target: "node",
}

webpack(webpackConfig).run()