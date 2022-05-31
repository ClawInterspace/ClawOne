/* eslint-disable */
const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = defineConfig({
  lintOnSave: process.env.NODE_ENV !== 'development',
  transpileDependencies: true,
  devServer: {
    https: true,
    host: 'localhost',
    port: 8200,
  },

  configureWebpack: {
    devtool: process.env.NODE_ENV !== 'development' ? '' : 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        title: 'claw-one',
        inject: true,
        minify: process.env.NODE_ENV == 'development' ? false : true,
      }),
    ],
  },
})
