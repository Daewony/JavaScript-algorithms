// 1. 문자 소문자로 처리하기
// 2. split으로 나누기
// 3. 맨앞에 있는 문자가 알파벳이면 대문자로 처리하기

function solution(s) {
  // 1
  const arr = s.toLowerCase().split(' ');
  console.log(arr);

  // 2
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= 'a' && arr[i][0] <= 'z') {
      const S = arr[i][0].toUpperCase();
      const str = arr[i].split('');
      str[0] = S;
      arr[i] = str.join('');
    }
  }
  //     arr.map(v=>{
  //         if(v[0] >= 'a'&& v[0] <='z')

  //     })

  return arr.join(' ');
}

// 1. 모든 단어의 첫 문자는 대문자로 바꾼다.
// 2. 나머지 문자는 소문자로 유지한다.
// 3. 숫자가 단어의 첫 문자라면, 대문자로 바꿀 필요가 없다.
// 4. 공백이 연속으로 올 수 있으므로, 공백을 유지하면서 처리해야 한다.

function solution2(s) {
  // 모든 문자를 소문자로 변환 후 공백 기준으로 나누기
  const words = s.toLowerCase().split(' ');

  // 각 단어를 순회하며 처리
  const jadenCased = words.map((word) => {
    if (word.length > 0 && word[0] >= 'a' && word[0] <= 'z') {
      // 첫 문자가 알파벳이면 대문자로 변환
      return word[0].toUpperCase() + word.slice(1);
    }
    // 알파벳이 아니면 그대로 반환
    return word;
  });

  // 공백을 포함해 문자열로 재결합
  return jadenCased.join(' ');
}
