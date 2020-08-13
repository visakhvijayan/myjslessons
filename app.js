// One line returns
const sayHello = () => "Say Hello";
// Same as above
const sayHelloDup = () => {
  return "Say Hello 2";
};
const sayHelloNum = (num) => {
  console.log(`Say hello  ${num}`);
};

// Sungle param no need for paranthesis
// const sayHelloNumDup = num => {
//   console.log(`Say hello  ${num}`);
// };
console.log(sayHello());
console.log(sayHelloDup());
sayHelloNum(3);

const users = ["visakh", "kavya", "kichu"];
// Map vs for each
// forEach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database)

// map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase)
const nameLengths = users.map((name) => name.length);
console.log(nameLengths);
