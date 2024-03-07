/* eslint-disable @typescript-eslint/no-unused-vars */

const video = document.querySelector("video"); // HTMLVideoElement
const image = document.querySelector("img"); // HTMLImageElement
const anchor = document.querySelector("a"); // HTMLAnchorElement
const linkId = document.querySelector("#link"); // Element

// * No error
console.log(anchor?.href);

// ! Error because the TS don't see the HTMLAnchorElement
// linkId?.href;

if (linkId instanceof HTMLAnchorElement) {
    console.log(linkId?.href);
}
