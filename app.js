const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  // Set content type header
  res.setHeader('Content-Type', 'text/html');


  let path = './views/';


  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;

    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      res.end(data);
    }
  })
});

server.listen(3000, 'localhost', () => {
  console.log('New connection');
});

console.log('Listening to port 3000..');