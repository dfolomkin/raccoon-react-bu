const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    react: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    app: './src/index.jsx',
  },

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].bundle.js',
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
              presets: ['env', 'react'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
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
        { from: 'src/assets/images', to: '../img' },
        { from: 'src/assets/styles/reset.css', to: '../css' },
      ],
      { copyUnmodified: true }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
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
    contentBase: './',
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
}
