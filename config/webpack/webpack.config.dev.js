const { merge } = require('webpack-merge');

const HtmlwebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

// eslint-disable-next-line import/no-unresolved
const nodeObjectHash = require('node-object-hash');

const baseConfig = require('./webpack.config.base');

const { pathFn } = require('./utils');

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    stats: 'minimal',
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:7001",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "", // 重写path
    //     },
    //     secure: true, // 设置支持https协议的代理
    //   },
    // },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'CodeUI',
      template: pathFn('./config/HTML/index.html'),
      // favicon: pathFn("./config/HTML/favicon.ico"),
    }),
    new HardSourceWebpackPlugin({
      // Either an absolute path or relative to webpack's options.context.
      cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
      // Either a string of object hash function given a webpack config.
      configHash(webpackConfig) {
        // node-object-hash on npm can be used to build this.
        return nodeObjectHash({ sort: false }).hash(webpackConfig);
      },
      // Either false, a string, an object, or a project hashing function.
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock'],
      },
      // An object.
      info: {
        // 'none' or 'test'.
        mode: 'none',
        // 'debug', 'log', 'info', 'warn', or 'error'.
        level: 'debug',
      },
      // Clean up large, old caches automatically.
      cachePrune: {
        // Caches younger than `maxAge` are not considered for deletion. They must
        // be at least this (default: 2 days) old in milliseconds.
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // All caches together must be larger than `sizeThreshold` before any
        // caches will be deleted. Together they must be at least this
        // (default: 50 MB) big in bytes.
        sizeThreshold: 50 * 1024 * 1024,
      },
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = merge(baseConfig, devConfig);
