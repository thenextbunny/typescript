/**
 * Union types can return or receive different types. For this use string | number | boolean
 */
let amount: string | number = 200;

amount = "200";

console.log(amount);

const isNumber = (value: string | number): boolean => {
    if (typeof value === "number") return true;
    // ! ERROR: return "false";
    return false;
};

console.log(isNumber("200")); // false
console.log(isNumber(200)); // true

/**
 * Union types in DOM, button can be a HTMLButtonElement or null
 */
// @ts-expect-error: redeclare block-scoped variable
const button = document.querySelector("button");

button?.click();
