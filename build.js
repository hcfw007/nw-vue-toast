const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const webpackConfig = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
    new VueLoaderPlugin(),
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
      {
        test: /\.styl(us)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
  mode: "production",
}
webpack(webpackConfig).run()