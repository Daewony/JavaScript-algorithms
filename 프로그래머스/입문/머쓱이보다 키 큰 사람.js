// function solution(array, height) {
//     var answer = array.length;
//     array = array.sort((a,b)=>a-b);
//     for(let i=0;i<array.length;i++){
//         if(array[i]<height){
//             answer--;
//         } else {
//             break;
//         }
//     }
//     return answer;
// }

function solution(array, height) {
  return array.filter((h) => h > height).length;
}
