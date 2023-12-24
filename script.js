function obterConselho() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const conselhoEmIngles = data.slip.advice;
      traduzirParaPortugues(conselhoEmIngles);
    })
    .catch(error => {
      document.getElementById('result').innerHTML = "Erro ao obter conselho.";
    });
}

function traduzirParaPortugues(textoEmIngles) {
  const apiKey = 'SUA_CHAVE_DE_API'; // Substitua com sua chave de API do Yandex Translate
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(textoEmIngles)}&lang=en-pt`;

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const conselhoTraduzido = data.text[0];
      document.getElementById('result').innerHTML = "Conselho: " + conselhoTraduzido;
    })
    .catch(error => {
      document.getElementById('result').innerHTML = "Erro ao traduzir conselho.";
    });
}

function limpar() {
  document.getElementById('result').innerHTML = "";
}
