let val;

//to string
//val = today.toString();

let birthday = new Date("1-1-1991 11:25:8");
birthday = new Date("August 25 1993");
//birthday = new Date("1-1-1991");
month = birthday.getMonth() + 1; // Month starts with Jan = 0
val = birthday;
val = month;
let today = new Date();
val = birthday.getDay();
val = today.getFullYear();
val = today.setFullYear(2000);
console.log(val);
console.log(typeof val);
