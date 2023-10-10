// Dados de exemplo para o gráfico de barras
const dadosDeExemplo = {
  labels: [
    "Brasileiro(s)",
    "Argentino(s)",
    "Equatoriano(s)",
    "Chileno(s)",
    "Outros",
  ],
  datasets: [
    {
      label: "Nacionalidade Média",
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 0.4)",
      borderWidth: 1,
      data: [110, 54, 20, 10, 87],
    },
  ],
};

// Configuração do gráfico
const config = {
  type: "bar",
  data: dadosDeExemplo,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Criação do gráfico
const ctx = document.getElementById("grafico-de-barras").getContext("2d");
new Chart(ctx, config);
