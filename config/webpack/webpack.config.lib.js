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
  module: {
    rules: [
      // {
      //   test: /\.js|jsx|ts|tsx/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-typescript", "@babel/preset-react"],
      //         plugins: ["syntax-dynamic-import"],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
      },
      // src内样式
      {
        test: /\.less/,
        // include: pathFn("./src"),
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
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
