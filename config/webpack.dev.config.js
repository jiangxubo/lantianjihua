const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const { log } = require('console');


module.exports = merge(common, {
  mode: 'development',
  output:{
    publicPath:'/'
  },
  devServer: {
    // client: {
    //   logging: 'none',
    // },
    // logLevel:['silent'],
    // target: "http://127.0.0.1:8080",
    // contentBase: path.join(__dirname, 'dist'),
    // static:'/',
    // },
    // open: {
    //   target: ['first.html', 'http://localhost:8080/second.html'],
    //   app: {
    //     name: 'google-chrome',
    //     arguments: ['--incognito', '--new-window'],
    //   },
    // },
    port: 9900,
    compress: true,
    open: false,
    host:'localhost',
    // path:'/',
    // publickPath:'/',
    allowedHosts:'all',
    // historyApiFallback:true
    historyApiFallback:{
      // index:'auto',
      disableDotRule:true,
      disableHostCheck:true,
    }
  },
  stats: "none",
  // devtool: 'eval-cheap-module-source-map',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 16,
              remPrecision: 2
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader','postcss-loader',  'less-loader',
      
        {
          loader: 'px2rem-loader',
          options: {
            remUnit: 16,
            remPrecision: 2
          }
        }
      
      
      
      ],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader','postcss-loader',    {
          loader: 'px2rem-loader',
          options: {
            remUnit: 16,
            remPrecision: 2
          }
        },'sass-loader'],
      },
    ],

  },
  
  plugins: [
    new WebpackBar({
      color:'#85d',
      basic:true,
      profile:false,
      // reporters:{
      //   afterAllDone(context){
      //     console.log(context);
      //   }
      // }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false,
    }),
  ],
});