const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            // options: {
            //   insertAt: 'top',
            // },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
            // options: {
            //   insertAt: 'top',
            // },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|wof|woff2)$/i,
        type: 'asset/resource',
      }
    ],
  },
}
