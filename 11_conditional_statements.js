// === : For value and type

let id = "100";
if (id == 100) {
  console.log("Value check only");
} else {
  console.log("Value check only Else part");
}
//Value and Type check
if (id === 100) {
  console.log("Value & type check only");
} else {
  console.log("Value & type check only Else part");
}

if (id !== 100) {
  console.log("Negate Value & type check only");
} else {
  console.log("Value & type check only Else part");
}

if (id) {
  console.log(`The id is ${id}`);
} else {
  console.log("There is no id");
}

// if (ids) {
//   // it will give error
//   console.log(`The id is ${ids}`);
// } else {
//   console.log("There is no id");
// }

if (typeof ids !== "undefined") {
  // With out the type check ,it will give error
  // Remember the undefined shoudl be in quotes
  console.log(`The id is ${ids}`);
} else {
  console.log("There is no id");
}

let num = "100";
if (num > 99) {
  console.log("Correct");
} else {
  console.log("INcorrect");
}

console.log(num === 100 ? "Correct" : "Incorrect");
console.log(num == 100 ? "Correct" : "Incorrect");
