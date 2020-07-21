// Create some arrays
const numbers = [12, 34, 45];
const numbers2 = new Array(12, 3455, 56);
const fruits = new Array("Apple", "Banana", "orange", "jack fruit");
const mixed = [
  12,
  "Apple",
  34,
  "banana",
  true,
  null,
  { a: 1, b: 2 },
  new Date(),
  undefined,
];
console.log(mixed);
//get array length
console.log(mixed.length);
console.log(numbers.length);
// checkk if it is array
console.log(Array.isArray(mixed));
console.log(Array.isArray("Not array"));
// get single value
console.log(mixed[6]); // index start from zero
//Insert into array
numbers[1] = 100;
console.log(numbers);

numbers[5] = 101; // 3 and 4 fill it with empty slots
console.log(numbers);

//find index of item
console.log(mixed.indexOf("apple"));
console.log(mixed.indexOf("Apple"));

//Mutating array

// Adding element to end
numbers.push(250);
console.log(numbers);

// Adding element to front
numbers.unshift(120);
console.log(numbers);

// Take element from end
console.log(numbers.pop());
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

// Take off element from front
numbers.shift();
console.log(numbers);
numbers.unshift(890);
numbers.unshift(56);
numbers.unshift(87);
numbers.push(1245);
console.log(numbers);
//splice values
console.log(numbers.splice(0, 2)); // Splice (start index, end index), here from 0 to 1, 2 not included
console.log(numbers);
//revere
console.log(numbers.reverse());
console.log(numbers);

// concatenate array
console.log(numbers.concat(numbers2));

//sort
console.log(numbers.sort()); // it will sort based on the first number
// In order to do the normarl sort we can use the compare function

let sorted = numbers.sort(function (x, y) {
  return x - y;
});

console.log("Sorted " + sorted);
let reverseSorted = numbers.sort(function (x, y) {
  return y - x;
});

console.log("reverse " + reverseSorted);

// Find , arg : function
const newNumbers = [10, 20, 30, 40, 50, 60];
function under50(num) {
  return num < 50;
}
function over50(num) {
  return num > 50;
}
console.log(newNumbers.find(under50));
console.log(newNumbers.find(over50));
