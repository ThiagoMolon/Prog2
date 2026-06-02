let lampada = "apagada";

const lampadaImage = document.getElementById("lampada-image");
const mensagemElement = document.getElementById("mensagem");
const botaoLigar = document.getElementById("ligar");
const botaoDesligar = document.getElementById("desligar");
const botaoQuebrar = document.getElementById("quebrar");

// Atualiza a imagem da lâmpada com base no estado atual
function atualizarImagem() {
  if (lampada === "acesa") {
    lampadaImage.src = "img/lampada-acesa.png";
  } else if (lampada === "apagada") {
    lampadaImage.src = "img/lampada-apagada.png";
  } else if (lampada === "quebrada") {
    lampadaImage.src = "img/lampada-quebrada.png";
  }
  mensagemElement.textContent = "";
}

// Inicializa a imagem
atualizarImagem();

// Botão Ligar
botaoLigar.addEventListener("click", function () {
  if (lampada === "quebrada") {
    mensagemElement.textContent = "A lâmpada está quebrada.";
  } else {
    lampada = "acesa";
    atualizarImagem();
  }
});

// Botão Desligar
botaoDesligar.addEventListener("click", function () {
  if (lampada === "quebrada") {
    mensagemElement.textContent = "A lâmpada está quebrada.";
  } else {
    lampada = "apagada";
    atualizarImagem();
  }
});

// Botão Quebrar
botaoQuebrar.addEventListener("click", function () {
  lampada = "quebrada";
  atualizarImagem();
});
