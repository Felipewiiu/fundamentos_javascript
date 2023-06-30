const cliente = {
    nome: 'Guilerme',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['1236545658', '2156547256'],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log('Saldo insuficiente')
        }else{
            this.saldo -= valor
            console.log(`Pagamento realizado. novo saldo ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(50)

