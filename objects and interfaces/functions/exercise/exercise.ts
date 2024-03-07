// With const
type RoundInput = string | number;
type RoundOutput<T extends RoundInput> = T extends string ? string : number;

const roundUp = <T extends RoundInput>(value: T): RoundOutput<T> => {
    if (typeof value === "number") return Math.ceil(value) as RoundOutput<T>;
    return String(Math.ceil(Number(value))) as RoundOutput<T>;
};

console.log(roundUp(11.5));
console.log(roundUp("9.75"));

// Without const
function roundUp2(value: string): string;
function roundUp2(value: number): number;
function roundUp2(value: string | number): string | number {
    if (typeof value === "number") return Math.ceil(value);
    return Math.ceil(Number(value)).toLocaleString();
}

console.log(roundUp2(11.2));
console.log(roundUp2("11.75"));
