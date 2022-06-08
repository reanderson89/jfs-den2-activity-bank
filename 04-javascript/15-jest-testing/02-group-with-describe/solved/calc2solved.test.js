const { sum, difference } = require("./calc");





describe("The following functions are being tested from the calc.js file", () => {

  describe("tests for the sum() function ", () => {
    test("1 + 2 to equal 3", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
    test("1 + 2 to equal 3", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
    test("1 + 2 to equal 3", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
    test("1 + 2 to equal 3", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
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
