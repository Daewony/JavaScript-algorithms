const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str1 = input[0];
  str2 = input[1];
  console.log(str1 + str2);
  // 프로그램 종료 시키기
  rl.close();
});

// 다른 사람 풀이
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const [str1, str2] = line.split(' ');
  console.log(str1 + str2);
  rl.close(); // 입력을 받으면 바로 종료
});
