const http = require('node:http')
const { Worker } = require('node:worker_threads') //This is worker is a constructor

const createServer = http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {"content-type": "text/plain"})
    res.end('Fast Page')
  }
  else if(req.url === '/slow-load') {

    /**
     * Its not proper multi-threading but its useful in resize image/videos, encrypt files
     * 
     * It won't be powerful as cluster module worker.
     * 
     */
    const worker = new Worker('./worker-thread.js')

    // Pass the heavy loading part to that file, so that this url won't slow down the above url
    worker.on("message", (j) => {
      res.writeHead(200, {"content-type": "text/plain"})
      res.end(`Slow Page number: ${j}`)
    })
  }
})

createServer.listen(8000,() => {
  console.log('Server started on 8000');
})