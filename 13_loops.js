const userNames = ["Name1", "Name2", "Name3", "Name4"];
// ForEach

// forEach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database)

// map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase)
userNames.forEach(function (item, index, actualArray) {
  // Can take upto 3 values
  console.log(item);
  console.log(index);
  console.log(actualArray);
});

const users = [
  { id: 1, name: "James" },
  { id: 2, name: "John" },
  { id: 3, name: "Jina" },
  { id: 4, name: "Cameron" },
];

// Map
const ids = users.map(function (user) {
  return user.id;
});
const names = users.map(function (user) {
  return user.name;
});
console.log("Ids:" + ids);
console.log("Names:" + names);

const userList = {
  firstName: "Visakh",
  lastName: "Vijaykumar",
  age: 10,
};
// For loop object
for (let name in userList) {
  console.log(name);
  console.log(userList[name]);
}
