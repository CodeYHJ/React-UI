const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const { pathFn } = require("./utils");
/**
 * @type {import('webpack').Configuration}
 */
const proConfig = {
  mode: "production",
  output: {
    path: pathFn("./sitePage"),
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "js/[name].[chunkhash].js",
    publicPath: "/react",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
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

    splitChunks: {
      cacheGroups: {
        lib: {
          test: /[\\/]node_modules[\\/](@codeyhj[\\/]react-ui)[\\/]/,
          name: "codeyhjui",
          chunks: "all",
          priority: 2,
        },
      },
    },
  },
};
module.exports = merge(baseConfig, proConfig);
