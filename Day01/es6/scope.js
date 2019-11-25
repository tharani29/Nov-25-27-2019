//var is function scoped
//let is block scoped
//const is block scoped and final

const PI = 3.14
//PI = 3.1414;
console.log(PI);
function checkEven(num) {
	
	if(num % 2 == 0) {
		let message = num + " is even";
	}
	//console.log(message);	
}

checkEven(10);