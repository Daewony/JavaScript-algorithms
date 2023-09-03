// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const voteCounts = {};

// rl.question('학생들이 뽑은 후보들을 입력하세요 (띄어쓰기로 구분): ', input => {
//     const candidates = input.split(' ');

//     candidates.forEach(candidate => {
//         if (!voteCounts[candidate]) {
//             voteCounts[candidate] = 1;
//         } else {
//             voteCounts[candidate]++;
//         }
//     });

//     let winner = '';
//     let maxVotes = 0;

//     for (const candidate in voteCounts) {
//         if (voteCounts[candidate] > maxVotes) {
//             winner = candidate;
//             maxVotes = voteCounts[candidate];
//         }
//     }

//     console.log(`${winner}(이)가 총 ${maxVotes}표로 반장이 되었습니다.`);
//     rl.close();
// });

const arr = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(' ');

let res = {};
let winner = "";

for(let index in arr) {
    let val = arr[index];
    res[val] = res[val] === undefined ? 1 : res[val] += 1;
    console.log("index: ",index);
    console.log(arr);
    console.log(val);
    console.log(res);
    console.log(res[val]);
}

winner = Object.keys(res).reduce(function(a, b){

    return res[a] > res[b] ? a : b
  });
  console.log("끝");
console.log(winner);
console.log(res);
console.log(res[winner]);

// 답

// const array = prompt('이름을 입력해주세요.').split(' ');
// let result = {};
// let winner = "";

// for(let index in array){
//   let val = array[index];
//   result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
// }

// winner = Object.keys(result).reduce(function(a, b){
//   return result[a] > result[b] ? a : b
// });

// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);