const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "client/src", "main.jsx"),
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/"
    }, 
    devtool: 'inline-source-map',
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
           template: path.join(__dirname,'/client/index.html')
      }) 
    ],
    // devServer: {
    //     hot: true,
    //     historyApiFallback: true
    // }
};