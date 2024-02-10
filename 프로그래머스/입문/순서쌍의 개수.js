function solution(n) {
  var answer = 0;
  // for(let i =1;i<=n;i++){
  //     for(let j=n;j>=1;j--){
  //         if(i*j===n) answer+=1;
  //     }
  // }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += 1;
  }
  return answer;
}