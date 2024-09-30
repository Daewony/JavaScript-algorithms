function solution(arr) {
  let r = arr.length;
  let c = arr[0].length;

  if (r === c) return arr;

  if (r > c) {
    for (let i = 0; i < r; i++) {
      for (let j = c; j < r; j++) {
        arr[i].push(0);
      }
    }
  } else {
    console.log(c, r);
    for (let i = r; i < c; i++) {
      let a = Array(c).fill(0);
      arr.push(a);
    }
  }
  return arr;
}

// 다른 사람 풀이
function solution(arr) {
  const rowCount = arr.length;
  const colCount = arr[0].length;

  // 행이 더 많을 때 열을 채우는 작업
  if (rowCount > colCount) {
    for (let i = 0; i < rowCount; i++) {
      arr[i] = [...arr[i], ...Array(rowCount - colCount).fill(0)];
    }
  }
  // 열이 더 많을 때 행을 채우는 작업
  else if (rowCount < colCount) {
    const newRow = Array(colCount).fill(0);
    for (let i = 0; i < colCount - rowCount; i++) {
      arr.push([...newRow]);
    }
  }

  return arr;
}
