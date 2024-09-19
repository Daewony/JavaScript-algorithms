function solution(my_string, indices) {
  my_string = [...my_string];
  indices
    .sort((a, b) => a - b)
    .forEach((v, i) => {
      my_string.splice(v, 1, '');
    });
  return my_string.join('');
}
