const agruparPontos = (listaPontos) => {
  const pontuacaoRuim = [];
  const pontuacaoBaixa = [];
  const pontuacaoMedia = [];
  const pontuacaoAlta = [];

  
  listaPontos.map((data) => {
    data.map((item) => {
      const [valor] = Object.values(item);
      if (valor <= 25) {
        pontuacaoRuim.push(valor);
      } else if (valor <= 50) {
        pontuacaoBaixa.push(valor);
      } else if (valor <= 75) {
        pontuacaoMedia.push(valor);
      } else {
        pontuacaoAlta.push(valor);
      }
    });
  });

  const qtdRuimTotal = pontuacaoRuim.length;
  const qtdBaixaTotal = pontuacaoBaixa.length;
  const qtdMediaTotal = pontuacaoMedia.length;
  const qtdAltaTotal = pontuacaoAlta.length;
  
  return [qtdRuimTotal, qtdBaixaTotal, qtdMediaTotal, qtdAltaTotal]
};

module.exports = agruparPontos;
