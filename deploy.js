const http = require("http")

const server = http.createServer((req, res) => {
  res.writeHead(200, {"content-type": "text/plain"})
  res.end('Hello from Nodejs')
})

const PORT = process.env.PORT || 3000

server.listen((PORT), () => {
  console.log(`The server is running on the port number: ${PORT}`);
})