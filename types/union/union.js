"use strict";
/**
 * Union types can return or receive different types. For this use string | number | boolean
 */
let amount = 200;
amount = "200";
const isNumber = (value) => {
    if (typeof value === "number")
        return true;
    // ! ERROR: return "false";
    return false;
};
console.log(isNumber("200")); // false
console.log(isNumber(200)); // true
/**
 * Union types in DOM, button can be a HTMLButtonElement or null
 */
const button = document.querySelector("button");
button?.click();
