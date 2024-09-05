let etanol, gasolina

function calcular() {
    etanol = frmFlex.inputEtanol.value
    gasolina = frmFlex.inputGasolina.value
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src = "imagens/etanol.png"
    } else {
        document.getElementById('status').src = "imagens/gasolina.png"
    }
    return false // Não submeter os dados do formulário
}