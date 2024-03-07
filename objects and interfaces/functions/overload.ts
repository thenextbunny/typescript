/*
function normalized(value: string): string;
function normalized(value: string[]): string[];
function normalized(value: string | string[]): string | string[] {
    if (typeof value === "string") return value.trim().toLowerCase();
    return value.map((item) => item.trim().toLowerCase());
}

console.log(normalized("  Oi"));
console.log(normalized(["Uva   ", "   Jaca"]));
*/

type NormalizedInput = string | string[];
type NormalizedOutput<T extends NormalizedInput> = T extends string ? string : string[];

const normalized = <T extends NormalizedInput>(value: T): NormalizedOutput<T> => {
    if (typeof value === "string") {
        return value.trim().toLowerCase() as NormalizedOutput<T>;
    } else {
        return value.map((item) => item.trim().toLowerCase()) as NormalizedOutput<T>;
    }
};

console.log(normalized("  Oi")); // Output: "oi"
console.log(normalized(["Uva   ", "   Jaca"])); // Output: ["uva", "jaca"]
