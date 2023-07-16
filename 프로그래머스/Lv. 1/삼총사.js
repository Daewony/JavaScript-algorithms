const getCombinations = function (arr, num) {
    const res = [];
    if (num === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combi = getCombinations(rest, num - 1);
        const attached = combi.map((comb) => [fixed, ...comb]);
        res.push(...attached);
    });

    return res;
}

function solution(number) {
    // 3중 for문이 먼저 떠오름, cursor 3개로 삼총사를 일일이 찾는 과정이 먼저 떠오름 -> 시간 오버
    // Combination으로 풀면 좋지 않을까 -> 어떻게 만들지?
    let res = 0;
    // for(let i=0;i<number.length-2;i++){
    //     for(let j = i+1;j<number.length-1;j++){
    //         for(let k = j+1;j<number.length;k++){
    //             if(number[i]+number[j]+number[k]===0) res++;
    //         }
    //     }
    // }
    let list = getCombinations(number, 3);
    for (let i of list) {
        let sum = i.reduce((total, num) => total + num, 0);
        if (sum === 0) res++;
    }
    return res;
}

// 조합 과정 다시 해보기