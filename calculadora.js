const display = document.getElementById("mostra");
const ac = document.getElementById("ac");
const raiz = document.getElementById("raiz");
const parenteses = document.getElementById("parenteses");
const virgula = document.getElementById("virgula");
const delet = document.getElementById("delet");
const igual = document.getElementById("igual");

// operadores
const divisao = document.getElementById("dividir");
const menos = document.getElementById("menos");
const vezes = document.getElementById("vezes");
const mais = document.getElementById("mais");

// numeral
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const zero = document.getElementById("zero");



mais.addEventListener("click", () => {display.textContent += "+";});

menos.addEventListener("click", () => {display.textContent += "-";});

vezes.addEventListener("click", () => {display.textContent += "*";});

divisao.addEventListener("click", () => {display.textContent += "/";});

ac.addEventListener("click", () => {display.textContent = " ";})


um.addEventListener("click", () => {display.textContent += "1";})
dois.addEventListener("click", () => {display.textContent += "2";})
tres.addEventListener("click", () => {display.textContent += "3";})
quatro.addEventListener("click", () => {display.textContent += "4";})
cinco.addEventListener("click", () => {display.textContent += "5";})
seis.addEventListener("click", () => {display.textContent += "6";})
sete.addEventListener("click", () => {display.textContent += "7";})
oito.addEventListener("click", () => {display.textContent += "8";})
nove.addEventListener("click", () => {display.textContent += "9";})



igual.addEventListener("click", () => {
try {
    let resultado = eval(display.textContent)
    display.textContent = resultado;
} catch (error) {
    display.textContent = "erro";
}

})
