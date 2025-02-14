const TABLE = document.getElementById('table-countries');


let dados = [
    {
        id: 1, 
        nome: 'Brasil',
        bandeira: '🇧🇷',
    },

    {
        id: 2, 
        nome: 'Canada',
        bandeira: '🇨🇦',
    },

    {
        id: 3,
        nome: 'Japao',
        bandeira: '🇯🇵',
    },
];

dados.forEach((countries) => {
    TABLE.innerHTML += `
    <tr>
        <td>${countries.id}</td>
        <td>${countries.nome}</td>
        <td>${countries.bandeira}</td>
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


