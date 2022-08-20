const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;  //打包分析
// const CompressionPlugin = require("compression-webpack-plugin");

const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name]-bundle-[hash:6].js',
  },
  optimization: {
    concatenateModules: false,
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
      extractComments: false,
      terserOptions: {
        compress: {
          drop_console: false, // 屏蔽log
        },
      },
    }),
  ],
  splitChunks:{
    // chunks: 'all',
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
    // verdors: {
    //   name: 'verdor', // chunk名称
    //   test: /node_modules/,  // 设置命中目录规则
    //   priority: 1, // 优先级，数值越大，优先级越高
    //   minSize: 0, // 小于这个大小的文件，不分割
    //   minChunks: 1 // 最少复用几次，这里意思是只要用过一次就分割出来
    // },
  }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader',  {
          loader: 'px2rem-loader',
          options: {
            remUnit: 16,
            remPrecision: 2
          }
        }],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader',  {
          loader: 'px2rem-loader',
          options: {
            remUnit: 16,
            remPrecision: 2
          }
        }, 'less-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader',  {
          loader: 'px2rem-loader',
          options: {
            remUnit: 16,
            remPrecision: 2
          }
        }, 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // compression-webpack-plugin 因为版本问题，2.x将 asset 改为了 filename
    // new CompressionPlugin({
    //   // asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),

    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,   // 忽略content设置的库中的某个文件夹
      contextRegExp: /moment$/, // 要被忽略某部分内容的库
    }),
    new BundleAnalyzerPlugin(),   //打包分析
    new MiniCssExtractPlugin({
      filename: 'style/[name].[hash:6].css',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: true,
      },
    }),
  ],
});
