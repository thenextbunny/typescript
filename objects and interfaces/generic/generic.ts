// A basic example
const returner = <variable>(something: variable): variable => {
    return something;
};

console.log(returner<string>("Books"));
console.log(returner(123));
console.log(returner(true));

// A advanced example
const numbers = [20, 25, 62, 85, 98, 75, 14, 25];
const fruits = ["Banana", "Apple", "Orange", "Grape", "Lemon"];

const firstFive = <T>(list: T[]): T[] => {
    return list.slice(0, 5);
};

console.log(firstFive(numbers));
console.log(firstFive(fruits).map((fruit) => fruit));

// A very advance example
const dataType = <T>(data: T): { data: T; type: string } => {
    const result = {
        data: data,
        type: typeof data,
    };

    return result;
};

console.log(dataType(true));
