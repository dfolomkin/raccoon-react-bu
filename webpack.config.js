/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const defaultEnv = { devserver: true }

module.exports = (env = defaultEnv) => ({
  mode: 'development',

  entry: {
    react: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    app: './src/index.jsx',
    reset: './src/assets/styles/reset.css',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-2', 'react'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../css/',
            },
          },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../css/',
            },
          },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [{ loader: 'url-loader' }],
      },
      {
        test: /\.(png|svg)$/,
        use: [{ loader: 'url-loader' }],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Raccoon Blog | React',
      filename: 'index.html',
      template: 'src/index.tmpl.html',
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin(
      [
        { from: 'src/assets/images/', to: 'img/' },
        // зачем ???
        // { from: 'src/assets/styles/reset.css', to: 'css/' },
      ],
      { copyUnmodified: true }
    ),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      IMG_PATH: env.devserver
        ? JSON.stringify('../src/assets/images')
        : JSON.stringify('img'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less'],
    alias: {
      styles: path.resolve(__dirname, 'src/assets/styles'),
      fonts: path.resolve(__dirname, 'src/assets/fonts'),
      images: path.resolve(__dirname, 'src/assets/images'),
      commons: path.resolve(__dirname, 'src/app/commons'),
      components: path.resolve(__dirname, 'src/app/components'),
    },
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
})
