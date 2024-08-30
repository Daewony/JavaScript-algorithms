// 나의 풀이
function solution(ineq, eq, n, m) {
  var answer = 0;
  if (ineq === ">") {
    if (eq === "=") {
      if (n >= m) answer = 1;
    } else {
      if (n > m) answer = 1;
    }
  } else if (ineq === "<") {
    if (eq === "=") {
      if (n <= m) answer = 1;
    } else {
      if (n < m) answer = 1;
    }
  }

  return answer;
}

// GPT 방식

function solution(ineq, eq, n, m) {
  const condition = ineq + eq;

  switch (condition) {
    case ">=":
      return n >= m ? 1 : 0;
    case "<=":
      return n <= m ? 1 : 0;
    case ">":
      return n > m ? 1 : 0;
    case "<":
      return n < m ? 1 : 0;
    default:
      return 0;
  }
}

// 다른사람 풀이

const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}
