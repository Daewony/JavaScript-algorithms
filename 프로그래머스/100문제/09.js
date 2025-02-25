// console.log(solution(10)); // 반환값 :  1010
// console.log(solution(27)); // 반환값 :  11011
// console.log(solution(12345)); // 반환값 : 11000000111001

// 10진수 -> 2진수
// 나머지를 구하는 방법으로 활용
// 8/2 => 0
// 4/2 => 0
// 2/2 => 0
// 1
// 1000
// 하나씩 배열에 넣고 반전으로 하면됨

function solution(num) {
    const arr = [];
    while(num>1){
        arr.push(num%2);
        num = Math.floor(num/2);
    }
    if(num===1) arr.push(num);
    return arr.reverse().join('');
}

console.log(solution(10)); // 반환값 :  1010
console.log(solution(27)); // 반환값 :  11011
console.log(solution(12345)); // 반환값 : 11000000111001