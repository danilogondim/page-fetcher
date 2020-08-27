const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localFilePath = process.argv[3];

console.log(url);
console.log(localFilePath);

request(url, (error, response, body) => {
  console.log(body);
});