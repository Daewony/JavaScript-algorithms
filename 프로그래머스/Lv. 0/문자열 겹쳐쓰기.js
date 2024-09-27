function solution(my_string, overwrite_string, s) {
  let str = [...my_string];
  str.splice(s, overwrite_string.length, ...overwrite_string);
  return str.join('');
}

