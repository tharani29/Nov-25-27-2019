//... rest operator
function addLatestStyle(...numbers) {
	let sum = 0;
	for(let i=0; i<numbers.length; i++) {
		if(typeof(numbers[i]) == "number") {
			sum += numbers[i];
		}
		
	}
	console.log("Sum: " + sum);
}

function add() {
	let sum = 0;
	for(let i=0; i<arguments.length; i++) {
		if(typeof(arguments[i]) == "number") {
			sum += arguments[i];
		}
		
	}
	console.log("Sum: " + sum);
}

addLatestStyle(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

function greatest() {
	let max = 0;
	for(let i=0; i<arguments.length; i++) {
		if(typeof(arguments[i]) == "number") {
			max = arguments[i] > max ? arguments[i] : max;
		}
	}
	console.log("Max: " + max);
}


greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);