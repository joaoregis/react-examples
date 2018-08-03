const webpack = require('webpack')
const path = require('path')

module.exports = {

    entry: './ex/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }      
        }]
    }
}