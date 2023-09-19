function bubble(arr) {
    let result = arr.slice(); 
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j=i;j<result.length -1;j++) {
        if (result[j] > result[j + 1]) {
        //    let tmp = result[j];
        //     result[j]=result[j+1];
        //     result[j+1]=tmp;
           [result[j],result[j+1]] = [result[j+1],result[j]];
        }
      }
    }
    return result;
  }
  
  const items = '4 2 3 8 5'.split(' ').map((n) => {
    return parseInt(n, 10);
  });

  console.log(items);
  
  console.log(bubble(items));