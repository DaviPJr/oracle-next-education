async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepJson = await consultaCep.json();

        if (consultaCepJson.erro) {
            throw new Error('CEP não encontrado');
        }

        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');

        cidade.value = consultaCepJson.localidade;
        logradouro.value = consultaCepJson.logradouro;
        estado.value = consultaCepJson.uf;

        console.log(consultaCepJson);

        return consultaCepJson;

    } catch (error) {
        mensagemErro.innerHTML = '<p>CEP inválido, tente novamente!</p>'
        console.error(error)
    }   
}
    

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

