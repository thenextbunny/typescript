interface Company {
    nome: string;
    fundacao: number;
    pais: string;
}

interface Notebook {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Company;
    empresaMontadora: Company;
}

const showProductInDom = (data: Notebook) => {
    const {
        nome,
        preco,
        descricao,
        garantia,
        seguroAcidentes,
        empresaFabricante,
        empresaMontadora,
    } = data;

    document.body.innerHTML = `
    <div>
      <h1>${nome}</h1>
      <p>Preço: ${preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
      })}</p>
      <p>Descrição: ${descricao}</p>
      <p>Garantia: ${garantia} anos</p>
      <p>Tem seguro acidente: ${seguroAcidentes ? "sim" : "não"}</p>
      <p>Fabricante: ${empresaFabricante.nome} fundada na ${empresaFabricante.pais} em ${
        empresaFabricante.fundacao
    }</p>
    <p>Montadora: ${empresaMontadora.nome} fundada na ${empresaMontadora.pais} em ${
        empresaMontadora.fundacao
    }</p>
    </div>
  `;
};

const fetchProduct = async () => {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");

    const data = await response.json();

    showProductInDom(data);
};

fetchProduct();
