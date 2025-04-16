const addNums = require("./add");

test("Making sure it adds two numbers", () => {
  expect(addNums(1, 2)).toBe(3);
  // comparing the output of function addNums(1,2) to return 3
});
