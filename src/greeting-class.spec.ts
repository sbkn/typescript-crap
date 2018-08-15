//import { expect } from "chai";
//import Dog from "./greeting-class";


describe("GreetingClass", () => {

	describe("main", () => {

		it("should return correct text", () => {













			class Dog {

				constructor(age: number, name: string) {

					this._age = age;
					this._name = name;
				}

				barkYourName() {

					console.log(this._name);
				}

				run() {

					while(this._age < 18) {
						console.log("Dog runs with 20 kph!");
						this._age = this._age + 1;
					}
					console.log("Dog is dead!");
				}
			}



			let myDog = new Dog(12, "Peter");

			myDog.barkYourName();

			myDog.run();












		});
	});
});
