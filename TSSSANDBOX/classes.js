// reference : https://dzone.com/articles/how-to-define-an-interface-in-typescript#:~:text=An%20interface%20in%20TypeScript%20contains,the%20members%20of%20the%20interface.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vechicle = /** @class */ (function () {
    function Vechicle(number, year, owner) {
        this.number = number;
        this.year = year;
        this.owner = owner;
        console.log("New Vechicle added : " + this.number + "and owner is " + this.owner);
    }
    Vechicle.prototype.register = function () {
        console.log(this.owner, this.year, this.number);
    };
    Vechicle.prototype.privateRegister = function () {
        console.log(this.owner, this.year, this.number);
    };
    return Vechicle;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, number, year, owner) {
        var _this = _super.call(this, number, year, owner) || this;
        _this.id = id;
        return _this;
    }
    User.prototype.display = function () {
        console.log(this.year);
    };
    return User;
}(Vechicle));
var car = new Vechicle("Kl-01-123", 1991);
var boat = new Vechicle("Kl-01-789", 1991, "Visakh");
var aeroplane = new User(123, "123456-1223", 1991, "Visakh");
var bus = new Vechicle("Kl-01-456");
console.log(car);
console.log(bus);
boat.register();
console.log(boat.number); // Accessible to any one bz pf public access specifier
//console.log(boat.year); // only access for inhertited members ie sub classes and classes only
//console.log(boat.owner); // Can't be accessible bz access specifier is public, so accessible to within class only
aeroplane.display();
