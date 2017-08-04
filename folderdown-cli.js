const folderdown = require('folderdown');
const readlineSync = require('readline-sync');

console.log('folderdown-cli: starting process.');

const srcFolder = readlineSync.question('Path of folder with markdown files? ');
const destFolder = readlineSync.question('Path of destination folder? ');

folderdown.run(srcFolder, destFolder);

console.log('folderdown-cli: ending. process.');
