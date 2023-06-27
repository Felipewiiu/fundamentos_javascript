const pessoa = {
    nome: 'Felipe',
    profissao: 'Engenheiro'
}

pessoa.telefone = "21 956523654"
pessoa.nome = 'Felipe de oliveira'
console.log(pessoa.telefone)

// Delete serve para deletar um atributo dentro de um objeto

delete pessoa.profissao

console.log(pessoa)