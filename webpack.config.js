const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const envConfigJs = "/src/config/" + process.env.NODE_ENV + ".config.js";
const cleanWebpackPlugin = require("clean-webpack-plugin");

console.log(envConfigJs)
module.exports = {
    entry: {
        main: './main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: "[name].[chunkhash].js",
        // publicPath:"",
    },
    module: {
        
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html',
            inject: 'head',
            version: new Date().getTime(),
            minify: {
                removeComments: true,
            },
        }),
        new copyWebpackPlugin([{
                from: __dirname + '/src/app',
                to: __dirname + '/dist/app',
                toType: 'dir',
                force: true
            },
            {
                from: __dirname + envConfigJs,
                to: __dirname + '/dist/config/config.js',
                toType: 'file',
                force: true
            },
            {
                from: __dirname + '/src/assets',
                to: __dirname + '/dist/assets',
                toType: 'dir',
                force: true
            },
            {
                from: __dirname + '/src/plugins',
                to: __dirname + '/dist/plugins',
                toType: 'dir',
                force: true
            },
            {
                from: __dirname + '/src/components',
                to: __dirname + '/dist/components',
                toType: 'dir',
                force: true
            },
            {
                from: __dirname + '/src/service',
                to: __dirname + '/dist/service',
                toType: 'dir',
                force: true
            }
        ]),
    ]
}