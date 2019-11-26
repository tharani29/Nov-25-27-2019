function add(a, b) {
	return a + b;
}

//Arrow functions similar to Lambda expressions in Java 8
let sum = (a, b) => a + b;


function sleepOldStyle(hours) {
	console.log(`Sleeping ${hours} hours`);
}

let sleepLatest = function(hours) {
	console.log(`Sleeping ${hours} hours`);
}

sleepLatest(12);

let sleep = (hours) => console.log(`Sleeping ${hours} hours`);
sleep(6);

let eat = () => {
		console.log("Thinking what to eat");
		console.log("skip");
};


