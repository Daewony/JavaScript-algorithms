function solution(picture, k) {
  var answer = [];
  for (let i = 0; i < picture.length; i++) {
    let arr = [];
    for (let j = 0; j < picture[0].length; j++) {
      let c = picture[i][j];
      for (let m = 1; m <= k; m++) {
        arr.push(c);
      }
    }
    for (let n = 1; n <= k; n++) {
      answer.push(arr.join(''));
    }
  }

  return answer;
}

// 다른 사람 풀이
function solution(picture, k) {
  return picture.flatMap((row) =>
    Array(k).fill(
      row
        .split('')
        .map((char) => char.repeat(k))
        .join('')
    )
  );
}
