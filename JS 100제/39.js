const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력: ',e=>{
    console.log("출력:",e.replace(/q/gi,'e'));


    rl.close();
})