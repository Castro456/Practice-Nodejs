const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req, res) => { // res is the server response | respond the code to any incoming request
  const responseData = {
    'first_name': 'Zayn',
    'last_name': 'Malik'
  }
  res.writeHead(200, {'content-type': 'text/html'}) // http statuscode, treat this response as json
  // res.end(JSON.stringify(responseData)); // end the response

  // const htmlFile = fs.readFileSync('./index.html', 'utf-8')
  // res.end(htmlFile)

  // let htmlFile = fs.createReadStream(__dirname + '/index.html').pipe(res) // This is the optimized way to display html file.

  let htmlFile = fs.readFileSync('./index.html', 'utf8') // This is the optimized way
  htmlFile = htmlFile.replace("{{name}}", responseData.first_name)
  res.end(htmlFile)
})

server.listen((3000), () => { // listen to this port
  console.log('Server is running...');
})