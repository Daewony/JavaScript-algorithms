const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('입력: ',input => {
    console.log(input.split(' ').reverse().join().replace(/,/g,' '));
    rl.close();
});