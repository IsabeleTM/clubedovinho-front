// document.body.style.backgroundColor = 'red';

function enviar() {
    event.preventDefault(); //impedir o form de ser enviado

    let input_nome = document.getElementById('nome');
    let input_descricao = document.getElementById('descricao');


    if (input_nome.value == '') {
        input_nome.style.border = '1px solid red';
        document.getElementById ('erro_nome').style.display = 'block';
    } else {
        input_nome.style.border = '1px solid green';
        document.getElementById ('erro_nome').style.display = 'none';
    }
        
    if  (input_descricao.value =='') {
        input_descricao.style.border = '1px solid red';
        document.getElementById (erro_descricao).style.display = 'block';
    } else {
        input_descricao.style.border = '1px solid green';
        document.getElementById (erro_descricao).style.display = 'none'
    }
        


    
}