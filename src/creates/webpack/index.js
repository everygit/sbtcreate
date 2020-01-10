
const fs = require('fs');
const path = require('path');

var packageObj = {
    name: "cli-wenjian",
    version: '1.0.0'
}

module.exports = async function (options) {
    console.log("webpack")
    var p = path.resolve(options._create_path, 'package.json');
    fs.writeFileSync(p, JSON.stringify(packageObj, null, '\t'));
}