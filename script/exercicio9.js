const nota1 = Number(prompt("digite a primeira nota"))
const nota2 = Number(prompt("digite a segunda nota"))
const nota3 = Number(prompt("digite a terceira nota"))

const media = (nota1+nota2+nota3)/3
console.log(media)

if (media >= 7) {
  alert("aprovado")
} else if(media >= 5 <7) {
  alert("recuperaçao")
}else if(media <5) {
alert("reprovado")
}

