function solution(myString, pat) {
  let lastIndex = myString.lastIndexOf(pat) + pat.length - 1;
  return myString.slice(0, lastIndex + 1);
}
