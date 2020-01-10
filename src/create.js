/**
 * Copyright (c) 2020-present, everygit
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const inquirer = require('inquirer');
const path = require('path');
const appRoot = process.cwd();
const { mkdirsSync, rmdirsSync } = require('@xiaoerr/io');
const fs = require('fs');
const qustion = require('./inquirerQuestion');
const projects = require('./projects');
const creates = require('./creates');
require('colors')



module.exports = async function (project, options) {
    var opt = Object.create(options);
    await preprocessing(project, opt);
    await selectProject(project, opt);
    await creates[opt.type](opt);
}


/**
 * Prepare the project
 * @param {string} project project name
 * @param {object} options cmd options
 */
async function preprocessing(project, options) {
    if (project) {
        var s = path.resolve(appRoot, project);
        options._create_path = s;
        var isExist = fs.existsSync(s);
        if (isExist) {
            var answers = await inquirer.prompt([qustion.isExist]);
            if (answers.isRemove) {
                try {
                    rmdirsSync(s);
                } catch(ex) {
                    console.log(`${s} remove fail`.red);
                    console.log(ex.message.red);
                    process.exit(1);
                }
                
                mkdirsSync(s);
            } else if (!options.force) {
                var answers = await inquirer.prompt([qustion.isOverwrite]);
                options.force = answers.isForce;
            }
        } else {
            mkdirsSync(s);
        }
    } else {
        options._create_path = appRoot;
        var f = fs.readdirSync(appRoot);
        if (f.length) {
            var answers = await inquirer.prompt([qustion.isNotEmpty]);
            if (answers.isRemove) {
                f.forEach(m => {
                    if(fs.statSync(m).isDirectory()){
                        try {
                            rmdirsSync(path.resolve(options._create_path, m))
                        } catch(ex) {
                            console.log(`${path.resolve(options._create_path, m)} remove fail`.red)
                            console.log(ex.message.red);
                            process.exit(1)
                        }
                    } else {
                        fs.unlinkSync(m);
                    }
                });
            } else if (!options.force) {
                var answers = await inquirer.prompt([qustion.isOverwrite]);
                options.force = answers.isForce;
            }
        }
    }
}


async function selectProject(project, options) {
    if (!options.type || !checkProjectType(options.type)) {
        if(options.type) {
            console.log(`error:'${options.type}' is not exist`.red);
            // process.exit(1);
        } 
        var answers = await inquirer.prompt([qustion.selectProjectType]);
        options.type = answers.projectType;
    }
}

/**
 * check project type whether exist
 * @param {string} type project type
 */
function checkProjectType(type) {
    return projects.some(m => m.name == type);
}