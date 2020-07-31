function Person(fname, lname, dob) {
  this.firstname = fname;
  this.lastname = lname;
  this.birthday = new Date(dob);
  this.maritalStatus = undefined;
}

Person.prototype.updateMartialStatus = function (status) {
  this.maritalStatus = status;
};

Person.prototype.getAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970); // Math is one of the object which don't require
};
const visakh = new Person("Visakh", "Vijayan", "Jun 3 1991");
console.log(visakh.firstname);
console.log(visakh.lastname);
console.log(visakh.birthday);
console.log(visakh.maritalStatus);
visakh.updateMartialStatus("Married");
console.log(visakh.maritalStatus);
console.log(visakh.getAge());
console.log(visakh);
console.log(visakh.hasOwnProperty("getAge"));
console.log(visakh.hasOwnProperty("firstName"));
console.log(visakh.hasOwnProperty("firstname"));
