const { pathFn } = require("./utils");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  rules: [
    {
      test: /\.js|jsx|ts|tsx/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"],
            plugins: ["syntax-dynamic-import"],
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      loader: "svg-sprite-loader",
    },
    // lib内样式
    {
      test: /\.less/,
      include: pathFn("./lib"),
      exclude: /node_modules/,
      use: [
        process.env.NODE_ENV === "lib"
          ? MiniCssExtractPlugin.loader
          : "style-loader",
        "css-loader",
        "less-loader",
        // 在这里引入要增加的全局less文件
        {
          loader: "style-resources-loader",
          options: {
            patterns: pathFn("./lib/var.less"),
          },
        },
      ],
    },
    // example 样式
    {
      test: /\.less/,
      include: pathFn("./example"),
      exclude: /node_modules/,
      use: [
        process.env.NODE_ENV === "dev"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
        "css-loader",
        "less-loader",
        // 在这里引入要增加的全局less文件
        {
          loader: "style-resources-loader",
          options: {
            patterns: [
              pathFn("./lib/var.less"),
              pathFn("./example/util/util.less"),
            ],
          },
        },
      ],
    },
    // img优化
    {
      test: /\.(png|svg|jpg|gif|jpeg)$/,
      include: pathFn("./example"),
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192, //默认单位为bytes
            outputPath: "images/",
          },
        },
      ],
    },
  ],
};
