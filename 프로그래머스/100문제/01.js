// 기존문자열 -> 배열 -> 숫자만 남는 배열로 만들기 -> 오름차순
// split -> 조건식으로 걸러야함 -> filter 활용

// https://school.programmers.co.kr/learn/courses/30/lessons/120850#

function isNumber(num){
    return num >= '0' && num <='9'; 
}

function solution(my_string) {
    return my_string.split('').filter(isNumber).map(v=>Number(v)).sort((a,b)=>a-b);
}

function solution2 (my_string) {
    return my_string.filter(v=>!isNaN(v)).map(v=>Number(v)).sort((a,b)=>a-b);
}
