class Car {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Doblo extends Car {
    brand: string;
    constructor(name: string, brand: string) {
        super(name);

        this.brand = brand;
    }
}

const doblo = new Doblo("Doblo", "Mercedes");

console.log(doblo instanceof Doblo, doblo instanceof Car);
