function solution(letter) {
  var answer = "";
  morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  let arr = letter.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (a in morse) {
      if (arr[i] === a) answer += morse[a];
    }
  }
  return answer;
}
// 객체 접근하는 방법 덜 익숙함