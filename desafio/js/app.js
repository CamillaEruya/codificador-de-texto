let codificar = {};
let decodificar = {};
let cryp = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

function botaoCodificar(){
    let codificar = document.querySelector('#texto').value;
    cryp.forEach(element => {
        codificar = codificar.replaceAll(element[0], element[1]);
    });

    document.querySelector('#codificacao').value = codificar;

    // Limpar o campo de texto após codificar
    document.querySelector('#texto').value = '';
}

function botaoDecodificar(){
    let codificar = document.querySelector('#texto').value;
    cryp.forEach(element => {
       codificar = codificar.replaceAll(element[1], element[0]);
    });

    document.querySelector('#codificacao').value = codificar;

    // Limpar o campo de texto após decodificar
    document.querySelector('#texto').value = '';
}

async function botaoCopiar() {
    try {
        let copiar = document.querySelector('#codificacao').value;
        await navigator.clipboard.writeText(copiar);
        console.log('Texto copiado para a área de transferência.');

        // Limpar o campo de texto após copiar
        document.querySelector('#codificacao').value = '';
    } catch (err) {
        console.error('Erro ao copiar texto:', err);
    }
}

document.getElementById('clipboardCopy').addEventListener('click', botaoCopiar);