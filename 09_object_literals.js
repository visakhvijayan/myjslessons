// Object literals
const person = {
  firstName: "visakh",
  age: "29",
  city: "trivandrum",
  hobbies: "music, sports",
  lastName: "vijayan",
  address: {
    city: "trivandrum",
    state: "kerala",
  },
  getBirthYear: function () {
    return new Date().getFullYear() - this.age;
  },
};
let val;

val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Jina", age: 28 },
];
