const q = (qz) => {
  let nqz = qz.split(" ");
  let sum = 0;
  let res = "";
  if (nqz[1] === "+") {
    sum = Number(nqz[0]) + Number(nqz[2]);
    res = sum === Number(nqz[nqz.length - 1]) ? "O" : "X";
  } else if (nqz[1] === "-") {
    sum = Number(nqz[0]) - Number(nqz[2]);
    res = sum === Number(nqz[nqz.length - 1]) ? "O" : "X";
  }
  return res;
};

function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    answer.push(q(quiz[i]));
  }

  return answer;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
})

console.log(newArr);

const orders = [
  {
    userId: 1,
    amount: 10
  },
  {
    userId: 1,
    amount: 15
  },
  {
    userId: 2,
    amount: 225
  },
]

const filterOrder = orders.filter(order => order.userId === 1).map(order => order.amount);
console.log(filterOrder)
