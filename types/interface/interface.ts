interface Product {
  name: string;
  price: number;
  isImported: boolean;
}

const fillData = (data: Product) => {
  document.body.innerHTML += `
        <div>
            <h2>${data.name}</h2>
            <p>Price: ${data.price.toLocaleString("en-US")}</p>
            <p>Is imported: ${data.isImported ? "yes" : "no"}</p>
        </div>
    `;
};

fillData({
  name: "Computer",
  price: 2200.5,
  isImported: false,
});

fillData({
  name: "Video game",
  price: 3000.5,
  isImported: true,
});
