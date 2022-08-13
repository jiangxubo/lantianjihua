const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: [ path.resolve(__dirname, '../src'), 'node_modules' ],
    alias: {
      '@': path.join(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: 'url-loader',
      //   options: {
      //     name: '[name].[ext]',
      //     outputPath: 'images',
      //     limit: 1000, 
      //   },
      // },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       name: '[name].[ext]',
      //           // outputPath: 'images',
      //       options: {
      //         limit: 8192,
      //       }
      //     },
      //   ],
      //  type: 'javascript/auto'
      // },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
  //     {
  //       test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, 
  //       type: 'asset'
  //  },
    //   {
    //     test: /\.html$/,
    //     // 处理html文件的img图片（负责引入img，从而能被url-loader处理）
    //     // webpack5中使用 html-withimg-loader代替
    //     loader: 'html-withimg-loader'
    // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
};
