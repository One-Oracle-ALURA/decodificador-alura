function convertText() {
    var inputText = document.getElementById("input-text").value.toLowerCase();
    var operation = document.querySelector('input[name="operation"]:checked').value;
    var outputText = "";
  
    if (operation === "encrypt") {
      outputText = encryptText(inputText);
    } else {
      outputText = decryptText(inputText);
    }
  
    document.getElementById("output-text").value = outputText;
  }
  
  function encryptText(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
  }
  
  function decryptText(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
  }
  
  function copyToClipboard() {
    var outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
  }
  