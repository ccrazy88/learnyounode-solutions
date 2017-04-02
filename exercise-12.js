const Transform = require("stream").Transform;
const http = require("http");

const port = process.argv[2];

class UppercaseTransform extends Transform {
  constructor(options) {
    super(options);
    this._transform = this._transform.bind(this);
  }

  _transform(chunk, encoding, callback) {
    const uppercaseChunk = chunk.toString().toUpperCase();
    callback(null, uppercaseChunk);
  }
}

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405);
    return res.end();
  }

  const upperTransform = new UppercaseTransform();
  req.pipe(upperTransform).pipe(res);
});

server.listen(port);
