const subtractNums = require("./subtract");

test("Check two values subtract correctly", () => {
  expect(subtractNums(1, 3)).toBe(-2);
});
