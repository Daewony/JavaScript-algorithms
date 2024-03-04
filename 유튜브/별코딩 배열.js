const fruits = [
  { name: '오렌지', price: 300 },
  { name: '바나나', price: 700 },
  { name: '사과', price: 500 },
  { name: '레몬', price: 1000 },
];

const item = fruits.find((fruit,index) => {
  if (fruit.price === 500) {
    return true;
  }
  return false;
})

const item2 = fruits.findIndex((fruit, index) => {
  if (fruit.price === 500) {
    return true;
  }
  return false;
});

const doesExist = fruits.some((fruit) => {
  if (fruit.price > 600) {
    return true;
  }
  return false;
})

const isOver = fruits.every((fruit) => {
  if (fruit.price > 400) {
    return true
  }
  return false;
})

const cheapFruits = fruits.filter((fruit) => {
  if (fruit.price <= 500) {
    return true;
  }
  return false;
})

const priceTags = fruits.map((fruit) => {
  return `${fruit.name}: ${fruit.price}원`;
})

console.log(item)
console.log(item2)
console.log(doesExist);
console.log(isOver);
console.log(cheapFruits);
console.log(priceTags);