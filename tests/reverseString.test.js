import reverseString from "../src/reverseString";

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverses a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
