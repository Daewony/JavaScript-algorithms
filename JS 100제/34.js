const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isSort(x) {
    const numArr = x.split(' ').map(Number);
    const numArr2 = x.split(' ').map(Number).sort((a,b)=>a-b);
    for(let i = 0;i<numArr.length; i++){
        if(numArr[i] !== numArr2[i]) return console.log("NO");
    }
    return console.log("YES");
}

// 배열은 비교할 수 없다, 각각의 요소가 같은지 반복문으로 확인하거나 JSON으로 변환하는 방법으로 해야한다.

// 그냥 문자열자체로 비교하여 같은것인지로 문제를 풀수 있음

// sort를 하면 원본에도 영향을 미친다
// ex) const numArr2 = numArr.sort((a,b)=>a-b);
// => numArr도 정렬됨


rl.question('입력: ', x=>{

    isSort(x);

    rl.close();
})