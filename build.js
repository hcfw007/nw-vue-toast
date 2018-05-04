const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const webpackConfig = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
  ],
  output: {
    filename: 'nw-vue-toast.js',
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
    library: 'toastPlugin',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ]
  },
  mode: "production",
}
webpack(webpackConfig).run()