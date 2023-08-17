const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('알파벳 입력: ', e => {
    if(e === e.toUpperCase()) console.log("YES");
    else console.log("NO");
    rl.close();
})