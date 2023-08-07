const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const 행성 = ["", "수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];

// console.log('값을 입력하세요:');
rl.question('', (inx) => {
    console.log("입력: ", parseInt(idx));
    console.log("출력: ", 행성[idx]);
    rl.close();
});
// rl.on('close', () => {
//     console.log(Number(data[0]) + Number(data[1]));
//     reader.close();
//     process.exit();
//   });



// console.log(행성[0]);