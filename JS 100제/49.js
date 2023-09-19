const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("입력: ",n=>{
    // 문자열의 배열을 정수형의 배열로 변경
    let res = n.split(' ').map(str=>parseInt(str));
    console.log(Math.max(...res)); // 배열로는 못하니 풀어서 사용하기
    rl.close();
})