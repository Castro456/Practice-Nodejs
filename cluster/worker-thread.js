const { parentPort } = require('node:worker_threads') // parentPort is object

let j =0
for (let i = 0; i < 7000000000; i++) {  
  j++    
}

parentPort.postMessage(j) //Pass the value to the parent file