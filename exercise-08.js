/* eslint-disable no-console */

const http = require("http");

const url = process.argv[2];
http
  .get(url, res => {
    res.setEncoding("utf8");
    let allData = "";
    res.on("error", console.error);
    res.on("data", data => {
      allData += data;
    });
    res.on("end", () => {
      console.log(allData.length);
      console.log(allData);
    });
  })
  .on("error", console.error);
