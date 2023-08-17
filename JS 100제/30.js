const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('문자열 입력: ',a=>{
    rl.question('찾을 문자 입력: ', b=>{
        console.log(a.indexOf(b));
        rl.close();
    });
});

// console.log('pineapple is yummy'.indexOf('apple'));