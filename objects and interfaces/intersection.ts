type Author = {
    name: string;
};

type Article = {
    pages: number;
};

const handleProduct = (data: Author & Article) => {
    data.name;
    data.pages;
};

console.log(
    handleProduct({
        name: "John Green",
        pages: 10,
    })
);
