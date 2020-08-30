const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { pathFn, getEntry } = require("./utils");
const modules = require("./moduleConfig");
/**
 * @type {import('webpack').Configuration}
 */
const proConfig = {
  mode: "production",
  entry: { index: pathFn("./components/index.tsx") },
  // entry: getEntry(),
  output: {
    path: pathFn("./dist"),
    filename: "index.js",
    library: "react-ui",
    libraryTarget: "umd",
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
      filename: "[name].css",
      chunkFilename: "[name].css",
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
