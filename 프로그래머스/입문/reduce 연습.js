function isPalindrome(str) {
  // 여기에 코드를 작성하세요
  let arr = [...str]
  console.log(arr);
  // if (arr.join('')=== arr.reverse().join('')) return true;
  if (arr.join('')=== arr.reduce((acc,cur)=>(cur+acc),'')) return true;
  return false;
}
// reduce로 reverse(), join()을 대신할 수가 있음
// 문자열을 분해할때는 spread 문법사용하기
// split는 배열 사이에 어떤 특정 조건일때 구별함


console.log(isPalindrome("level")); // 예상 출력: true
console.log(isPalindrome("hello")); // 예상 출력: false
