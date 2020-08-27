const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    throw error;
  }
  fs.writeFile(localFilePath, body, (err) => {
    if (err) {
      throw err;
    }
    fs.stat(localFilePath, (err, stats) => {
      if (err) {
        throw err;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`);
    });
  });
});