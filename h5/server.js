//T1
// Run in command prompt with $ node app.js in the same folder.
console.log('Samuli Salminen'); // => Samuli Salminen

//T2
const user = require('./user');

console.log(
  `${user.getName()} lives in ${user.getLocation()} and was born on ${user.getBirthday()}`
);

//T3
const fs = require('fs');

fs.readFile('integers.txt', (error, data) => {
  if (error) console.error(error);
  else {
    const dataString = data.toString();
    const dataArray = dataString.split(',');
    const sum = dataArray.reduce((a, b) => Number(a) + Number(b));
    console.log('Reading file and calculate a sum...');
    console.log(`Sum is ${sum}`);
  }
});

//T4
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const readCounter = () => {
  let result = '';
  try {
    result = JSON.parse(fs.readFileSync('counter.json')).count;
  } catch (error) {
    console.log('readCounter error', error);
  }
  return result;
};

const writeCounter = () => {
  let result;
  try {
    result = JSON.parse(fs.readFileSync('counter.json'));
    result.count++;
    fs.writeFileSync('counter.json', JSON.stringify(result));
  } catch (error) {
    console.log('writeCounter error', error);
  }
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(`Request counter value is ${readCounter()}`);
  res.end();
  writeCounter();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
