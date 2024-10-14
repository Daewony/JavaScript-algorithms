function solution(common) {
  // 등차수열 & 등비수열 인지 구분하기
  let a = common[1] - common[0];
  let b = common[2] - common[1];

  if (a === b) return common[common.length - 1] + a;

  return common[common.length - 1] * (b / a);
}

// 다른 사람의 풀이
function solution(common) {
  // 등차수열인지 등비수열인지 판별
  if (common[1] - common[0] === common[2] - common[1]) {
    // 등차수열인 경우
    const diff = common[1] - common[0];
    return common[common.length - 1] + diff;
  } else {
    // 등비수열인 경우
    const ratio = common[1] / common[0];
    return common[common.length - 1] * ratio;
  }
}

function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}
