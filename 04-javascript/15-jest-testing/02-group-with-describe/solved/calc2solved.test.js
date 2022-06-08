const { sum, difference } = require("./calc");





describe("The following functions are being tested from the calc.js file", () => {

  describe("tests for the sum() function ", () => {
    test("1 + 2 to equal 3", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
    test("2 + 2 to equal 4", () => {
      const result = sum(2, 2);
      expect(result).toBe(4);
    });
    test("3 + 2 to equal 5", () => {
      const result = sum(3, 2);
      expect(result).toBe(5);
    });
    test("4 + 2 to equal 6", () => {
      const result = sum(4, 2);
      expect(result).toBe(6);
    });
  })

  describe("tests for the difference() function ", () => {
    test("3 -2 to equal 1", () => {
      const result = difference(3, 2);
      expect(result).toBe(1);
    });
    test("3 -2 to equal 1", () => {
      const result = difference(3, 2);
      expect(result).toBe(1);
    });
    test("3 -2 to equal 1", () => {
      const result = difference(3, 2);
      expect(result).toBe(1);
    });
    test("3 -2 to equal 1", () => {
      const result = difference(3, 2);
      expect(result).toBe(1);
    });
  })
})
