// function solution(arr) {
//     for(var i = 0; i< arr.length; i++){
//         if(Math.min(...arr) == arr[i]){
//             arr.splice(i,1);
//         }
//     }
//     if(arr == '') return [-1];
//     return arr;
// }
function solution(arr) {
    const min = Math.min(...arr); // 배열에서 최소값 구하기
    const result = arr.filter((num) => num !== min); // 최소값을 제외한 요소로 새로운 배열 생성

    if (result.length === 0) {
        return [-1];
    }

    return result;
}
