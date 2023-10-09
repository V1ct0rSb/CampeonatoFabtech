const jogosDaRodada1 = [
    {
      horario: "16:00",
      timeMandante: "Fluminense",
      timeVisitante: "Botafogo",
      arbitro: "Anderson Daronco",
      data: "01/10/2023",
      arena: "Maracanã",
    },
    {
      horario: "18:30",
      timeMandante: "São Paulo",
      timeVisitante: "Corinthians",
      arbitro: "Wilmar Roldán",
      data: "02/10/2023",
      arena: "Morumbi",
    },
    {
      horario: "15:00",
      timeMandante: "Atlético Mineiro",
      timeVisitante: "Cruzeiro",
      arbitro: "Ricardo Marques Ribeiro",
      data: "03/10/2023",
      arena: "Mineirão",
    },
    // Adicione mais jogos conforme necessário
  ];

  const jogosDaRodada2 = [
    {
      horario: "16:00",
      timeMandante: "Palmeiras",
      timeVisitante: "Santos",
      arbitro: "Leandro Pedro Vuaden",
      data: "08/10/2023",
      arena: "Allianz Parque",
    },
    {
      horario: "19:00",
      timeMandante: "Grêmio",
      timeVisitante: "Internacional",
      arbitro: "Braulio Machado",
      data: "09/10/2023",
      arena: "Arena do Grêmio",
    },
    {
      horario: "17:30",
      timeMandante: "Vasco da Gama",
      timeVisitante: "Flamengo",
      arbitro: "Wilton Pereira Sampaio",
      data: "10/10/2023",
      arena: "São Januário",
    },
    // Adicione mais jogos conforme necessário
  ];

  const rodadaSelect = document.getElementById("rodada-select");
  const tabelaJogosProximos = document.getElementById("jogos-proximos");

  function preencherTabela(tabela, jogos) {
    // Limpar o conteúdo existente da tabela
    tabela.innerHTML = "";

    // Criar a linha de cabeçalho da tabela
    const cabecalho = document.createElement("tr");
    cabecalho.innerHTML = `
    <th>Horário</th>
    <th>Time Mandante</th>
    <th>Time Visitante</th>
    <th>Árbitro</th>
    <th>Data</th>
    <th>Arena</th>
  `;
    tabela.appendChild(cabecalho);

    // Preencher a tabela com dados de jogos
    jogos.forEach((jogo) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
      <td>${jogo.horario}</td>
      <td>
        <img class="logo-time" src="assets/img/${jogo.timeMandante}.png" alt="Logo ${jogo.timeMandante}" />
        <p>${jogo.timeMandante}</p>
      </td>
      <td>
        <img class="logo-time" src="assets/img/${jogo.timeVisitante}.png" alt="Logo ${jogo.timeVisitante}" />
        <p>${jogo.timeVisitante}</p>
      </td>
      <td>${jogo.arbitro}</td>
      <td>${jogo.data}</td>
      <td>${jogo.arena}</td>
    `;
      tabela.appendChild(linha);
    });
  }

  function preencherTabelas(rodada) {
    const jogos =
      rodada === "rodada1"
        ? jogosDaRodada1
        : rodada === "rodada2"
        ? jogosDaRodada2
        : [];

    preencherTabela(tabelaJogosProximos, jogos);
  }

  // Event listener para a mudança na seleção de rodada
  rodadaSelect.addEventListener("change", () => {
    const selectedRodada = rodadaSelect.value;
    preencherTabelas(selectedRodada);
  });

  // Preencher as tabelas inicialmente com a rodada selecionada
  const selectedRodada = rodadaSelect.value;
  preencherTabelas(selectedRodada);