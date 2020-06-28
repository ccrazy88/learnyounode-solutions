const fs = require("fs");
const path = require("path");

const filter = (folder, ext, callback) => {
  fs.readdir(folder, (err, files) => {
    if (err) {
      return callback(err);
    }
    const extWithPeriod = "." + ext;
    const filteredFiles = files.filter(
      (file) => path.extname(file) === extWithPeriod
    );
    callback(null, filteredFiles);
  });
};

module.exports = filter;
