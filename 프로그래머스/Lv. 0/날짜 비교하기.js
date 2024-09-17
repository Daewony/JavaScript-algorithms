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
