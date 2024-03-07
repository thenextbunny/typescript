const ages = [10, 26, 52, 30, 42, 98, 65, 64, 20, 10];

const greaterThan10 = (data: number[]) => data.filter((age) => age > 10);
const smallerThan10 = (data: Array<number>) => data.filter((age) => age < 10);

console.log(greaterThan10(ages));
console.log(smallerThan10(ages));

const mixed = [10, "Carlos", 26, 52, 30, 42, "Paulo", "John", 64, 20, 10];

const filterNumbers = (data: (number | string)[]) =>
    data.filter((item) => typeof item === "number");

const filterText = (data: Array<number | string>) =>
    data.filter((item) => typeof item === "string");

console.log(filterNumbers(mixed));
console.log(filterText(mixed));
