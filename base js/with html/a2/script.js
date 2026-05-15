function calcularMedia() {
  const nome = document.getElementById("nome").value;
  const nota1 = document.getElementById("nota1").value;
  const nota2 = document.getElementById("nota2").value;
  const nota3 = document.getElementById("nota3").value;

  const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
  let msg;
  let css;

  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    nota3 < 0 ||
    nota3 > 10
  ) {
    msg = "Notas devem ser entre 0 e 10";
    css = "alert alert-danger";
  } else if (nome.trim() === "") {
    msg = "O nome do aluno é obrigatório";
    css = "alert alert-danger";
  } else if (isNaN(media)) {
    msg = "Todas as notas devem ser preenchidas";
    css = "alert alert-danger";
  } else {
    if (media >= 7) {
      msg = nome + " foi aprovado(a) com média " + media.toFixed(1);
      css = "alert alert-success";
    } else if (media >= 6 && media < 7) {
      msg = nome + " está em exame com média " + media.toFixed(1);
      css = "alert alert-warning";
    } else {
      msg = nome + " foi reprovado(a) com média " + media.toFixed(1);
      css = "alert alert-danger";
    }
  }
  const resultado = document.getElementById("resultado");
  resultado.textContent = msg;
  resultado.className = css;
}
