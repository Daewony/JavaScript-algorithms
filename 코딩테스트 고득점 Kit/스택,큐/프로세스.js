// 1 4 2 7 8 5  -> max값을 찾아서 idx를 저장하기
// max값이 같을 시 나중에 나온 것의 idx를 저장하기
// 2 1 3 2
// 3 2 2 1 = 2 3 0 1

// 1 1 0 1 1 1

function solution(priorities, location) {
  //     var answer = 0;
  //     let arr = [];
  //     for(let i=0;i<priorities.length;i++){
  //         let max = -1;
  //         let idx=-1;
  //         for(let j=0;j<priorities.length;j++){
  //             if(max < priorities[j]){
  //                 max = priorities[j];
  //                 idx = j;
  //             } else if (max == priorities[j] && j >= 1 && priorities[j-1] == 0){
  //                 idx = j;
  //             }
  //         }
  //         arr.push(idx);
  //         priorities[idx] = 0;
  //     }
  //     // for (let i of arr){
  //     //     console.log(i);
  //     // }

  //     for(let i =0;i<arr.length;i++){
  //         if(arr[i]==location) {
  //             answer = i + 1;
  //             break;
  //         }
  //     }

  //     return answer;
  const queue = [];
  priorities = priorities.map((priority, index) => [priority, index]);

  while (priorities.length) {
    const [priority, index] = priorities.shift();
    const higherImportance = priorities.findIndex(
      ([value, _]) => value > priority
    );

    if (higherImportance === -1) {
      if (index === location) return queue.length + 1;
      queue.push([priority, index]);
      continue;
    }

    priorities.push([priority, index]);
  }
}
