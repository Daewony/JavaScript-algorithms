function solution(n, control) {
  let sum = n;
  for (const c of control) {
    switch (c) {
      case "w":
        sum += 1;
        break;
      case "s":
        sum -= 1;
        break;
      case "d":
        sum += 10;
        break;
      case "a":
        sum -= 10;
        break;
      default:
        break;
    }
  }

  return sum;
}

function solution(n, control) {
  const operations = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  return [...control].reduce((acc, char) => acc + operations[char], n);
}
