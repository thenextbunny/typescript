// Basic
const { body }: { body: HTMLElement } = document;

// With function
const compare = (type: "larger" | "smaller", ...numbers: number[]) => {
    if (type === "larger") return Math.max(...numbers);
    return Math.min(...numbers);
};

console.log(body);
console.log(compare("larger", 5, 5, 5, 6, 9, 8, 75, 4));
