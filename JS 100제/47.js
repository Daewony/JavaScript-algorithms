const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };


const uniquePeople = {};

for(const key in people) {
    uniquePeople[key] = people[key];
}

console.log(Object.keys(uniquePeople).length);
console.log(uniquePeople.length);

let result = new Set();
for (let key in people) {
  result.add(people[key]);
}
console.log(result.size);