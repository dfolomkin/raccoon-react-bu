const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './src/index.jsx',
  },

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name]-bundle.js',
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
      // only filename for webpack-dev-server, and filename w/ relative path for build
      filename: 'index.html',
      template: 'src/index.tmpl.html',
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin(
      [
        { from: 'src/img', to: '../img' },
        { from: 'src/css/reset.css', to: '../css' },
      ],
      { copyUnmodified: true }
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less'],
    alias: {
      css: path.resolve(__dirname, 'src/css'),
      fonts: path.resolve(__dirname, 'src/fonts'),
      img: path.resolve(__dirname, 'src/img'),
      utils: path.resolve(__dirname, 'src/app/common/utils'),
      common: path.resolve(__dirname, 'src/app/common'),
      components: path.resolve(__dirname, 'src/app/components'),
      vendors: path.resolve(__dirname, 'vendors'),
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
