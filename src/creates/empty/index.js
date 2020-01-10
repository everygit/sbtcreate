/**
 * Copyright (c) 2020-present, everygit
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const path = require('path');
const { mkdirsSync, cpdirsSync } = require('@xiaoerr/io');
const htmlCreater = require('./resource/html');
const cssStr = require('./resource/css');
const jsStr = require('./resource/js');
require('colors')

// console.log(__dirname)

const pre =
    `<link rel="stylesheet" href="css/base.css"/>
    <style>

    </style>`;
const last =
    `<div id="app">

    </div>
    <!--<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>-->
    <!--<script src="https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>-->
    <script src="js/base.js"></script>`;

module.exports = async function (options) {
    var indexFile = htmlCreater({
        titile: 'test page',
        pre,
        last
    });
    var p = path.resolve(options._create_path, 'index.html');
    fs.writeFileSync(p, indexFile);

    mkdirsSync(path.resolve(options._create_path, 'css'));
    fs.writeFileSync(path.resolve(options._create_path, 'css', 'base.css'), cssStr);

    mkdirsSync(path.resolve(options._create_path, 'js'));
    fs.writeFileSync(path.resolve(options._create_path, 'js', 'base.js'), jsStr);

    mkdirsSync(path.resolve(options._create_path, 'images'));
    fs.copyFileSync(path.resolve(__dirname, 'resource', 'temp.jpeg'), path.resolve(options._create_path, 'images', 'temp.jpeg'));

    console.log('success!'.green);
}