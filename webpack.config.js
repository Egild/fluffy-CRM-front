const path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: './src/index.jsx',
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Fluffy-CRM',
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map',
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                exclude: [/fonts/],
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?\S*)?$/,
                exclude: [/images/],
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.js|.jsx?$/,
                exclude: NODE_MODULES_PATH,
                loaders: ["babel-loader"]
            }
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
}