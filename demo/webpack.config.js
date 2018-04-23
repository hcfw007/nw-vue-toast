const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      title: 'Toast Demo',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
  mode: "development"
}