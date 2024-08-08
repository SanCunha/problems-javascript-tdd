import reverseString from "../src/reverseString";

const isPalindrome = (str) => {
  const sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = reverseString(sanitizedStr);
  return sanitizedStr === reversedStr;
};

export default isPalindrome;
