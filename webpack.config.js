const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: `${path.resolve(__dirname, 'src')}/index.jsx`,

  output: {
    path: path.resolve(__dirname, 'public', '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'env'],
          env: {
            development: {
              plugins: [
                'transform-class-properties',
                'transform-object-rest-spread',
              ],
            },
          },
        },
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.scss', '.js', '.jsx'],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    compress: true,
    overlay: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
