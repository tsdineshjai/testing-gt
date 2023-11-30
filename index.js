const alpha = {
	al: function () {
		function hi() {
			console.log(this === globalThis); //false
			console.log(this === alpha); //true
		}
		hi.call(this);
		/*
    generally when you call the method without using dot method, the this keyword points to global
    now we are using call method to bind the "this" keyword to the parent object.

		 */
	},
};

alpha.al();
