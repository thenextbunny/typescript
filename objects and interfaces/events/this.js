"use strict";
// @ts-expect-error: redeclare block-scoped variable
const button = document.querySelector("button");
const onClick = (
// this: HTMLButtonElement,
event) => {
    // this is a reference to the element how call the function, but is not accessible using "use strict"
    // console.log(this);
    const { currentTarget } = event;
    if (currentTarget instanceof HTMLButtonElement) {
        console.log(currentTarget.innerText);
    }
};
button?.addEventListener("click", onClick);
