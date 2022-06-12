const { sum, difference, oddOrEven } = require("./calc");

describe("Calculator functions ", () => {
  describe("These are my sum and difference functions", () => {
    // test.only.each([
    //   [1,2,3],
    //   [2,3,5],
    //   [10,20,30],
    //   [7,8,15]
    // ])("%i + %i should equal %i", (a,b,expected) => {
    //   const result = sum(a,b);
    //   expect(result).toBe(expected);
    // });

    // test.only.each([
    //   { a: 1, b: 2, expected: 3 },
    //   { a: 2, b: 2, expected: 4 },
    //   { a: 10, b: 2, expected: 12 },
    //   { a: 15, b: 2, expected: 17 },
    // ])("$a + $b should equal $expected", ({ a, b, expected }) => {
    //   const result = sum(a, b);
    //   expect(result).toBe(expected);
    // });

    test.only.each`
      a    | b    | expected
      ${1} | ${2} | ${3}
      ${2} | ${4} | ${6}
      ${4} | ${4} | ${8}
      ${24}| ${4} | ${28}
    `("$a + $b should equal $expected", ({a,b, expected}) => {
      const result = sum(a, b);
      expect(result).toBe(expected);
    });

    test("should output the difference of 2 numbers", () => {
      const result = difference(3, 2);
      expect(result).toBe(1);
    });
  });

  describe("These should all be even ", () => {
    let evenNums = [2, 4, 6, 8, 10, 210];

    test.each(evenNums)("%i", (input) => {
      const result = oddOrEven(input);
      expect(result).toBe(`${input} is an even number`);
    });
  });
});
