function getSum(num1, num2) {
    return num1 + num2;
}
// ? for option field
// any for any type
var mySum = function (num1, num2, num3) {
    if (num3)
        return parseInt(num1) + parseInt(num2) + parseInt(num3);
    return parseInt(num1) + parseInt(num2);
};
function myVoid() {
    console.log("Hai");
}
function myVoid1() {
    return;
}
console.log(getSum(1, 3));
console.log(mySum("1", 3));
console.log(mySum("1", 3, "4"));
myVoid();
