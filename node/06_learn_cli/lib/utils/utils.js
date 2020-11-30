const fs = require('fs');
const path = require('path');

const ejs = require('ejs');

const compile = (templateName, data) => {
  const templatePosition = `../templates/${templateName}`;
  const templatePath = path.resolve(__dirname, templatePosition)
  
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, {data}, {}, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      
      resolve(result);
    });
  })
}

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
}

module.exports = {
  compile,
  writeToFile
}