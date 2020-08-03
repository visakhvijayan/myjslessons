class Person {
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }

  greeting() {
    return `Hey...Hello !!! ${this.firstname} ${this.lastname}`;
  }
}

class Customer extends Person {
  constructor(fname, lname, phone, dob) {
    super(fname, lname); // For calling the parent class
    this.phone = phone;
    this.dob = dob;
  }
}

const visakh = new Customer("Visakh", "Vijayan", 123456789, "03-jun-1991");
console.log(visakh.greeting());
