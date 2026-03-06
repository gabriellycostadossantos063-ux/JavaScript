
const footer = document.getElementById("footer")
//footer.style.color = "red"
const novotítulo = document.createElement("h2")
novotítulo.textContent = "um novo título"
footer.appendChild(novotítulo)
//getElementByid = puxa um elemento do HTML
const header = document.getElementById("exemplo")
header.appendChild(novotítulo)

header.addEventListener("click", () => {
    alert("batata")
})