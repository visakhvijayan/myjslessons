// Q1. Output of the following
console.log(2 + "2");
console.log(2 - "2");

// Ans 22 0

// Q2. Print it into no duplicate array , withour any special array functionss or foreach

let nums = [1, 2, 2, 3];

//Ans

console.log([...new Set(nums)]);

// Q3. Change the block scope of var also to function scope, since in ES5 everything will convert it into var in sometimes.So we might need it

let func = function () {
  {
    let l = "let";
    var v = "var";
  }
  console.log(v);
  console.log(l);
};

func();

//Ans

let func = function () {
  (function () {
    let l = "let";
    var v = "var";
  })();
  console.log(v);
  console.log(l);
};

func();

// Q4. Ouput and why

console.log(1 > 2 > 3);
console.log(1 < 2 < 3);

// Ans 1 > 2 > 3 is false , bz true > 3 is false, true = 1 & false = 0
// 1 < 2 < 3 is true , bz false < 3 is true

// Q5. Output and why

let a = () => arguments;
let b = function () {
  return arguments;
};
console.log(b("hi"));
console.log(a("hi"));

//Ans :  For b Output Arguments ["hi", callee: ƒ, Symbol(Symbol.iterator): ƒ]
// Inside arrow function Arguments won't work, so it will give error

// Q6. Output and why

/* 
// Example for line breaking error, bz return won't suppport thte next line
let x = () => {
  return
  {
    message: "hi"
  }
};
So right method is
let Y = () => {
  return {
    message: "hi"
  }
};

*/

//Q7. How to prevent adding extra item in the object

let profile = {
  name: "visakh",
};

profile.age = 20;

console.log(profile);

// Ans

let profile = {
  name: "visakh",
};

Object.freeze(profile);

profile.age = 20;
profile.name = "kavya";

console.log(profile);

// Q 8. Q7 same but how to allow editing only

let profile = {
  name: "visakh",
};

Object.seal(profile);

profile.age = 20;
profile.name = "kavya";

console.log(profile);

// Q9 . Only modify specific attribute only

let profile = {
  name: "visakh",
  age: 28,
};

profile.name = "kavya";
profile.age = 25;

console.log(profile);
//Ans

let profile = {
  name: "visakh",
};

Object.defineProperty(profile, "age", {
  value: 28,
  writable: false,
});

profile.name = "kavya";
profile.age = 25;
console.log(profile);

// Q10. Max -empty ouput

console.log(Math.max());

// Ans : -Infinity
