const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { pathFn } = require("./utils");
/**
 * @type {import('webpack').Configuration}
 */
const proConfig = {
  mode: "production",
  output: {
    path: pathFn("./example"),
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "js/[name].[chunkhash].js",
    publicPath: "/",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlwebpackPlugin({
      title: "CodeUI",
      template: pathFn("./config/HTML/index.html"),
      // favicon: pathFn("./config/HTML/favicon.ico"),
      cdn: {
        js: [],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
      ignoreOrder: true, // Enable to remove warnings about conflicting order
    }),

    new optimizeCssPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
  ],
  optimization: {
    runtimeChunk: { name: "manifest" },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
    // splitChunks: {
    //   cacheGroups: {
    //     axios: {
    //       test: /[\\/]node_modules[\\/](axios)[\\/]/,
    //       name: "axios",
    //       chunks: "all",
    //       priority: 2,
    //     },
    //     antd: {
    //       test: /[\\/]node_modules[\\/](antd)|(@ant-design)[\\/]/,
    //       name: "antd",
    //       chunks: "all",
    //       priority: 3,
    //     },
    //     moment: {
    //       test: /[\\/]node_modules[\\/](moment)[\\/]/,
    //       name: "moment",
    //       chunks: "all",
    //       priority: 4,
    //     },
    //     rc: {
    //       test: /[\\/]node_modules[\\/](rc-table)|(rc-mentions)|(rc-tree)|(rc-picker)|(rc-select)[\\/]/,
    //       name: "rc",
    //       chunks: "all",
    //       priority: 4,
    //     },
    //   },
    // },
  },
};
module.exports = merge(baseConfig, proConfig);
