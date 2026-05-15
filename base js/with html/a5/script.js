
function calcular(event) {
    event.preventDefault();
    
    let numeroDiarias = Number(document.getElementById("numeroDiarias").value);
    let valorDiaria = Number(document.getElementById("valorDiaria").value);
    
    if (isNaN(numeroDiarias) || isNaN(valorDiaria) || numeroDiarias < 0 || valorDiaria < 0) {
        alert('Por favor, insira valores válidos!');
        return;
    }
    
    let totalReceber = numeroDiarias * valorDiaria;
    totalReceber -= totalReceber * 0.15;
    
    document.getElementById("exibicaoTotal").innerHTML = "R$ " + totalReceber.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("resultado").classList.remove("oculto");
}

document.getElementById('formDiarias').addEventListener('submit', calcular);