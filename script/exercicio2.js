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