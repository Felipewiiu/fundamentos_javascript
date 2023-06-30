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
    },
    {
        rua: 'Rua boitata',
        numero: '033',
        eHApartamento: false,
        complemento: 'lote 56'

    }
]

// Esse é um modo de se interar sobre um objeto


for (let chave in cliente){
     console.log(`A chave ${chave} possui o valor ${cliente[chave]}`)
}

