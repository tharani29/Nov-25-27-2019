class Person {
	//cannot define variables here
	
	constructor(name, age) {
		//instance variables
		this.name = name;
		this.age = age;
	}
	
	sleep(hours) {
		console.log(this.name + " sleeps " + hours + " hours");
	}
	
}

class Engineer extends Person {
	constructor(name, age, salary) {
		super(name, age);
		this.salary = salary;
	}
	sleep(hours) {
		super.sleep(hours);
		console.log(this.name +  " sleeps on the flyover for " + hours + " hours");
	}
}
let e1 = new Engineer("Rao", 35, 2847123);
console.log(e1.name, e1.age, e1.salary);
e1.sleep(2);

let p1 = new Person("Sam", 12);
console.log(p1.name, p1.age);
p1.sleep(12);

let p2 = new Person("Ram", 23);
console.log(p2.name, p2.age);
p2.sleep(8);