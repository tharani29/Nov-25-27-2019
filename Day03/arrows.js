//this.name = "Confuscious";

let person = {
	name: "Sam",
	eat: () => {
		console.log(this.name + " is eating");
	}
}

person.eat();