class Book {
    name: string;
    price: number;
    constructor(name: string, price: number) {
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

const book = new Book("Harry Potter", 66.5);

console.log(book instanceof Book);
