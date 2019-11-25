function confuse() {
	console.log("Confused");
}
confuse()
function confuse(times) {
	console.log("Totally Confused" );
}
confuse(12)
confuse()
function confuse(a, b, c) {
	console.log("Scratching my head" );
}
confuse(1, 2, 3)
confuse()
confuse(84);


//id="username"
//$("#username").val()
//$("#username").val("admin")

function work() {
	console.log("***Working");
	console.log(arguments);
	for(let i=0 ; i<arguments.length; i++) {
		console.log(arguments[i]);
	}
}

work();
work("all the time");
work(24, 7);
work(false);
work(24, 7, 365, "days");


//Function hoisting
//You can define a function anywhere you want and invoke it from anywhere

eat("Rice")

function eat(item) {
	console.log("Eating " + item);
}

