let etanol, gasolina

function calcular() {
    etanol = frmFlex.inputEtanol.value
    gasolina = frmFlex.inputGasolina.value
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
    } else {
        document.getElementById('status').src = "img/gasolina.png"
    }
    return false // Não submeter os dados do formulário
}

function limpar() {
    document.getElementById('status').src = "img/neutro.png"
}