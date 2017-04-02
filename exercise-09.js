/* eslint-disable no-console */

const http = require("http");

const allUrls = process.argv.slice(2);
const allData = [];
let finished = 0;

const printAllData = () => {
  for (const data of allData) {
    console.log(data);
  }
};

const fetch = (url, index) => {
  http
    .get(url, res => {
      res.setEncoding("utf8");
      res.on("error", console.error);

      let joinedData = "";
      res.on("data", data => {
        joinedData += data;
      });

      res.on("end", () => {
        allData[index] = joinedData;
        finished++;
        if (finished === allUrls.length) {
          printAllData();
        }
      });
    })
    .on("error", console.error);
};

allUrls.forEach((url, index) => {
  fetch(url, index);
});
