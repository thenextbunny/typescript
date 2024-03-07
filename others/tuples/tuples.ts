// Tuples are array that have data in specific positions

const product1: (string | number)[] = ["Notebook", 11.22];

if (typeof product1[0] === "string") {
    console.log(product1[0].toLocaleUpperCase());
}

const product2: [string, number] = ["Camera", 22.5];

console.log(product2[0].toLocaleUpperCase());
