const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('입력: ',input =>{

    console.log(input.split(' ').length);


    rl.close();
});