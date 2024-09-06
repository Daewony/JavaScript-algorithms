function solution(arr, delete_list) {
  for (const i of delete_list) {
    let idx = arr.indexOf(i);
    if (idx !== -1) arr.splice(idx, 1);
  }

  return arr;
}

function solution(arr, delete_list) {
  return arr.filter((a) => !delete_list.includes(a));
}
