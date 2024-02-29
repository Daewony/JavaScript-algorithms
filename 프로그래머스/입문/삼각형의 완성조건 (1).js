function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  const [a, b, c] = [sides[0], sides[1], sides[2]];
  return c < a + b ? 1 : 2;
}
