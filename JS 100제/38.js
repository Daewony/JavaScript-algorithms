// 1~3위 결정 및 중복 처리
// 문자열 입력 => split, sort(a,b)=>b-a
// 중복이면 count 안하기 => 언제 끝날지 모름 => while문

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('학생들의 점수를 공백으로 구분하여 입력: ',n=>{
    const scores = n.split(' ').sort((a,b)=>b-a);
    let res = 0;
    console.log(scores);
    let count = 1;
    let i = 1;

    while(count<=3){
        console.log(scores[i],scores[i-1]);
        if(scores[i-1] !== scores[i]) count++;
        res++;
        i++;
    }
    console.log(res);

    rl.close();
});