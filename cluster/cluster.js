const cluster = require('node:cluster')
const createServer = require('./no-cluster')
const OS = require('node:os')

console.log(OS.cpus().length); // To check cpu cores.

if(cluster.isMaster) {
  console.log(`Master is running on ${process.pid}`); //Start the master worker
  cluster.fork() // Create child workers
  cluster.fork()
}
else {
  console.log(`Process is started ${process.pid}`);

  createServer.listen(3000,() => {
    console.log('Server started on 3000');
  })
}