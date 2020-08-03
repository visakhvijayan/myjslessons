// Person Constructor
function Person(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
}

Person.prototype.greeting = function () {
  return `hai ${this.firstname} ${this.lastname}`;
};

const visakh = new Person("Visakh", "Vijayan");
//console.log(visakh.greeting());

// Customer Constructor
function Customer(fname, lname, phone, membership) {
  Person.call(this, fname, lname); // Inheritance,first arg should be this
  this.phone = phone;
  this.membership = membership;
}
// Following two needs to include always
// Inhertitance the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Kavya", "Vinod", 123456789, "Standard");

Customer.prototype.greeting = function () {
  return `Hai ${this.firstname} Welcome to customern greeting `;
};

console.log(customer1.greeting());
console.log(visakh.greeting());
