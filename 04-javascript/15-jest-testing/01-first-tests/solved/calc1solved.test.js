
const {sum, difference} = require("./calc");

test("should add (1 + 2) and equals 3", () => {
    const result = sum(1,2);
    expect(result).toBe(3)
});

test("should subtract (1 - 2) and equals -1", () => {
    const result = difference(1,2);
    expect(result).toBe(-1)
});



