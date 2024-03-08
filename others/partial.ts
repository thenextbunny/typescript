// Partial indicate that all Interface properties are opcional

interface Keyboard {
    name: string;
    layout: string;
    price: number;
}

const keyboard1 = {
    name: "Logitech",
    layout: "Brazil",
};

const keyboard2 = {
    name: "RedDragon",
    price: 25.2,
};

const logPrice = (data: Partial<Keyboard>) => {
    if (data.price) return console.log(data.price + 5);
};

logPrice(keyboard1);
logPrice(keyboard2);
