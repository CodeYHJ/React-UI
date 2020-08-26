const { pathFn } = require("./utils");
const modules = require("./moduleConfig");
const webpack = require("webpack");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: pathFn("./site/app.tsx"),
  output: {
    path: pathFn("./examplePage"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@com": pathFn("./components"),
      "@assets": pathFn("./site/assets"),
    },
  },
  module: modules,
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        DEPLOY: JSON.stringify(process.env.DEPLOY),
      },
    }),
  ],
};
