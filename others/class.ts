class Bus {
    // readonly is only read
    readonly type = "bus";
    // public is default
    brand: string;
    color: string | undefined;
    // private is only accessed inside the class
    private price: number;
    // protected is only access inside the class and subclass
    constructor(brand: string, price: number, color?: string) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    // When using private, we can access price by a method
    getPrice() {
        return Bus.handlePrice(this.price);
    }
    static handlePrice(price: number) {
        return price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
}

const bus = new Bus("Mercedes", 200000, "red");

console.log(bus.brand);
console.log(bus.getPrice());
console.log("Is instance:", bus instanceof Bus);
