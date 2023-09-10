
//1. Leia o c�digo abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. false ", resultado)


resultado = bool1 && bool2 && bool3 
console.log("b. false ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. true ", resultado)

console.log("d. booleano", typeof resultado)


//2. Seu colega se aproxima de voc� falando que o c�digo dele n�o funciona como devia.

//Vamos ajud�-lo: consegue perceber algum problema? O que ser� impresso no console? */


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/*Código está imprimindo uma string, pois ele está fazendo uma pergunta e não está transformando a resposta em Number.
Os valores estão sendo impressos de forma concatenada, em forma de texto. A soma nâo está sendo realizada.*/ 


/*3. Ainda sobre o exerc�cio anterior.

Sugira ao seu colega uma solu��o para que o valor impresso no console seja, de fato, a soma dos dois n�meros.*/

let primeiroValor = prompt("Digite valor 1")
let segundoValor = prompt("Digite valor 2")

const resultado = Number(primeiroValor) + Number(segundoValor)

console.log(resultado)