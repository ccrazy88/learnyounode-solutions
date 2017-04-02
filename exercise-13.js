const http = require("http");
const url = require("url");

const port = process.argv[2];

const getTimeForDate = date => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};

const getUnixTimeForDate = date => {
  return { unixtime: date.getTime() };
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405);
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const date = new Date(parsedUrl.query.iso);

  let result;
  if (pathname === "/api/parsetime") {
    result = getTimeForDate(date);
  } else if (pathname === "/api/unixtime") {
    result = getUnixTimeForDate(date);
  }

  if (!result) {
    res.writeHead(404);
    return res.end();
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
});

server.listen(port);
