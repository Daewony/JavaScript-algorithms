function solution(myString) {
  return [...myString]
    .map((c, i) => {
      if (c === "a") return "A";
      else if (c === "A") return c;
      else return c.toLowerCase();
    })
    .join("");
}
