const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  mode: 'production',  // Enable production mode for optimizations
  entry: {
    cadeau: './cadeau.js',  // Main JavaScript file for cadeau
    chalet: './conf.chalet/chalet.js',  // JavaScript file for chalet
    nous_deux: './conf.Nous_deux/Nous_deux.js',  // JavaScript file for Nous_deux
    patate: './conf.patate/patate.js',  // JavaScript file for patate
    photoshoot: './conf.photoshoot/photoshoot.js',  // JavaScript file for photoshoot
    secret_gallery: './conf.secret/secret_gallery.js',  // JavaScript file for secret_gallery
    secret_password: './conf.secret/secret_password.js'  // JavaScript file for secret_password
  },
  output: {
    filename: '[name].bundle.js',  // Output filenames will be cadeau.bundle.js, chalet.bundle.js, etc.
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  optimization: {
    minimize: true,  // Minimize the output files
    minimizer: [new TerserPlugin()],  // Use Terser for JavaScript minification
    splitChunks: {
      chunks: 'all',  // Enable code splitting
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],  // Handle CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',  // Handle image files
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',  // Output CSS filenames
    }),
    new BundleAnalyzerPlugin(),  // Plugin to analyze bundle size
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
