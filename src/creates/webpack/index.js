
const fs = require('fs');
const path = require('path');
const { mkdirsSync } = require('@xiaoerr/io');

var packageObj = {
    "name": "www",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "webpack": "^4.41.5",
        "webpack-dev-server": "^3.10.1"
    }
}

var config =
    `const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    }
}`;

module.exports = async function (options) {
    var p = path.resolve(options._create_path, 'package.json');
    fs.writeFileSync(p, JSON.stringify(packageObj, null, '\t'));

    mkdirsSync(path.resolve(options._create_path, 'build_config'));

    fs.writeFileSync(path.resolve(options._create_path, 'build_config', 'webpack.config.js'), config);

}