function solution(date1, date2) {
  const [year1, month1, day1] = date1;
  const [year2, month2, day2] = date2;

  if (year1 < year2) return 1;
  if (year1 > year2) return 0;

  // 연도가 같을 경우 월 비교
  if (month1 < month2) return 1;
  if (month1 > month2) return 0;

  // 연도와 월이 같을 경우 일 비교
  if (day1 < day2) return 1;

  return 0;
}

// 다른 사람 풀이
function solution(date1, date2) {
  const d1 = new Date(date1[0], date1[1] - 1, date1[2]);
  const d2 = new Date(date2[0], date2[1] - 1, date2[2]);

  return d1 < d2 ? 1 : 0;
}

const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

function solution(date1, date2) {
  return date1.join('') - date2.join('') < 0 ? 1 : 0;
}
