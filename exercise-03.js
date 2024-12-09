const fs = require("fs");

const path = process.argv[2];
const data = fs.readFileSync(path, "utf8");
let count = 0;
for (const char of data) {
  if (char === "\n") {
    count++;
  }
}

console.log(count);
