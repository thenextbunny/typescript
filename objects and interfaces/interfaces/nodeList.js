"use strict";
const links = document.querySelectorAll(".link");
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        link.href;
    }
    if (link instanceof HTMLButtonElement) {
        link.onclick = () => window.alert("Clicked!");
    }
});
const filterLinks = Array.from(links).filter((link) => link instanceof HTMLAnchorElement);
console.log(filterLinks);
const activateLink = (link) => {
    link.style.color = "red";
    link.style.border = "1px solid red";
};
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        activateLink(link);
    }
});
