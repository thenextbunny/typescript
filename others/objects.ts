interface Children {
    name: string;
    age: number;
}

const children1 = {
    name: "Ana",
    age: 12,
    isStudent: true,
};

const children2 = {
    name: "Pedro",
    age: 20,
    height: 1.73,
};

const logAge = (data: Children) => {
    console.log(data.age);
};

logAge(children1);
logAge(children2);
