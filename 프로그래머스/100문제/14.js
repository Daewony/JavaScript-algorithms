// 선택된 행
// z 키 -> 스택을 활용해라
// 삭제시 전체 행번호가 줄어듦 -> 현재 선택된 행이 전체 행번호보다 작다면 선택된 행 이동해야함
// 목표: 삭제된 행을 알고 싶음
// -> 해당 이름이 있는지 일일히 비교하는 방법
// -> 삭제된 행 번호를 기억하는 방법
// -> OOOOOOO로 한다음에 하나씩 대입해서 x이면 더 이동할 수 있게 하는 방법

function solution(n, k, cmd) {
  let answer = "";
  const arr = [];
  // n의 길이만큼 'O'을 배열로 채우기, 0부터 시작인것을 참고하기
  for (let i = 1; i <= n; i++) {
    arr.push("0");
  }
  // console.log(arr)

  // cmd의 값을 for문으로 돌려보고 cmd의 값에 따라 맞는 이벤트 처리하기 -> k위치에서 시작하기
  for (const i of cmd) {
    let c = i.split(" ");
    // console.log(c)
    // console.log(c.split(' '))
    // c.split(' ') 의 길이가 1일때 처리
    if (c.length === 1) {
      if (c[0] === "C") {
      } else if (c[0] === "Z") {
      }
    }
    // c.split(' ') 의 길이가 2일때 처리
    else if (c.length === 2) {
      if (c[0] === "U") {
      } else if (c[0] === "D") {
      }
    }
  }
  // result를 확인하고 이동하는 식으로 처리하기
  // O이면, 이동 숫자 증가
  // X이면, 이동 숫자 무시
  // 표의 범위를 벗어나는 이동 입력 없음

  // let arr = answer.split('');
  console.log(answer);
  return answer;
}
