const cliente = {
    nome: 'Guilerme',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['1236545658', '2156547256']
}

cliente.enderecos = [
    {
        rua: 'Avenida paris',
        numero: '2325',
        eHApartamento: true,
        complemento: 'ap 364'
    }
]

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para telefone residencial ${telefoneComercial}`)
    console.log(`Ligando para telefone comercial ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)