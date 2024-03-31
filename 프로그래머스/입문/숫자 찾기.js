function solution(num, k) {
  var answer = -1;
  num = String(num).split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] === String(k)) {
      answer = i + 1;
      break;
    }
  }

  // String(num).split('').forEach((n,i)=>{
  //     if(n===String(k)){
  //         answer = i + 1;
  //         return answer;
  //     }
  // })
  return answer;
}
