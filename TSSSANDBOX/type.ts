// Compile : tsc <filename>
// watch mode tsc <filename> -w , use this
let myString: string;
let myNum: number;
let myBool: boolean;

let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
let strNumTuple: [string, number]; // Tuple

// Otherway
let strArr1: Array<string>;
let numArr1: Array<number>;
let boolArr1: Array<boolean>;
let myVoid: void;
let myNull: null;
let myUndefined: undefined;

myNum = 28 + 10;
myNum = 28.1;
myNum = 0x16;

myString = "Visakh";

myString = myString.slice(0, 10);

strArr = ["Hi", "Visakh", "Welcome"];
numArr = [1, 2, 4, 5.5, 6];
boolArr = [true, false, true];
strNumTuple = ["Hello", 123]; // strNumTuple = [123,'String'] is wrong bz it doesn't match with format assigned

myBool = true; // myBool = 1 not acceptable here
myVoid = undefined;
myNull = null;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myBool);
console.log(numArr);
console.log(strArr);
console.log(boolArr);
console.log(strNumTuple);
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);
