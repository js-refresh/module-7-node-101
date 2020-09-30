const http = require('http');

// set up server config
const port = 3001;
const host = '127.0.0.1';

// create a server with a callback fundtion
const server = http.createServer((req, res) => {
  // set the HTTP status code
  res.statusCode = 200;
  // set the content type so the browser knows what it is dealing with
  res.setHeader('Content-Type', 'text/plain');
  // end the request (send it back) with some data
  res.end('Hello World');
})

// start the server by listening to the "port" at the "host" provided earlier
server.listen(port, host, () => {
  // once the server has started listening, log a message to say so
  console.log(`Server has started at http://${host}:${port}`);
})