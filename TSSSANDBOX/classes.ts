// reference : https://dzone.com/articles/how-to-define-an-interface-in-typescript#:~:text=An%20interface%20in%20TypeScript%20contains,the%20members%20of%20the%20interface.

interface God {
  godName: string;
  register();
}

class Vechicle implements God {
  public number: string;
  protected year: number;
  private owner: string;
  godName: string;

  constructor(number: string, year?: number, owner?: string) {
    this.number = number;
    this.year = year;
    this.owner = owner;

    console.log(
      "New Vechicle added : " + this.number + "and owner is " + this.owner
    );
  }

  register() {
    console.log(this.owner, this.year, this.number);
  }

  private privateRegister() {
    console.log(this.owner, this.year, this.number);
  }
}

class User extends Vechicle {
  id: number;
  constructor(id: number, number: string, year: number, owner: string) {
    super(number, year, owner);
    this.id = id;
  }
  display() {
    console.log(this.year);
  }
}

let car = new Vechicle("Kl-01-123", 1991);
let boat = new Vechicle("Kl-01-789", 1991, "Visakh");
let aeroplane = new User(123, "123456-1223", 1991, "Visakh");
let bus = new Vechicle("Kl-01-456");

console.log(car);
console.log(bus);
boat.register();
console.log(boat.number); // Accessible to any one bz pf public access specifier
//console.log(boat.year); // only access for inhertited members ie sub classes and classes only
//console.log(boat.owner); // Can't be accessible bz access specifier is public, so accessible to within class only
aeroplane.display();
