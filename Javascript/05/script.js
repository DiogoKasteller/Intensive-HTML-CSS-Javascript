/*
Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/

let boolean = true

const isBoolean =
  typeof boolean == "boolean" ? "É um boolean" : "Não é um boolean"

alert(isBoolean)
