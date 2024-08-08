import isPalindrome from "../src/isPalindrome";

test("verify if sentence is a palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("verify if sentence is a palindrome", () => {
  expect(isPalindrome("Socorro, subi no ônibus em Marrocos!")).toBe(false);
});

test("verify if sentence is a palindrome", () => {
  expect(isPalindrome("Socorram-me, subi no ônibus em Marrocos")).toBe(true);
});
