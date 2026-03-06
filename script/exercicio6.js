function exercicio6 () {}

// entrada
const totalsegundos = Number(prompt("Digite a duração em segundos"))

// processamento
const horas =(totalsegundos/3600);
const minutos =((totalsegundos%3600/60));
const segundos =totalsegundos%60;

//saída
alert ("horas: " + horas + "minutos: " + minutos + "segundos: " + segundos) 