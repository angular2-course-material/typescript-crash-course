var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './classes.ts',
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};