/**
 * 1. Create a function called toNumber
 * 2. The function can receive number | string
 * 3. If the value is a number, return number
 * If the value is a string, return number
 * 4. If receive a different value, return throw "Value must be a number or a string"
 */
const toNumber = (value: number | string) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value);
  throw "Value must be a number or a string.";
};

console.log(toNumber("200"));

console.log(toNumber(200));
