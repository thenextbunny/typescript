"use strict";
const btn = document.getElementById("btn-mobile");
const nav = document.querySelector("nav");
const handleMenu = (event) => {
    const button = event.currentTarget;
    if (button instanceof HTMLButtonElement && nav) {
        const active = nav.classList.contains("active");
        button.setAttribute("aria-expanded", active ? "false" : "true");
        button.setAttribute("aria-label", active ? "Fechar menu" : "Abrir menu");
        nav.className = active ? "" : "active";
    }
};
btn?.addEventListener("click", handleMenu);
btn?.addEventListener("pointerdown", handleClick);
