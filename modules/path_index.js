const path = require('node:path')

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.extname(__filename));

let file_path = path.parse(__filename)
console.log(file_path)
console.log(file_path.dir)


console.log(path.format(file_path))
console.log(path.isAbsolute(__filename))
console.log(path.isAbsolute('path_index.js')) //becomes relative path
console.log('-----------------Join Path-------------------');
console.log(path.join('folder1', 'folder2', 'display.html'))
console.log(path.join('/folder1', 'folder2', 'display.html'))
console.log(path.join('folder1', '//folder2', 'display.html'))
console.log(path.join('folder1', '/folder2', '../display.html'))
console.log(path.isAbsolute(path.join(__dirname, 'path_index2.js')))
console.log('-----------------Resolve Path------------------------');
console.log(path.resolve('folder1', 'folder2', 'display.html'))
console.log(path.resolve('/folder1', 'folder2', 'display.html'))
console.log(path.resolve('folder1', '//folder2', 'display.html'))
console.log(path.resolve('folder1', '/folder2', '../display.html'))
console.log(path.isAbsolute(path.resolve(__dirname, 'path_index2.js')))