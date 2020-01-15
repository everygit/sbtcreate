# sbtcreate
create some project

# help
```
$ sbtcreate
Usage: sbtcreate [options] [command] <cmd> [options]

Options:
  -V, --version                 output the version number
  -h, --help                    output usage information

Commands:
  create|c [options] [project]  create a project by project name
  page|p <name> [type]          Create a single page file or a group of files
  ls|l [options]                show all projects, you can create
```

# example
```sh
npx sbtcreate c demo -t empty
```
projects list
```sh
$ sbtcreate ls
****list****
empty   :an empty project only html and css js folder
webpack :an simple webpack project
```