import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { ano: 2010, qtd: 10 },
    { ano: 2011, qtd: 20 },
    { ano: 2012, qtd: 15 },
    { ano: 2013, qtd: 25 },
    { ano: 2014, qtd: 22 },
    { ano: 2015, qtd: 30 },
    { ano: 2016, qtd: 28 },
  ];

  new Chart(
    document.getElementById('aquisicoes'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.ano),
        datasets: [
          {
            label: 'Aquisicoes por ano',
            data: data.map(row => row.qtd)
          }
        ]
      }
    }
  );
})();
