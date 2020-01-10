/**
 * Copyright (c) 2020-present, everygit
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const projects = require('./projects');

module.exports.isExist = {
    type: 'confirm',
    message: 'The project already exists. Do you want to delete it?',
    name: 'isRemove'
};

module.exports.isOverwrite = {
    type: 'confirm',
    message: 'If the file names are the same, whether to directly overwrite?',
    name: 'isForce'
};

module.exports.isNotEmpty = {
    type: 'confirm',
    message: 'The current folder is not empty, whether to empty the folder?',
    name: 'isRemove'
}

module.exports.selectProjectType = {
    type: 'list',
    message: 'select project type',
    name: 'projectType',
    choices: projects.map(m => m.name + " : " + m.desc),
    filter: function (v) {
        return v.split(' : ')[0]
    }
}

module.exports.emptyProjectName = {
    type: 'input',
    message: 'Enter page name',
    'default': 'Test Page',
    name: 'pageName'
}