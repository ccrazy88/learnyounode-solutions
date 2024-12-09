const fs = require("fs");

const path = process.argv[2];
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    return console.error(err);
  }

  let count = 0;
  for (const char of data) {
    if (char === "\n") {
      count++;
    }
  }

  console.log(count);
});
