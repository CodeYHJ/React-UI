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
    // components内样式
    {
      test: /\.less/,
      include: pathFn("./components"),
      exclude: /node_modules/,
      use: [
        process.env.NODE_ENV === "lib"
          ? MiniCssExtractPlugin.loader
          : "style-loader",
        "css-loader",
        "less-loader",
      ],
    },
    // site 样式
    {
      test: /\.less/,
      // include: [pathFn("./site")],
      include: [/[\\/]node_modules[\\/]@codeyhj[\\/]react-ui[\\/]/,pathFn("./site")],

      // exclude: /node_modules/,
      use: [
        process.env.NODE_ENV === "dev"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
        "css-loader",
        "less-loader",
      ],
    },
    // img优化
    {
      test: /\.(png|svg|jpg|gif|jpeg)$/,
      include: pathFn("./site"),
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
