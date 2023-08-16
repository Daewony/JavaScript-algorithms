// // const s = prompt("학생 이름 입력");
// // const score = prompt("수학 점수 입력");
// const s = "Yujin Hyewon";
// const score = "70 100";

// // 객체를 만들때 function으로 해야할지 class 로 해야할지 애매함
// // {} 하면 안되나?

// console.log(s.split(" "));
// console.log(score.split(" ").map(Number));
// let obj = {};
// for(let i =0;i<s.length;i++){
//     // obj new MathScore(s.split(" ")[i], score.split(" ").map(Number)[i])
// }

// // class MathScore {

// //     constructor({name, score}){
// //         this.name = name;
// //         this.score = score;
// //     }
// // }
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 첫번째 입력: 학생 이름들
rl.question('학생의 이름을 공백으로 구분하여 입력하세요: ', (namesInput) => {
  const names = namesInput.split(' ');

  // 두번째 입력: 수학 점수들
  rl.question('수학 점수를 공백으로 구분하여 입력하세요: ', (scoresInput) => {
    const scores = scoresInput.split(' ').map(Number);

    // 이름과 점수를 객체로 매핑
    const studentObjects = {};
    for (let i = 0; i < names.length; i++) {
      studentObjects[names[i]] = scores[i];
    }

    console.log(studentObjects);
    
    rl.close();
  });
});
