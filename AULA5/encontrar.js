const cliente = require('./clientes.json')

// console.log(cliente[1].nome)

function encontrar(lista, chave, valor ) {
    return lista.find((item) => item[chave].includes(valor))
}

const encontrado = encontrar(cliente, "telefone", "58996279799")

// console.log(encontrado)

const elementos = ["Felipe", "Maria", "João"]

console.log(
    elementos.find(nome => nome === "Maria"))