const dados = require("./cliente.json")

// Esse método serve para transformar um objeto em string
// JSON é global

const clienteEmString = JSON.stringify(dados)

// console.log(clienteEmString)

const trasformaObjeto = JSON.parse(clienteEmString)

console.log(trasformaObjeto)