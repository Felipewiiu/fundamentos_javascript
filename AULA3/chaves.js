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


// Retorna todas as chaves de dentro de um objeto

const chavesDoObjeto = Object.keys(cliente)

if(chavesDoObjeto.includes("endereco")){
    console.log(`Endereço encontrado `)
}else{
    console.log(`Endereço não encontrado `)

}

console.log(chavesDoObjeto)



