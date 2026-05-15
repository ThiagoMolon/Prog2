const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const formIMC = document.getElementById("formIMC");
const resultadoDiv = document.getElementById("resultado");
const imcValor = document.getElementById("imc-valor");
const imcCategoria = document.getElementById("imc-categoria");

// Elementos de informação
const infoCards = {
    "AB": document.getElementById("AB"),
    "PN": document.getElementById("PN"),
    "SB": document.getElementById("SB"),
    "OB1": document.getElementById("OB1"),
    "OB2": document.getElementById("OB2"),
    "OB3": document.getElementById("OB3")
};

formIMC.addEventListener("submit", function (event) {
    event.preventDefault();

    const pesoVal = parseFloat(peso.value);
    const alturaVal = parseFloat(altura.value);

    // Validação
    if (pesoVal <= 0 || alturaVal <= 0) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    // Cálculo do IMC
    const imc = pesoVal / (alturaVal * alturaVal);

    // Determinar categoria
    let categoria, categoriaKey;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        categoriaKey = "AB";
    } else if (imc >= 18.5 && imc < 25) {
        categoria = "Peso normal";
        categoriaKey = "PN";
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
        categoriaKey = "SB";
    } else if (imc >= 30 && imc < 35) {
        categoria = "Obesidade grau I";
        categoriaKey = "OB1";
    } else if (imc >= 35 && imc < 40) {
        categoria = "Obesidade grau II";
        categoriaKey = "OB2";
    } else {
        categoria = "Obesidade grau III";
        categoriaKey = "OB3";
    }

    // Exibir resultado
    imcValor.textContent = imc.toFixed(2);
    imcCategoria.textContent = categoria;
    resultadoDiv.classList.remove("d-none");

    // Ocultar todos os cards de informação
    Object.values(infoCards).forEach(card => {
        card.classList.add("hidden-info");
    });

    // Mostrar apenas o card da categoria
    if (infoCards[categoriaKey]) {
        infoCards[categoriaKey].classList.remove("hidden-info");
    }
});