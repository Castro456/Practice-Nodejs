const http = require('node:http')

const createServer = http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {"content-type": "text/plain"})
    res.end('Hello')
  }
  else if(req.url === '/slow-load') {
    // After workers are created even if this page took too much time to load,
    // it wont affect the above page loading time.

    for (let i = 0; i < 7000000000; i++) {      
    }

    res.writeHead(200, {"content-type": "text/plain"})
    res.end('Slow Page')
  }
})

// createServer.listen(3000,() => {
//     console.log('Server started on 3000');
//   })

module.exports = createServer

/**
 * IMPORTANT
 * 
 * npm install -g pm2
 * 
 * pm2 start no-cluster.js -i 0
 * pm2 stop no-cluster.js
 * 
 * The above comment will automatically spans the workers according the needs.
 * It also can't spans more cluster than the PC's cpu cores.
 * 
 */
