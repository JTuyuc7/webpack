const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'index',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      // title: 'product',
      template: path.resolve(__dirname, 'src/products.html'),
      filename: 'product.html',
      chunks: ['product'],
      inject: true
    }),
  ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader',
//             // options: {
//             //   insertAt: 'top',
//             // },
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//             },
//           },
//         ],
//         // use: [
//         //   'style-loader',
//         //   'css-loader'
//         // ]
//       },
//       {
//         test: /\.s[ac]ss$/,
//         use: [
//           {
//             loader: 'style-loader',
//             // options: {
//             //   insertAt: 'top',
//             // },
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//             },
//           },
//           { loader: 'sass-loader' },
//         ],
//         // use: [
//         //   'style-loader',
//         //   'css-loader'
//         // ]
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.(ttf|wof|woff2)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/template.html',
//     }),
//   ],
}