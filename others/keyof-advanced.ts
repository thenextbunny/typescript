interface Game {
    name: string;
    year: number;
    platforms: string[];
}

interface Phone {
    name: string;
    year: number;
    os: string;
}

const game: Game = {
    name: "Mario Bros",
    year: 2022,
    platforms: ["XBOX", "PlayStation", "Windows"],
};

const phone: Phone = {
    name: "iPhone",
    year: 2023,
    os: "iOS",
};

const checkInterface = <Interface>(data: unknown, key: keyof Interface): data is Interface => {
    if (data && typeof data === "object" && key in data) return true;
    return false;
};

const handle = (data: object) => {
    if (checkInterface<Game>(data, "platforms")) {
        console.log(data.name);
    }

    if (checkInterface<Phone>(data, "os")) {
        console.log(data.os);
    }
};

console.log(handle(game));
console.log(handle(phone));
