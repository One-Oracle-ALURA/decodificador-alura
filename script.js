function converterTexto() {
    var textoEntrada = document.getElementById("input-text").value.toLowerCase();
    var operacao = document.querySelector('input[name="operacao"]:checked').value;
    var textoSaida = "";
  
        if (operacao === "criptografar") {
            textoSaida = criptografarTexto(textoEntrada);
            } else {
            textoSaida = descriptografarTexto(textoEntrada);
            }
        
            document.getElementById("output-text").value = textoSaida;
}
  
function criptografarTexto(texto) {
    return texto.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}
  
function descriptografarTexto(texto) {
    return texto.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}
  
function copiarParaAreaTransferencia() {
    var textoSaida = document.getElementById("output-text");
    textoSaida.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
  
function alternarOperacao() {
    var radios = document.getElementsByName("operacao");
        for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radios[i].checked = false;
            if (i + 1 < radios.length) {
            radios[i + 1].checked = true;
            } else {
            radios[0].checked = true;
            }
            break;
        }
    }
}

function limparCampos() {
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";
  }
  