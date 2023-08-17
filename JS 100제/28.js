const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('입력: ',(x) =>{

    for(let i =0;i<x.length-1;i++){
        console.log(x.split('')[i],x.split('')[i+1]);
    }

    rl.close();
});