const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('입력: ',x=>{
    const number = parseInt(x);

    //입력값 검증 안함
    if(isNaN(number) | number  < 1 | number > 9) {
        console.log('1부터 9까지의 숫자를 입력해주세요.');
    } else {
        let arr = "";
        for(let i =1;i<=9;i++){
            arr+=`${x*i} `;
        }
        console.log(arr);
    }
    rl.close();
});

// 입력값 검증 및 변수명 잘 하기


