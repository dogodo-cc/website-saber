const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../bin');

const files = fs.readdirSync(filePath);
files.forEach( file => {
  const oldPath = `${filePath}/${file}`;
  const newPath = `${filePath}/${file.replace('.js.js', '.js')}`;
  
  fs.rename(oldPath, newPath, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(newPath)
    }
  });
})
