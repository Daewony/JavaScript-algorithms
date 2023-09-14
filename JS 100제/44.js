const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// 각각의 합 => sum
// 0에서 걸리니 0보다 크게 설정
rl.question('입력:', n=>{

    let sum = 0;
    n = parseInt(n);

    while(n>0){
        sum += n%10;
        n = Math.floor(n/10); 
    }
    console.log(sum);

    rl.close();
})