interface Notebook {
    name: string;
    brand: string;
    size: number;
    color: string;
}

// This object is for test
const notebook = {
    name: "Inspiration",
    brand: "Dell",
    size: 12,
    color: "red",
};

const isNotebook = (data: unknown): data is Notebook => {
    if (data && typeof data === "object" && "name" in data) return true;
    return false;
};

const handleNotebook = (data: unknown) => {
    if (isNotebook(data)) {
        console.log(data);
    }
};

handleNotebook(notebook);
