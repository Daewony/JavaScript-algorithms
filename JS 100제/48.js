const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('입력: ', e=>{

    let changeCase = '';
    for(let i of e){
        if('A'<= i && i <= 'Z') changeCase += i.toLowerCase();
        if('a'<= i && i <= 'z') changeCase += i.toUpperCase();
    }
    console.log(changeCase);

    const result = e.split('').map(char => {
        if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            return char.toUpperCase();
        } else {
            return char;
        }
    }).join('');

    console.log(result);


    rl.close();
})