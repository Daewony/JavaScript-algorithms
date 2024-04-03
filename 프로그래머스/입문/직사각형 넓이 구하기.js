// 직사각형의 넓이 구하기 -> 밑변 x 높이 =>  | x2-x1 | * |y2-y1|
// 가로 세로 길이를 어떻게 구할 것인가?
// x1과 같은 값인 x를 찾고 그 배열의 y값의 차를 통해 높이를 구한다
// 구했던 것을 배열에 없애고 싶지만 번거로우니 반복문 4번을 하자

function solution(dots) {
  let [h, w] = [0, 0];
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (dots[i][0] === dots[j][0]) {
        w = Math.abs(dots[i][1] - dots[j][1]);
      }
      if (dots[i][1] === dots[j][1]) {
        h = Math.abs(dots[i][0] - dots[j][0]);
      }
    }
  }

  return h * w;
}
