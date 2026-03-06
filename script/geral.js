function exercicio2() {
  const valor = Number (prompt ("Digite o valor da hora"))
const horas = Number (prompt ("Digite as horas trabalhadas"))
//Processamento
const resultado = valor*horas
// Saida
alert("Seu salario é: " + resultado)  

}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2 ()})
// o carinha de escuta - addEventListner


function exercicio3() {// Entrada
const peso1 = Number(prompt("Digite o peso da pessoa 1:"))
const peso2 = Number(prompt("Digite o peso da pessoa 2:"))
const peso3 = Number(prompt("Digite o peso da pessoa 3:"))
const peso4 = Number(prompt("Digite o peso da pessoa 4:"))
const peso5 = Number(prompt("Digite o peso da pessoa 5:"))
// Processamento
//calculo da media
const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

// Saída
alert(resultado)

}

const buttonexercicio3 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2 ()})
// o carinha de escuta - addEventListner

function exercicio4 () {// entrada
const celsius = Number (prompt("Digite a temperaturaa em graus celsius"))

// processamento

// convertando temperatura
const resultado = (9* celsius + 160) / 5
//Saída
alert("Convertendo para fahrenheit o resultado é" + resultado)
}

const buttonexercicio4 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2 ()})
// o carinha de escuta - addEventListner

function exercicio5 () {// entrada
const milhas = Number (prompt("Digite converta para quilometros"))

// processamento
const resultado = milhas * 1.60934;

// saída
alert(resultado)
}

const buttonexercicio5 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2 ()})
// o carinha de escuta - addEventListner

function exercicio6 () {// entrada
const totalsegundos = Number(prompt("Digite a duração em segundos"))

// processamento
const horas =(totalsegundos/3600);
const minutos =((totalsegundos%3600/60));
const segundos =totalsegundos%60;

//saída
alert ("horas: " + horas + "minutos: " + minutos + "segundos: " + segundos) 
}

const buttonexercicio6 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2 ()})
// o carinha de escuta - addEventListner

function exercicio7 () {const km = Number(prompt("Digite a distancia em quilometros"))

//processamento
const metros = km * 1000;
const centimetros = km * 100000;
                  
 
//saída
alert ("Em km :" +km+"Em metro: "+metros+"Em centimetro: "+centimetros)
}

const buttonexercicio7 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2 ()})
// o carinha de escuta - addEventListner

function exercicio8 () {const numero = Number (prompt("Digite um numero inteiro"))

alert (numero*0)
alert (numero*1)
alert (numero*2)
alert (numero*3)
alert (numero*4)
alert (numero*5)
alert (numero*6)
alert (numero*7)
alert (numero*8)
alert (numero*9)
alert (numero*10)
}

const buttonexercicio8 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2 ()})
// o carinha de escuta - addEventListner



