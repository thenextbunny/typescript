// Use unknown instead any, because the unknown prevents errors
const idk = (value: unknown) => {
    switch (typeof value) {
        case "string":
            value.toLowerCase();
            break;
        case "number":
            value.toFixed();
            break;
        default:
            value;
    }
};

console.log(idk("Test"));
console.log(idk(200));
