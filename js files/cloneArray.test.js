const cloneArray = require("./cloneArray");

test("Checks is cloned array is the same as original", () => {
  const array = [0, 1.2, 12];
  expect(cloneArray(array)).toBe(array);
  // this example will actually fail, as it is storing the new array as a string, and not as an array
});
