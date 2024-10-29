// true인 것만 배열에 남기도록 하기 filter -> 순위를 정렬한 후에 원본에서 3개를 뽑아서 결과값 내기

function solution(rank, attendance) {
  const f = rank.filter((v, i) => attendance[i] === true).sort((a, b) => a - b);
  const [a, b, c, ...d] = f;
  return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}

// 다른 사람 풀이
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}

function solution(rank, attendance) {
  const selected = rank
    .map((v, i) => ({ rank: v, index: i }))
    .filter(({ index }) => attendance[index])
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3);
  const [a, b, c] = selected.map(({ index }) => index);
  return 10000 * a + 100 * b + c;
}
