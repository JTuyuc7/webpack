const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
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
    ],
  },
};
