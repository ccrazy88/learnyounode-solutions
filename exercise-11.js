const fs = require("fs");
const http = require("http");

const port = process.argv[2];
const path = process.argv[3];
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const file = fs.createReadStream(path);
  file.pipe(res);
});

server.listen(port);
