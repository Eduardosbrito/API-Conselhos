function obterConselho() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerHTML = "Conselho: " + data.slip.advice;
    })
    .catch(error => {
      document.getElementById('result').innerHTML = "Erro ao obter conselho.";
    });
}

function limpar() {
  document.getElementById('result').innerHTML = "";
}
