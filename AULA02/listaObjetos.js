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

cliente.enderecos.push({
    rua: 'Rua jericó',
    numero: '588',
    eHApartamento: true,
    complemento: 'ap 36'
})

//console.log(cliente)

const apenasApartamento = cliente.enderecos.filter((endereco) => endereco.eHApartamento === false)

console.log(apenasApartamento)