// keyof indicates that a key is from an Interface or type

interface Headset {
    brand: string;
    isBluetooth: boolean;
}

let key: keyof Headset;

key = "brand";
key = "isBluetooth";

console.log(key);

const coordinates = (x: number, y: number) => {
    return { x, y };
};

let coord: typeof coordinates;

// ! ERROR because coord is an object
// let coord = "string"

// eslint-disable-next-line prefer-const
coord = (x, y) => {
    return { y, x };
};

console.log(coord(12, 14));
