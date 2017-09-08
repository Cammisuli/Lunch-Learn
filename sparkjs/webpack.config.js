const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'sourcemap',
    entry: './component.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'build/app.js',
        path: __dirname
    },
    devServer: {
        contentBase: __dirname,
        port: 9000,
        overlay: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'spark dev mode',
            chunksSortMode: 'dependency',
            inject: 'body'
        }),
    ]
};