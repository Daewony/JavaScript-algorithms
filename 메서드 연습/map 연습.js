const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
];

// 여기에 map을 사용하여 각 사용자의 이름과 이메일을 출력하는 코드를 작성하세요.
users.map((key, index) => {
  console.log(key.name,key.email)
})