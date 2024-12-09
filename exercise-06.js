const filter = require("./exercise-06-filter");

const folder = process.argv[2];
const ext = process.argv[3];
filter(folder, ext, (err, files) => {
  if (err) {
    return console.error(err);
  }
  for (const file of files) {
    console.log(file);
  }
});
