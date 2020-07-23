// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope", a, b, c);
function test() {
  // Function Scope
  var a = 10;
  let b = 20;
  const c = 30;
  console.log("Function Scope", a, b, c);
}

test();

if (true) {
  // Block Scope
  var a = 100; // Global a will be replaced eventhogh it is block scope, only for var
  let b = 200;
  const c = 300;
  console.log("Block Scope", a, b, c);
}

console.log("Global Scope", a, b, c);
