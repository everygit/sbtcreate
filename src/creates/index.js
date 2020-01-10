/**
 * Copyright (c) 2020-present, everygit
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const emptyHandle = require('./empty');


module.exports = {
    empty: emptyHandle,
    jquery: async function () {
        console.log(arguments);
    },
    webpack: async function () {
        console.log(arguments);
    }
}