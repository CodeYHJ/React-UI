const pathFn = require("./utils");
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
      loader: 'svg-sprite-loader',
    },
    // src内样式
    {
      test: /\.less/,
      include: pathFn("./src"),
      exclude: /node_modules/,
      use: [
        process.env.NODE_ENV === "dev"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
      ],
    },
  ],
};
