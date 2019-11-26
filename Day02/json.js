// let car = { model: "BMW", year: 2019 };
// let model = car.model;
// let year = car.year;
// console.log(model, year);

let car = { model: "BMW", year: 2019 };
let { model, year } = car;
console.log(model, year);

let arr = [1, 2, 3];
let [x, y] = arr;
console.log(x, y);

let name = "Sam";
let age = 12;


let person = { 
	name, 
	age,
	eat(item) {
		console.log(this.name + " is eating " + item);
	} 
};
console.log(person);
person.eat("bread");

let personOldStyle = { 
	name: name, 
	age: age,
	eat: function(item) {
		console.log(this.name + " is eating " + item);
	} 
};
console.log(personOldStyle);
personOldStyle.eat("Roti");