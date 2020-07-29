// Person Constructor
// Constructor name should start with capital letter

function Person(fname, lname, dob) {
  this.firstname = fname;
  this.lastname = lname;
  this.birthday = new Date(dob); // Date is also a constructor
  this.getAge = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); // Math is one of the object which don't require
  };
}

/*
  # In JavaScript, a constructor gets called when you declare an object using the new keyword.
  # The purpose of a constructor is to create an object and set values if there are any object properties present. 
  # It’s a neat way to create an object because you do not need to explicitly state what to return as the constructor function, by default, returns the object that gets created within it.
   # A new empty object is created
   # this keyword starts referring to that newly created object and hence it becomes the current instance object
   # The newly created object is then returned as the constructor’s returned value
   */
const visakh = new Person("Visakh", "Vijayan", "3-Jun-1991");
const kavya = new Person("Kavya", "Vinod", "25-Aug-1993");

console.log(visakh);
console.log(visakh.firstname);
console.log(visakh.lastname);

console.log(visakh.getAge());
console.log(Date.now());
const testDate = new Date("9-Jun-2020");
console.log(testDate.getUTCFullYear());
console.log(kavya);
