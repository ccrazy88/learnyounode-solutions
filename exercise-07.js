const http = require("http");

const url = process.argv[2];
http
  .get(url, (res) => {
    res.setEncoding("utf8");
    res.on("error", console.error);
    res.on("data", console.log);
  })
  .on("error", console.error);
