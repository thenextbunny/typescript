const getSales = async () => {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();

    calculateSales(data);

    return data;
};

getSales();

interface Details {
    cor: string;
    marca: string;
}

type Sale = [string, number, string, Details];

const calculateSales = (sales: Sale[]) => {
    let totalWithFor = 0;

    for (let i = 0; i < sales.length; i++) {
        totalWithFor += sales[i][1];
    }

    document.body.innerHTML = `<p>Total with for: ${totalWithFor}</p>`;

    const totalWithReduce = sales.reduce((total, sale) => total + sale[1], 0);

    document.body.innerHTML += `<p>Total with reduce: ${totalWithReduce}</p>`;
};
