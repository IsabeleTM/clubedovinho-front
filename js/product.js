const TABLE = document.getElementById('table-product');


let dados = [
    {
        id: 1, 
        nome: 'Quinta do Morgado',
        categoria: 'Vinho Tinto Suave',
        imagem: 'https://gbarbosa.vtexassets.com/arquivos/ids/209157-1200-auto?v=638354953318400000&width=1200&height=auto&aspect=true',
        quantidade: 12,
        valor: 10.90,
    },

    {
        id: 2, 
        nome: 'Periquita',
        categoria: 'Vinho Tinto Seco',
        imagem: 'https://gbarbosa.vtexassets.com/arquivos/ids/208012-1200-auto?v=638354950834400000&width=1200&height=auto&aspect=true',
        quantidade: 24,
        valor: 40.50,
    },

    {
        id: 3,
        nome: 'Casal Garcia',
        categoria: 'Vinho Branco Suave',
        imagem: 'https://gbarbosa.vtexassets.com/arquivos/ids/258793-1200-auto?v=638683093417400000&width=1200&height=auto&aspect=true',
        quantidade: 35,
        valor: 60.50,
    },
];

dados.forEach((product) => {
    TABLE.innerHTML += `
    <tr>
        <td>${product.id}</td>
        <td>${product.nome}</td>
        <td>${product.categoria}</td>
        <td> <img onclick="abrirModal('${product.nome}', '${product.imagem}')" src="${product.imagem}" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${product.imagem}"width="100px"> </td>
        <td>${product.quantidade}</td>
        <td>${product.valor}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">
               Editar
            </a>
            <a href="#" class="btn btn-outline-danger btn-sm">
               Excluir
            </a>
        </td>
    </tr>
 `;
});


function abrirModal (nome, imagem) {
    document.getElementById('modal_produto_nome').innerHTML = nome;
    document.getElementById('modal_produto_body').innerHTML = `
        <img src="${imagem}" width="100%">
        `;

}


