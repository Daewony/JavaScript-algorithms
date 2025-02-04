// 배열 입력 -> 중복 제거 -> 정렬

function solution(arr){
    // 중복제거
    arr = [...new Set(arr)];
    // 정렬
    arr.sort((a,b)=>b-a);
    return arr;
}

console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]

// console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]
// console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [5, 4, 3, 2, 1]