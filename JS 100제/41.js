const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question('소수 판별 프로그램 / 입력: ',n=>{

    n = parseInt(n);

    if(isNaN(n) || n<=1){
        console.log("NO");
        rl.close();
        return;
    }

    let isPrime = true;

    for(let i =2;i<Math.sqrt(n);i++){
        if(n%i===0) {
            isPrime = false;
            break;
        } 
    } 

    if (isPrime) {
        console.log("YES");
    } else {
        console.log("NO");
    }
    rl.close();
});