function solution(my_string, m, c) {
  var answer = '';
  let arr = [...my_string];
  let cur = 0;
  for (let i = 0; i < arr.length; i++) {
    if (cur + m === i) {
      answer += arr[i];
      cur += m;
    }
    if (i === c - 1) {
      answer += arr[i];
      cur = i;
    }
  }

  return answer;
  // return [...my_string].filter((s,i)=>);
}

// 1 5 9 => 4n + 1

// 0 1 2

// 다른 사람 풀이
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join('');
}
