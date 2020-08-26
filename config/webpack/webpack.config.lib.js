const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { pathFn, getEntry } = require("./utils");
const modules = require("./moduleConfig");
// console.log(getEntry())
/**
 * @type {import('webpack').Configuration}
 */
const proConfig = {
  mode: "production",
  // entry: { index: pathFn("./lib/index.tsx") },
  entry: getEntry(),
  output: {
    path: pathFn("./dist"),
    filename: "[name]/index.js",
    library: "react-ui",
    libraryTarget: "umd",
    libraryExport: "default",
    umdNamedDefine: true,
  },
  module: modules,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@com": pathFn("./components"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]/index.css",
      chunkFilename: "[name]/index.css",
      ignoreOrder: true, // Enable to remove warnings about conflicting order
    }),
  ],

  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
};
module.exports = proConfig;
