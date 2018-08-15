import { expect } from "chai";
import TestFile from "./test-file";


describe("TestFile", () => {

	describe("main", () => {

		it("should run fine", () => {

			const actual = TestFile.main();

			console.log(actual);

			expect(actual).to.be.equal("Hello World!");
		});
	});
});
