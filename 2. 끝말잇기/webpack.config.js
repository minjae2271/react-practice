const path = require('path');

module.exports = {
    name: 'word-relay-setting', //무엇에 대한 config인지
    mode: 'development', //실서비스 -> production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry : {
        app: ['./client', ], //다른 파일이 임포트하는 파일은 포함할 필요없다. ex) './WordRelay.jsx' imported in client.jsx
    }, //입력
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'], //class 내부 state를 쓰기위해
            }
        }]

    },
    output: {
        path: path.join(__dirname, 'dist'), //현재폴더경로 + 'dist'
        filename: 'app.js',
    }, //출력
}