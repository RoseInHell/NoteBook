const program = require('commander');

const {
  createProjectAction,
  addComponentAction
} = require('./actions')

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone repistory into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <component>')
    .description('add vue component, 例如：why addcpn HelloWorld')
    .action((name) => {
      addComponentAction(name, program.dest || 'scr/components');
    })
}

module.exports = {
  createCommands
}