const { sum, difference, oddOrEven } = require("./calc");

describe("Calculator functions ", () => {
  test("should output sum of 2 numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("should output the difference of 2 numbers", () => {
    const result = difference(3, 2);
    expect(result).toBe(1);
  });

  // test('should be an even number', () => {
  //   const result = oddOrEven(4);
  //   expect(result).toBe(`4 is an even number`)
  // })
  
describe("The should all be even ", () => {
  let evenNums = [2,4,6,8,10,210];
  
  test.each(evenNums)('%i', (input) => {
    const result = oddOrEven(input);
    expect(result).toBe(`${input} is an even number`)
  })
})
  

});
