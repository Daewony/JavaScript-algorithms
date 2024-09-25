function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
    default:
      return -1;
  }
}

// switch 문 말고 객체로 저장해서 풀고싶음

// 다른 사람의 풀이
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  const obj = {
    1: num_list.slice(0, b + 1),
    2: num_list.slice(a),
    3: num_list.slice(a, b + 1),
    4: num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
  };
  return obj[n] || -1;
}

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  const slicingMethods = {
    1: () => num_list.slice(0, b + 1),
    2: () => num_list.slice(a),
    3: () => num_list.slice(a, b + 1),
    4: () => num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
  };

  return slicingMethods[n] ? slicingMethods[n]() : -1;
}
