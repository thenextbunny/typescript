// Record constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

interface LiteralObject {
    [key: string]: unknown;
}

type LiteralObjectWithRecord = Record<string, unknown>;
// type LiteralObjectWithRecord = Record<"title" | , unknown>;

const logTitle = (data: LiteralObject) => {
    if ("title" in data) return console.log(data.title);
    // if (data && typeof data === "object" && "title" in data) return console.log(data.title);
};

const logTitleWithRecord = (data: LiteralObjectWithRecord) => {
    if ("title" in data) return console.log(data.title);
};

console.log(
    logTitle({
        title: "Title",
    })
);

// ! ERROR
// console.log(logTitle(200));

console.log(
    logTitleWithRecord({
        title: "Record",
    })
);
