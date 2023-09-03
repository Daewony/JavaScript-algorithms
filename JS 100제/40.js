const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('입력\n',e=>{
//     let limit_Weight = 

//     rl.close();
// });

function calculateRideCapacity(maxWeight, friends) {
    let totalWeight = 0;
    let count = 0;
  
    for (let i = 0; i < friends.length; i++) {
      totalWeight += friends[i];
  
      if (totalWeight <= maxWeight) {
        count++;
      } else {
        break;
      }
    }
  
    return count;
  }
  
  rl.question('제한 무게를 입력하세요: ', (maxWeight) => {
    rl.question('친구들의 수를 입력하세요: ', (friendCount) => {
      const friends = [];
  
      function getFriendWeights() {
        if (friends.length === parseInt(friendCount)) {
          const rideCapacity = calculateRideCapacity(parseInt(maxWeight), friends);
          console.log(rideCapacity);
          rl.close();
          return;
        }
  
        rl.question(`친구 ${friends.length + 1}의 몸무게를 입력하세요: `, (weight) => {
            friends.push(parseInt(weight));
            getFriendWeights();
          });
      }
  
      getFriendWeights();
    });
  });