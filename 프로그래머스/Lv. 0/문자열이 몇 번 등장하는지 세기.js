// 반복문으로 확인
// myString를 pat의 길이만큼 잘라서 확인 -> 자른다 slice를 떠오르자

function solution(myString, pat) {
  var answer = 0;

  for (let i = 0; i <= myString.length - pat.length; i++) {
    let str = '';
    for (let j = i; j < i + pat.length; j++) {
      str += myString[j];
    }
    if (str === pat) answer++;
  }

  return answer;
}

// 다른 사람 풀이

function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i < myString.length - pat.length + 1; i++) {
    if (myString.slice(i, i + pat.length) === pat) count++;
  }
  return count;
}

function solution(myString, pat) {
  let answer = 0;
  let index = myString.indexOf(pat);

  // indexOf를 사용해 패턴을 찾고, 찾을 때마다 등장 횟수를 증가
  while (index !== -1) {
    answer++;
    index = myString.indexOf(pat, index + 1);
  }

  return answer;
}

function solution(myString, pat) {
  return (myString.match(new RegExp(`(?=${pat})`, 'g')) || []).length;
}
