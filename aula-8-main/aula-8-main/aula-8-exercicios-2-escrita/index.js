


/* Exercício 1 - escrita */


let idadeUsario = prompt("Qual é a sua idade?")

let idadeMelhorAmigo = prompt("Qual é a idade do seu melhor amigo?")

let idadeMaior = (idadeUsuario > idadeMelhorAmigo)

let diferencaIdade = (idadeUsario - idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

console.log("Diferença de idade:", diferencaIdade) 


/* Exercício 2 - escrita */

let numeroPar = prompt("Digite um número par?")
let restoDivisao = numeroPar % 2 

console.log(restoDivisao)

/* Padrão com números pares: resto 0. 
Padrão números ímpares: resto 1 */



/* Exercício 3 - escrita */

let idadeAnos = prompt("Qual é a sua idade em anos?")
let idademeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeDias * 24

console.log("Sua idade em meses é:" + idadeAnos * 12)
console.log("Sua idade em dias é:" + idadeAnos * 365)
console.log("Sua idade em horas é:" + idadeDias * 24)


/* Exercício 4 - escrita */


let numero1 = prompt("Digite número 1:")
let numero2 = prompt("Digite número 2:")

let maior = Number(numero1) > Number(numero2)
let igual = Number(numero1) === Number(numero2)
let divisivel1 = (Number(numero1) % Number(numero2)) === 0
let divisivel2 = (Number(numero2) % Number(numero1)) === 0


console.log("O numero 1 é maior que o número 2? " + maior)
console.log("O numero 1 é maior que o número 2? " + igual)
console.log("O numero 1 é divisível pelo número 2? " + divisivel1)
console.log("O numero 2 é divisível pelo número 1? " + divisivel2)



