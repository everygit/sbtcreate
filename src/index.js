/**
 * Copyright (c) 2020-present, everygit
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('colors');
const commander = require('commander');
const inquirer = require('inquirer');

const packageJson = require('../package.json');

const program = new commander.Command();
program.version(packageJson.version);

// program
//     .option('-l, --list', 'show all projects, you can create')
// global options


// sub
program.command('create [project]')
    .description('create a project by project name')
    .action((project, cmd) => {
        console.log(project);
        console.log(cmd);
    })

program.command('ls')
    .description('show all projects, you can create')
    .option('-a, --all', 'show all')
    .action(() => {
        console.log('****list****'.yellow)
        console.log(`${'empty'.yellow}:a empty project`)
        console.log(`${'webpack'.yellow}:a base webpack project`)
    })

program.parse(process.argv);

// console.log(program.list);