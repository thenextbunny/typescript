"use strict";
const link = document?.getElementById("origamid");
/**
 * This is inheritance
 */
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http", "https");
}
