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
const projects = require('./projects');

const cmdName = packageJson.name;

const program = new commander.Command();
program.version(packageJson.version).name(cmdName);


// sub
program.command('create [project]')
    .description('create a project by project name')
    .option('-t, --type <type>', 'project type')
    .action((project, cmd) => {
        console.log(project);
        console.log(cmd.type)
    })

program.command('ls')
    .description('show all projects, you can create')
    .option('-a, --all', 'show all')
    .action(() => {
        console.log('****list****'.yellow)
        projects.forEach(m => console.log(`${m.name.yellow}\t:${m.desc}`))
    })


program.arguments('<cmd> [options]').action((currentcmd, opt, cmd) => {
    console.log(`${cmdName}: '${currentcmd.yellow}' is not command, See '${cmdName} --help'`);
})

program.parse(process.argv);

if(!process.argv.slice(2).length) {
    program.outputHelp();
}