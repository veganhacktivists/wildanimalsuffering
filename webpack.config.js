const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    port: 3000,
  },
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css",
    }),
    new HtmlPlugin({
      template: "./src/index.html",
      favicon: "./public/icons/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
};
