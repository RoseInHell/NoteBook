const program = require('commander');

const helpOptions = () => {
  // 增加自己的options
  program.option('-w --why', 'a why cli');
  program.option('-d --dest <dest>', 'a destination folder');
  program.option('-f --framwork <framework>', 'your framework');

  program.on('--help', function() {
    console.log("");
    console.log("usage");
    console.log(" coderwhy -v");
    console.log(" coderwhy --version")
  })
}

module.exports = {
  helpOptions
}