const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:  [  'style-loader', 'css-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './index.html'
      })
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  }
};


// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { resolve as _resolve } from 'path';
// import {HotModuleReplacementPlugin} from 'webpack';


// export const mode = "development";
// export const entry = './src/index.tsx';
// export const output = {
//     path: _resolve(__dirname, 'dist'),
//     filename: 'client.bundle.js',
//     publicPath: '/'
// };
// export const module = {
//     rules: [
//         {
//             test: /\.(ts|js)x?$/i,
//             exclude: /node_modules/,
//             use: {
//                 loader: "babel-loader",
//                 options: {
//                     presets: [
//                         "@babel/preset-env",
//                         "@babel/preset-react",
//                         "@babel/preset-typescript",
//                     ],
//                 },
//             },
            
//         },
//         {
//             test: /\.css$/,
//             use:  [  'style-loader', 'css-loader']
//         },
//         {
//             test: /\.js$/,
//             enforce: "pre",
//             use: [
//               {
//                 loader: "source-map-loader",
//               }
//             ]
//         },
//     ],
// };
// export const resolve = {
//     extensions: [".tsx", ".ts", ".js"],
// };
// export const plugins = [
//     new HtmlWebpackPlugin({
//         template: "index.html",
//     }),
//     new HotModuleReplacementPlugin(),
// ];
// export const devServer = {
//     hot: true,
//     open: true,
    
//     historyApiFallback: true,
// };

// export const devtool = 'inline-source-map'

