function solution(myString) {
  return [...myString]
    .map((c, i) => {
      if (c === "a") return "A";
      else if (c === "A") return c;
      else return c.toLowerCase();
    })
    .join("");
}

// 다른 사람의 풀이

// or 연산자 활용
function solution(myString) {
  return [...myString]
    .map((e) => (e == "a" || e == "A" ? "A" : e.toLowerCase()))
    .join("");
}

// includes 메서드 활용
function solution(myString) {
  return [...myString]
    .map((str) => (["a", "A"].includes(str) ? "A" : str.toLowerCase()))
    .join("");
}

// replaceAll 메서드 활용

const solution = (s) => s.toLowerCase().replaceAll("a", "A");
