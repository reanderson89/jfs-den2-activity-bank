
const {sum, difference, oddOrEven, product} = require("./calc");

// 01-first-tests
    // test('should output sum of 2 numbers', () => {
    //   const result = sum(1,2);
    //     expect(result).toBe(3);
    //   });

    //   test('should output the difference of 2 numbers', () => {
    //     const result = difference(3,2);
    //     expect(result).toBe(1);
    //   });

// 02-group-with-describe
    // describe('Test calculator functions', () => {
    //   // a way that we can do something before each test in the group. Can also use afterEach()
    //   beforeEach(() => {
    //     let randomNum = Math.floor(Math.random()*20)
    //     console.log("Here is another test "+ randomNum);
    //   })

    //   test('should output sum of 2 numbers', () => {
    //     const result = sum(1,2);
    //       expect(result).toBe(3);
    //     });

    //     test('should output the difference of 2 numbers', () => {
    //       const result = difference(3,2);
    //       expect(result).toBe(1);
    //     });
    // });

// test using arrays of data
    describe('Calculator functions that should', () => {
      describe("check if a number is odd or even", () => {
        test.each([2,4,6])('%s is an even number', (input) => {
          const result = oddOrEven(input);
          expect(result).toBe(`${input} is an even number`)
        })
        test.each([3,5,7])('%s is an odd number', (input) => {
          const result = oddOrEven(input);
          expect(result).toBe(`${input} is an odd number`)
        })
      })
      describe("check that the sum of", () => {
        test.each([
          [1,2,3],
          [2,2,4],
          [4,7,11]
        ])('(%i + %i) equals %i', (a,b,expected) => {
          const result = sum(a,b);
            expect(result).toBe(expected);
          });
        })
      describe("check that the difference of", () => {
        test.each([
          {a: 4, b: 2, expected: 2},
          {a: 2, b: 2, expected: 0},
          {a: 6, b: 12, expected: -6},
        ])('($a - $b) equals $expected', ({a,b,expected}) => {
          const result = difference(a,b);
          expect(result).toBe(expected);
        });
        })

           
        describe.only("check that the product of", () => {
          test.each`
            a	 |   b  | expected
          ${1} | ${2} | ${2}
          ${2} | ${4} | ${8}
          ${3} | ${-7}| ${-21}
          `('($a * $b) equals $expected', ({ a,b, expected }) => {
            const result = product(a,b);
            expect(result).toBe(expected);
          });
        })
      
      
        
    });

