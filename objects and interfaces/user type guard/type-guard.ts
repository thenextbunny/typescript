const typeGuard = (value: unknown) => {
    if (typeof value === "string") return value.toUpperCase();
    if (typeof value === "number") return value.toFixed();
    if (value instanceof HTMLAnchorElement) return value.innerText;
};

typeGuard("Uppercase");
typeGuard(1.233);
typeGuard(document.body);
