function pageLoad() {

	let myObject = {
		key1: "This is a text.",
		key2: 15,
		key3: false,
		key4: ["alma", "cseresznye", "citrom"],
		key5: function (){
			console.log("This is a function");
		},
		key6: {
			key6object1: "This is an object",
			key6object2: 4
		},
		key7: function (){
			return "This is another function.";
		},
		key8: function (param1, param2){
			//console.log(param1);
			for (let index = 0; index < param2.length; index++) {
				console.log(param2[index]);
				
			}
		},
		key9: function (name){
			return `
				<h1>Greetings, my beloved ${name}!</h1>
			`;
		}
	};
	//console.log(myObject.key6.key6object1);

	//myObject.key5();
	
	//console.log(myObject.key7());

	//bejutás
	myObject.key8("This is an argument.", [1, 5, 7, 10]);


	document.getElementById("root").insertAdjacentHTML("beforeend", myObject.key9("Passz"));





}
window.addEventListener("load", pageLoad);