"use strict";
const extractText = (element) => {
    return {
        text: element.innerText,
        element,
    };
};
const title = document.querySelector("h1");
const myName = "Vitor";
console.log(title && extractText(title));
console.log(myName);
// ! ERROR: the type doesn't match
// console.log(extractText(myName));
