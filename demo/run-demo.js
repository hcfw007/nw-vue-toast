const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')

const compiler = webpack(config)

const devServerOptions = Object.assign({}, config.devServer, {
  stats: {
    colors: true
  }
})

const server = new webpackDevServer(compiler, devServerOptions)

server.listen(8088, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8088')
})