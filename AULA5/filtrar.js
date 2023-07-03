const clientes = require('./clientes.json');

// hasOwnProperty --> é a função que verifica se um atributo tem um valor

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter(cliente =>{
        return cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
    })
}

const filtrados = filtrarApartamentoSemComplemento(clientes)

console.log(filtrados)

// const alvo = clientes[0].endereco.complemento

// console.log(alvo)