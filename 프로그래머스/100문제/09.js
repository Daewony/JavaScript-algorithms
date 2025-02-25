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

// 

function solution2(decimal) {
    const stack = [];
    while(decimal > 0) {
        const remainder = decimal % 2;
        stack.push(remainder);
        decimal = Math.floor(decimal / 2);
    }

    let binary = "";
    while(stack.length > 0) {
        binary += stack.pop();
    }

    return binary;
}

console.log(solution2(10)); // 반환값 :  1010
console.log(solution2(27)); // 반환값 :  11011
console.log(solution2(12345)); // 반환값 : 11000000111001

function solution3(num) {
    return num.toString(2);
}

console.log(solution3(10)); // 반환값 :  1010
console.log(solution3(27)); // 반환값 :  11011
console.log(solution3(12345)); // 반환값 : 11000000111001