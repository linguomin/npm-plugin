import 'webpack-dev-server';
import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const entry = 'plugin';

const config: webpack.Configuration = {
  entry: {
    [entry]: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? '[name].[hash:8].js' : '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
  },
  devServer: {
    client: {
      progress: true
    },
    open: true,
    compress: true,
    port: 9000
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
    extensions: ['.ts', '.js']
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?ts$/,
        use: 'ts-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.m?ts$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'plugin',
      filename: 'index.html',
      template: path.resolve(__dirname, `src/index.html`)
    }),
    new EslintWebpackPlugin({ fix: true })
  ]
};

export default config;
