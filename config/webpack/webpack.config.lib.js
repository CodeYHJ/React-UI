const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const pathFn = require("./utils");
const modules = require("./moduleConfig");

/**
 * @type {import('webpack').Configuration}
 */
const proConfig = {
  mode: "production",
  entry: { index: pathFn("./lib/index.tsx") },
  output: {
    path: pathFn("./dist/lib"),
    filename: "[name]/index.js",
    library: "CodeUI",
    libraryTarget: "umd",
  },
  module:modules,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@lib": pathFn("./lib"),
    },
  },
  plugins: [new CleanWebpackPlugin()],

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
