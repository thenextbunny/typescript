"use strict";
// @ts-expect-error: redeclare block-scoped variable
const button = document.querySelector("button");
const handleClick = (event) => {
    console.log(event);
};
button?.addEventListener("click", handleClick);
