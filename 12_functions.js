// Function Declaration
function getNames(firstname = "Visakh", lastName = "Vijayan") {
  // DEfault value is visakh and vijayan
  return `Full name :  ${firstname}.${lastName}`;
}

// Function Expression
const cube = function (num = 2) {
  // Default value is 2
  return num * num * num;
};

//Immediately Invokable Function Expression
(function () {
  console.log("IIFE Ran");
})();

(function (name) {
  console.log(`Hello ${name}`);
})("Visakh");

//Property Methods
// When function  is put inside the object

const todo = {
  add: function (num1 = 10, num2 = 10) {
    console.log(num1 + num2);
  },
};

todo.delete = function () {
  console.log("Doing Delete");
};

todo.add(100, 200);
todo.delete();
console.log(getNames());
console.log(getNames("Kavya", "Vinod"));
console.log(cube(10));
console.log(cube());
