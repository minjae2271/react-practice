const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    targets: {
                        browsers: ['> 5% in KR', 'last 2 chrome versions'],
                    }
                }], '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'], //class 내부 state를 쓰기위해
            }
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ dubug: true }),
    ],
    output: {
        path: path.join(__dirname, 'dist'), 
        filename: 'app.js',
    }
}