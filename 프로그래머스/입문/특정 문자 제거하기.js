// function solution(my_string, letter) {
//     let answer = [...my_string];
//     for(let i=0;i<answer.length;i++){
//         if(answer[i]===letter){
//             answer[i]='';
//         }
//     }
//     return answer.join('');
// }

function solution(my_string, letter) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) answer += my_string[i];
  }
  return answer;
}
