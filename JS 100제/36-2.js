const readline = require('readline');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number) || number < 1 || number > 9) {
        console.log('1부터 9까지의 숫자를 입력해주세요.');
        rl.close();
        return;
    }

    for (let i = 1; i <= 9; i++) {
        const result = number * i;
        process.stdout.write(result.toString());
        
        if (i !== 9) {
            process.stdout.write(' ');
        }
    }

    console.log(); // 줄 바꿈
    rl.close();
});