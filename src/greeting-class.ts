
class Dog {

	constructor(age: number, name: string) {

		this._age = age;
		this._name = name;
	}

	bark() {

		console.log("Bark! Bark!");
	}

	barkYourName() {

		console.log(this._name);
	}
}