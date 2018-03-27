const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
      },
      {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
      },
      {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        filename: 'index.html',
        inject: 'body',
        favicon: 'src/favicon-32x32.png',
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  }
};