const toNumber = (value: number | string) => {
    if (typeof value === "number") return value;
    if (typeof value === "string") return Number(value);
    throw "Value must be a number or a string.";
};

console.log(toNumber("200"));

console.log(toNumber(200));
