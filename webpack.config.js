const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 2048
        }
      }
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          'loader': 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    },{
      test: /\.(eot|svg|ttf|woff)$/,
      use: {
        loader: 'file-loader'
      }
    },{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}