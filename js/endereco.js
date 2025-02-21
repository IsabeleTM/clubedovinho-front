const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGADOURO = document.getElementById('logadouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');

INPUT_CEP.addEventListener('blur', () => {
    if (INPUT_CEP.lenght !=8){
        return
    }
    let url = `https://viacep.com.br//ws/${INPUT_CEP.value}/json`;

    fetch(url)
    .then(res => res.json())
    .then(endereco => {
        INPUT_LOGADOURO.value = endereco.logradouro;
        INPUT_BAIRRO.value = endereco.bairro;
        INPUT_CIDADE.value = endereco.localidade;
        INPUT_UF.value = endereco.uf;
        INPUT_NUMERO.focus();        
    });
});

