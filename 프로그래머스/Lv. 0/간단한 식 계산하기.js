function solution(binomial) {
  let [a, op, b] = binomial.split(' ');
  switch (op) {
    case '+':
      return Number(a) + Number(b);
    case '-':
      return Number(a) - Number(b);
    case '*':
      return Number(a) * Number(b);
    default:
      break;
  }

  return 0;
}

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](Number(a), Number(b));
}
