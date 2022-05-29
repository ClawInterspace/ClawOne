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
})
