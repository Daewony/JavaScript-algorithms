// 행렬의 곱셈

// 3x2 <->2x2 => 3x2

// 전체의 틀을 처음부터 알 수 있으니, 2차원배열을 0으로 채우기
// 행렬의 곱셈 공식으로 처리하기
// 2중 반복문 활용(2차원배열이니)

function solution(arr1, arr2) {
  //     행 x 열
  let answer = Array(arr1.length)
    .fill(0)
    .map(() => Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      // answer[i][j]=arr1[i][j]*arr2[j][j];
      for (let k = 0; k < arr2.length; k++) {
        // 곱셈 연산
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}
