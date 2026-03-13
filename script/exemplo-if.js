const nota1 = Number(prompt("digite a primeira nota"))
const nota2 = Number(prompt("digite a segunda nota"))
const nota3 = Number(prompt("digite a terceira nota"))

const media = (nota1+nota2+nota3)/3
console.log(media)// ele esta no f12 na aba console

if (media <3) {
  alert("horrivel")
} else if(media <= 6) {
  alert("da pra melhorar")
}else if(media <= 10) {
alert("exelente")
}else {
    alert("essa nota nao existe")
}

