const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const {PurgeCSSPlugin} = require("purgecss-webpack-plugin");
const glob = require("glob");

const purgePath = {
  src: path.join(__dirname, "src"),
  // paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
};


module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: "lodash",
      // $: "jquery",
      // jQuery: "jquery",
      moment: "moment",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/courses.html",
      chunks: ["courses"],
      filename: "courses.html",
      base: "pages",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images/*"),
          to: path.resolve(__dirname, "dist"),
          context: "src",
        },
      ],
    }),
    // new BundleAnalyzerPlugin({}),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new PurgeCSSPlugin({
      //paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
      safelist: [/typed/],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
