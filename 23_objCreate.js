const personPrototypes = {
  greeting: function () {
    return `Hey !!!! Hello...${this.firstname}  ${this.lastname} from ${this.place}`;
  },
  updatePlace: function (newPlace) {
    console.log(newPlace);
    this.place = newPlace;
    console.log(this.place);
  },
};

const visakh = Object.create(personPrototypes);
visakh.firstname = "Visakh";
visakh.lastname = "Vijayan";
visakh.age = 25;
visakh.place = "trivandrum";

console.log(visakh);
console.log(visakh.greeting());

const kavya = Object.create(personPrototypes, {
  firstname: { value: "kavya" },
  lastname: { value: "Vinod" },
  place: { value: "Kattachal" },
});
console.log(kavya.greeting());
kavya.updatePlace("Pettah");
console.log(kavya.greeting());
