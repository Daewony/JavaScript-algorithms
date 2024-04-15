function solution(spell, dic) {
  const s = spell.sort().join("");

  for (let word of dic) {
    console.log(word.split("").sort().join(""), s);
    if (word.split("").sort().join("") === s) return 1;
  }
  return 2;
}
