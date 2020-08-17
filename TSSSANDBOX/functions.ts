function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

// ? for option field
// any for any type
let mySum = function (num1: any, num2: any, num3?: any): number {
  if (num3) return parseInt(num1) + parseInt(num2) + parseInt(num3);
  return parseInt(num1) + parseInt(num2);
};

function myVoid(): void {
  console.log("Hai");
}
function myVoid1(): void {
  return;
}

console.log(getSum(1, 3));
console.log(mySum("1", 3));
console.log(mySum("1", 3, "4"));
myVoid();
