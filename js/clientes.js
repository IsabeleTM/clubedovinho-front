const TABLE = document.getElementById('table-clientes');

fetch('https://feitoza.tec.br/api/index.php')
.then(res => res.json())
.then(json => carregarTabela (jason)); 

function carregarTabela(clientes) {
clientes.forEach(cada => {
    TABLE.innerHTML += `
    <tr>
    <td>${cada.id}<td/>
    <td>${cada.nome}</td>
    <tr>
    `;
});
} 

let dados = [
    {
        id: 1, 
        nome: 'Joana Maria Flores',
        email: 'jojos@gmail.com',
        telefone: "(85) 999001133",
        foto: '',
        data_cadastro: "12/01/2024",
        data_ultimo_pedido: "13/02/2025",
    },
    {
        id: 2, 
        nome: 'Joana Maria Flores',
        email: 'jojos@gmail.com',
        telefone: "(85) 999001133",
        foto: '',
        data_cadastro: "12/01/2024",
        data_ultimo_pedido: "13/02/2025",
    },
];
dados.forEach((clientes) => {
    TABLE.innerHTML += `
    <tr>
        <td>${clientes.id}</td>
        <td>${clientes.nome}</td>
        <td>${clientes.email}</td>
         <td>${clientes.telefone}</td>
          <td>${clientes.foto}</td>
        <td> ${clientes.imagem} </td>
        <td>${clientes.data_cadastro}</td>
        <td>${clientes.data_ultimo_pedido}</td>
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

