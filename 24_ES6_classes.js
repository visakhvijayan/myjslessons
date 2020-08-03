// ES6 : Classes are caled syntactical sugar because they are used for convenience but not actual,  working is different

class Person {
  constructor(fname, lname, dob) {
    this.firstname = fname;
    this.lastname = lname;
    this.birthday = new Date(dob);
    this.marital = "Single";
  }

  // Any function which added here will automatically addedn under the prototype
  greeting() {
    return `Hey hello ...${this.firstname} ${this.lastname}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    this.age = Math.abs(ageDate.getFullYear() - 1970);
  }
  getAge() {
    return `Hey your age is ${this.age}`;
  }
  updateMartialStatus(status) {
    this.marital = status;
  }
  // Static methods are not part of object, so they can't called using objects.They need to call using the Class name
  // Use : If you don't want to include anything with this in your class then it is a good way to do that.
  static addNUmbers(x, y) {
    return x + y;
  }
}

const visakh = new Person("Visakh", "Vijayan", "3-jun-1991");
console.log(visakh);
console.log(visakh.greeting());
visakh.calculateAge();
console.log(visakh.getAge());
visakh.updateMartialStatus("Married");
console.log(visakh);

console.log(Person.addNUmbers(1235, 1000));
