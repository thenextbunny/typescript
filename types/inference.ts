// It's not necessary to annotate a variable that has a clear type

// * Good
const firstName = "John";

// ! Not necessary
const lastName: string = "Porto";

// * Necessary to annotate in functions
const add = (a: number, b: number): string => `${a + b}`;

console.log(`${firstName} ${lastName} has ${add(10, 32)} fruits`);
