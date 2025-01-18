const fs = require('node:fs')
// const fs = require('node:fs/promises') // can use promises

const fileContent = fs.readFileSync('./fs.txt' ,'utf-8') // Sync is important as it indicate the file to be read in synchronous manner, to read file in async use readFile(). utf-8 is optional
console.log(fileContent);

// Below reads the file in async way
fs.readFile('./fs.txt', (error, data) => { //error first callback function
  if(error) {
    console.log('File is not present')
  }
  else {
    console.log('File is present')
  }
})

console.log('File reading');

// The below code can we written is async also
fs.writeFileSync('./fsWrite.txt', ' data appended', {flag: 'a'}) // Creates the new file and enters the data, if file is already present it will update the file data. If flag is added it will append the data