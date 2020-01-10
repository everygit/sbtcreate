
const fs = require('fs');
const path = require('path');
const { mkdirsSync } = require('@xiaoerr/io');

var packageObj = {
    "name": "www",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server --open --config build_config/webpack.config.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "html-webpack-plugin": "^3.2.0",
        "webpack": "^4.41.5",
        "webpack-cli": "^3.3.10",
        "webpack-dev-server": "^3.10.1"
    }
}

var config =
    `const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[new HtmlWebpackPlugin({
        title:"测试"
    })]
}`;

module.exports = async function (options) {
    var p = path.resolve(options._create_path, 'package.json');
    fs.writeFileSync(p, JSON.stringify(packageObj, null, '\t'));

    mkdirsSync(path.resolve(options._create_path, 'build_config'));

    fs.writeFileSync(path.resolve(options._create_path, 'build_config', 'webpack.config.js'), config);

}