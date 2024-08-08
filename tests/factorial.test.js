import factorial from "../src/factorial";

test("calculates the factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});

test("calculates the factorial of 1", () => {
  expect(factorial(1)).toBe(1);
});

test("calculates the factorial of 0", () => {
  expect(factorial(0)).toBe(1);
});
