const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  console.log(str.split('').join('\n'));
  rl.close();
});

// 다른 사람의 풀이
const readline2 = require('readline');
const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl2.on('line', function (line) {
  console.log(line.split('').join('\n'));
  rl2.close();
});
