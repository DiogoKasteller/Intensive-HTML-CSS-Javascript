/*
Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/

let num = 3

const parOuImpar = num % 2 == 0 ? "É um número par" : "É um número ímpar"

alert(`Número:  ${num}
${parOuImpar}
`)
