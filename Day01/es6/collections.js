let arr = [];
let arr2 = [1, 2, true, "Hello"];
for(let i = 0; i < arr2.length; i++) {
	console.log(arr2[i]);
}

let capitals = [];
capitals["India"] = "New Delhi";
capitals["US"] = "DC";
capitals["France"] = "Paris";

for(let key in capitals) {
	console.log(key + ": " + capitals[key]);
}