"use strict";
const getText = (selector) => {
    const element = document.querySelector(selector);
    if (element)
        return [element, element.innerText]; // as const define readOnly
    return null;
};
const buttonText = getText("#button");
if (buttonText) {
    // ! ERROR because as const define readOnly
    // buttonText[0].classList = "button";
}
