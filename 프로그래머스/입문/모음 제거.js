// 해당 영어 알파벳만 없애고 앞으로 시키기
// filter를 사용하면 될거같은데 어떻게 사용해야할지 감이 안옴
// 다른 풀이 방식 많음

function solution(my_string) {
  my_string = my_string.split("");
  for (let i = 0; i < my_string.length; i++) {
    if (
      my_string[i] === "a" ||
      my_string[i] === "e" ||
      my_string[i] === "i" ||
      my_string[i] === "o" ||
      my_string[i] === "u"
    ) {
      my_string[i] = "";
    }
  }
  return my_string.join("");
}

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) { 
  var answer = my_string.split('');
  for (let i = 0; i < answer.length; i++){
    switch (answer[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        answer.splice(i, 1);
        i--;
        break;
    }
  }
  return answer.join('');
}

function solution(my_string) {
  return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}