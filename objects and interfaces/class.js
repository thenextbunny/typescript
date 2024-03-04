"use strict";
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    localizePrice() {
        return this.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
}
const book = new Product("Harry Potter", 66.5);
console.log(book instanceof Product);
